# PNW Plant Pedia
## Startup Specification

Although I’m living in Utah now, I’m an Oregonian at heart! The Pacific Northwest will always be my favorite location on the earth. Growing up, my family and I often spent our weekends and summers outdoors- camping, hiking, biking, kayaking, swimming, going to the beach- you name it. I love studying the ecological systems of the PNW and learning more about plants’ roles in the ecosystem, which brings me to PNW Plant Pedia! This is a site that will provide novice educational opportunities for anyone interested in the plants of the Pacific Northwest. Viewers will be able to access a photographic encyclopedia and select any species of plant that intrigues them. From there, the site will take them to a specified page listing the plants common and scientific names, physical attributes, role in the ecosystem, and a fun fact! Anyone who visits the site will hopefully leave with more knowledge, interest, and care for the natural world.  

## Key Features 
+ Ability to browse multiple pages of different plant specification (gymnosperms, mosses & liverworts, ferns, angiosperms) 
+ Secure access over HTTPS 
+ Ability to enlarge image and view facts about plant species 
+ Able to save plants to “Favorites” section 

## Technologies
+ HTML – two HTML pages: login and the plant gallery (allows for ability to save favorite plants) 
+ CSS – simple styling that uses whitespace, neutral colors, and contrast to allow readability on various screen sizes 
+ JavaScript – gives login page, visually appealing display, backend endpoint calls 
+ React – page reactive to user actions (enlarge images, scrolling through gallery) 
+ Web service – backend service to save plants user selects as “favorite” 
+ Authentication – initial input to create account and login

## HTML Startup Notes
+ index.html: included the website title, menu with links to each page, a welcome header, login/create option, and my name & git hub.
+ about.html: very similar to the "About" page for Simon, this page gives a brief rundown of what PNW Plant Pedia is and how someone can benefit from using it. Currently a rough draft, will get tweeked.
+ saved.html: this page is where users will be able to access the plants they "save" aka add to their favorites. The organization of this page is still to be determined, but it will likely be a list of links to the specific plant they found on the pedia page. I need to learn more about "saving" or starring things on HTML.
+ pedia.html: the essence of the site! The page is organized into the four major groups of plants. Each of those groups then has its own table that will be filled with plant images, names, and facts. This is a rough outline of what the site will contain, but eventually it will have more of a gallery feel. For now, it has teh bare bones info and structure.
    + 3rd party service call: here, I will implement a third party service call to Wikipedia where users can find more information on PNW plants.
    + Websocket data placeholder. Eventually, this will show the most viewed (ie. clicked on) plants in the pedia by users.
    + Database data placeholder. This will display, retrieve, and manage plant information as requested by the user. Specficially, it will involve showing all the plant species, details, and images stored in the database and allow users to search for them. 

## CSS Startup Notes:
+ index.html: using bootstrap, I created a title for the home page, organized correct links to pages for the menu bar, created a class of images for the image scrollbar, and created another container and path to saved for the login information. Added a footer.
+ main.css: created navigation menu bar, coloring and margins for the body, headers, and footer. Created a container for the main content from index.html and an image scrollbar. These standarad styles were applied to my other three CSS files to keep the minimal forest green and white text combination consistent.
+ pedia.html: The same menu bar and footer created in index.html were copied to this file for consistency. I created a class for the four tables of plant families that I will be focusing on. Each table (Gymnosperms, Angiosperms, Mosses & Liverworst, and Ferns) are defined in a class section. Each table has a row of four plant species with the names centered and displayed. Eventually, when the user selects a plant box in the table, it will react by displaying a pop up of information about the plant. This information is still being organized and is not yet displayed.
+ pedia.css: The code for the menu bar and footer were copied to this file from main.css for consistency. The body section contains padding and margin specifications, as well as a basic design for the images that will be included in the pop up of each plant. This code is currently a placeholder for the rough design I'm considering and is not yet in play. There are two elements that include a hover action and create the shape and coloring of the boxes for each plant. 
+ saved.html: The same menu bar and footer created in index.html were copied to this file for consistency. This page is still mostly placeholders for what will appear when the user "saves" a plant. I have not yet implemented the user interaction aspect of this page, but this is the rough layout. It will be simple and organized with images and links of the plants the user saves to their account.
+ saved.css: The code for the menu bar and footer were copied to this file from main.css for consistency. Basic body padding and margin specifications were added. The appearance of this page it complete, but the content is still being developed. More will come as JavaScript and React are implemented.
+ about.html: The same menu bar and footer created in index.html were copied to this file for consistency. Added a style sextion to organize and size the images. I created a container that includes a class row with three images. Following that division is a text class with a description of the site's purpose. Following the text block is another image block, equivalent to the top images. 
+ about.css: The code for the menu bar and footer were copied to this file from main.css for consistency. Added a body element to center the text and add padding. 

## React Startup Notes
+ public directory
    + transferred images directory directly from startup html to startup react.
+ src directory
    + about directory: includes about.jsx (React converted about.html) and about.css (same as previous about.css in CSS startup, but general formating was removed.)
    + home directory: includes home.jsx (React converted index.html) and home.css (same as previous main.css in CSS startup, but general formating was removed.)
    + login directory: includes about.jsx. Currently unused, just placeholder for next startup.
    + pedia directory: includes pedia.jsx (React converted pedia.html) and pedia.css (same as previous about.css in CSS startup, but general formating was removed.) Pedia.jsx includes components for the popups and grid organization. Each plant has an array of unique information (common name, scientific name, image, photo credit.)
    + saved directory: includes saved.jsx (React converted saved.html) and saved.css (same as previous saved.css in CSS startup, but general formating was removed.)
    + App.css: includes general styling for the header, footer, body, and navigation bar. This is applied to every page.
    + App.jsx: imported my four pages and created routes to each directory in App function.
+ index.jsx: imported React, created Root, and rendered App
