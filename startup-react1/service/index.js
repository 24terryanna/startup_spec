const express = require('express');
const uuid = require('uuid');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/plants', (req, res) => {
  const plants = [
    { id: uuid.v4(), name: 'Douglas Fir', type: 'Tree', location: 'PNW' },
    { id: uuid.v4(), name: 'Sword Fern', type: 'Fern', location: 'PNW' },
    { id: uuid.v4(), name: 'Western Hemlock', type: 'Tree', location: 'PNW' },
  ];
  res.json(plants);
});

useEffect(() => {
  fetch('/api/plants')
    .then(response => response.json())
    .then(data => setPlants(data)); // Set the data to your state
}, []);

useEffect(() => {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => setWeather(data));
}, []);

