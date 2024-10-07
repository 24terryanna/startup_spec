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

## PNW Plant Pedia Update Notes: HTML Startup
+ index.html: included the website title, menu with links to each page, a welcome header, login/create option, and my name & git hub.
+ about.html: very similar to the "About" page for Simon, this page gives a brief rundown of what PNW Plant Pedia is and how someone can benefit from using it. Currently a rough draft, will get tweeked.
+ saved.html: this page is where users will be able to access the plants they "save" aka add to their favorites. The organization of this page is still to be determined, but it will likely be a list of links to the specific plant they found on the pedia page. I need to learn more about "saving" or starring things on HTML.
+ pedia.html: the essence of the site! The page is organized into the four major groups of plants. Each of those groups then has its own table that will be filled with plant images, names, and facts. This is a rough outline of what the site will contain, but eventually it will have more of a gallery feel. For now, it has teh bare bones info and structure.
    + 3rd party service call: here, I will implement a third party service call to Wikipedia where users can find more information on PNW plants.
