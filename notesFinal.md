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

5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?

6. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?

7. Given the following MongoDB query, select all of the matching documents {name:Mark}

8. How should user passwords be stored?

9. Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?

10. What is the websocket protocol intended to provide?

11. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM

12. Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.

13. Given a set of React components that include each other, what will be generated

14. What does a React component with React.useState do?

15. What are React Hooks used for?

16. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks

17. Given React Router code, select statements that are true.

18. What does the package.json file do?

19. What does the fetch function do?

20. What does node.js do?

21. What does pm2 do?

22. What does Vite do?