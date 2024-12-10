const express = require('express');
const fetch = require('node-fetch');
const uuid = require('uuid');
const app = express();

app.use(express.json());

app.use(express.static('public'));

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.get('/api/quote', async (req, res) => {
  try {
    const response = await fetch('https://stoic.tekloon.net/stoic-quote');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching the quote:', error);
    res.status(500).json({ quote: 'Error loading quote.', author: ''});
  }
});

let users = {};

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;
    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
