1. What is the default port for HTTP/HTTPS/SSH? 
    + HTTP: port 80
    + HTTPS: port 443
    + SSH: port 22

2. What does an HTTP status code in the range of 300/400/500 indicate?
    + 300-399: Redirection
        + client must take additional actions to complete request, often involving redirection to another URL.
        + 301: move permantently
        + 302: found (temporary redirect)
        + 304: not modified (for caching purposes)
    + 400-499: client errors
        + client's request is invalid or cannot be processed
        + 400: bad request
        + 402: unauthorized
        + 403: forbidden
        + 404: not found
    + 500-599: servcer errors
        + server encountered an error & couldn't compelte request
        + 500: internal server error
        + 502: bad gateway
        + 503: service unavailable

3. What does the HTTP header content-type allow you to do?
    + allows client & server to specify the media type of resource being sent
    + header is crucial for correctly interpreting the content of request or response
    + use cases:
        1. indicate format of the data
            + text/html - content is HTML doc
            + application/json - content is JSON data
            + text/css - content is CSS stylesheet
            + image/png - content is PNG image
        2. Enable proper rendering or handling
            + determines display content (render HTML, download a file)
            + for API: helps client know how to parse the data (JSON)
        3. Facilitate file uploads:
            + specifies the type of data being sent in HTTP requests
                + multipart/form-data - used for file uploads
                + application/x-www-form-urlencoded - used for form submissions
    

4. What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
    + Secure Cookie: only sent over HTTPS connections, ensuring secure transmission and interception prevention over secure connections (HTTP)
        + purpose: protects cookie data from being transmitted over unencrypted channels, limiting risk of man-in-the-middle attacks
        + often used for senstitive cookies like session tokens
    + HttppOnly Cookie: cannot be accessed via JavaScript, making it immune to client-side scripts, like those in cross-site scripting attacks
        + prevents attackers from stealing cookies via malicious script injected into browser
    + SameSite Cookie: restricts hot its sent with cross-site requests, mitigating cross-site request forgery attacks
        + strict: cookie only sent with requests originating from the same site
        + lax: cookie sent with same-site requests and some cross-site requests (top-level navigation like clicking a link)
        + none: cookie can be sent with all requests, but must have the secure attribute if value is used
    + example of all used: Set-Cookie: sessionId=abc123; Secure; HttpOnly; SameSite=Strict
        + only sent over HTTPS (Secure), can't be accessed via JS (HttpOnly), only included in requests from same site (SameSite=Strict) 

5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
    + example: 
    const express = require('express');
    const app = express();

    // Middleware 1: Logs the request method and URL
    app.use((req, res, next) => {
        console.log(`Middleware 1: ${req.method} ${req.url}`);
        next();
    });

    // Middleware 2: Specific to the /api route
    app.use('/api', (req, res, next) => {
        console.log('Middleware 2: Matched /api');
        next();
    });

    // Middleware 3: Handles GET requests to /api/document
    app.get('/api/document', (req, res) => {
        console.log('Middleware 3: Handling /api/document');
        res.send('Document response');
    });

    // Start the server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    + example console output:
        Middleware 1: GET /api/document
        Middleware 2: Matched /api
        Middleware 3: Handling /api/document


6. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
    + GET Request: fetches data from server. Front-end processes & uses the returned data
    + POST Request: sends data to the server. Front-end processes the server's acknowledgment or response
    + btoh calls return a Promise, which resolves with the server's repsonse (parsed if .json() is use). Error handling via .catch() ensures network issues or server errors are logged

7. Given the following MongoDB query, select all of the matching documents {name:Mark}

8. How should user passwords be stored? 
    + NEVER stored in plain text
    + use hashing to transform password into fixed-length string difficult to reverse engineer
        + bcrypt for hashing: slow (makes brute-force attacks computationally expensive), salted hashes (prevent identical passwords from having the same hash)

9. Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?

10. What is the websocket protocol intended to provide?
    + Full-duplex communication: allows client & server to send messages to each other independently at any time
    + Persistent connection: once est, remains open, reducing overhead of repeatedly creating & tearing down connections
    + low latency: faster communcation (avoids overhead of HTTP headers & handshakes for every message)
    + efficient use of resources: protocol minimizes bandwidth usage by sending only the necessary data in a lightweight frame format
    + How websocket works:
        + initial http handshake -> persistent connection -> message framing

11. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
    + JSX = JavaScript XML: syntax extension for Javascript used with React
    + JS = JavaScript: dynamic, used to create interactive effects
    + AWS = Amazon Web Services: on-demand cloud computing platforms & APIs
    + NPM = node package manager: package manager for JS, used with Node.js
    + NVM = Node version manager: tool for managing multiple version of Node.js on system

12. Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
    + parameter passed into component as prop
    + text content rendered by the component dynamically generated based on parameter

13. Given a set of React components that include each other, what will be generated?
    + nested structure of HTML elements corresponding to how the components are structured and rendered
        + React uses UI, so output will be hierarchical rep of components & HTML sturcture will reflect this

14. What does a React component with React.useState do?
    + React.useState = hook fo add state to functional components
        + create state variables in component, can be updated and used to re-render component when state changes
        + returns two elements: current state value & function to update the state

15. What are React Hooks used for?
    + allow you to use state, lifecycle methods, and other react features in fucntional components
    + enable functional components to have behaviors that were traditionally only available in class components
    1. managing state in functional components (useState)
    2. side effects (useEffect)
    3. accessing context (useContext): access values from React Context & avoid passing props manually through many component layers
    4. memoizing values (useMemo): optimize performance by only recomputing values when their dependencies change
    5. memoizing functions (useCallback): memoizes function, rely on reference equality to prevent unnecessary re-renders
    6. hangling refs (useRef): persist value across renders without causing re-render when it changes (access DOM elemtns directly, store mutable values)
    7. custom hooks: extract and reuse logic in fucntional components (JS functions that call other hooks internally & return values or functions for component use ) 

16. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks

17. Given React Router code, select statements that are true.

18. What does the package.json file do?

19. What does the fetch function do?

20. What does node.js do?

21. What does pm2 do?

22. What does Vite do?