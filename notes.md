MAKE THIS HABIT
1. Pull the repository's latest changes from GitHub (git pull)
2. Make changes to the code
3. Commit the changes (git commit)
4. Push the changes to GitHub (git push)

- all deliverables must have 10 commits
  - how to commit:
    - Verify you have the latest code (git pull)
    - Refactor, test, and/or implement a small portion of cohesive code (test code test)
    - Commit and push (git commit git push)
    - Repeat
- git fetch: returns latest changes in github w/o changing repository
- git status: see what's missing in clones -> missing commit
  
Sept 6 – GitHub & Start-up Application 
  - Git add (directory -> GitHub) 
  - Git commit (GitHub -> .git) 
  - Git checkout (.git -> directory) 

  - Learn command line!!! 
    - ls 
    -  cd  
    - pwd 
    - cat  
    - git clone url from github (clones github code into directory) 

Sept 18, 2024 – HTML: Structuring Web Applications 
  <html lang =”en”? 
  </html> 
  Html -> head -> title -> First HWML 
  	->  body -> Hello world 
  - Paragraph: <p> hello world</p> 
  - Links: absolute & relative 
  - div - block division of content  
  - span - inline span of content
  - h<1-9> - text heading. 
    
  learn & practice languages: https://www.w3schools.com/html/default.asp
  practice coding: codepen.io

Sept 23, 2024
CSS & HTML
- anything beginning with . (.box) creates a class
- specification in HTML for class <p class="foo">
  - CSS class foo now only applies to the subcode in <p class="foo">
- HTML & CSS work from top down
- colors are RGB in hex values
- CSS is for artist!
  - don't let the beautiful piece get in HTML
  - HTML = function, CSS = styling
  - reactive behavior in CSS

startupHtml.md:
- 10+ commit changes
- use "Live Server VS Code extension" to view code in browser
- Deploy:
  - simon deployFiles.sh (copied on 9/27 to startup_spec)
  - use -s for service parameter:
  ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
  example: ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup
  **must use POSIX compliant console to run deployFiles.sh from project directory -> this deliverable = https://startup.yourdomainname

pnwplantpedia notes
- index.html: included the website title, menu with links to each page, a welcome header, login/create option, and my name & git hub.
- about.html: very similar to the "About" page for Simon, this page gives a brief rundown of what PNW Plant Pedia is and how someone can benefit from using it. Currently a rough draft, will get tweeked.
- saved.html: this page is where users will be able to access the plants they "save" aka add to their favorites. The organization of this page is still to be determined, but it will likely be a list of links to the specific plant they found on the pedia page. I need to learn more about "saving" or starring things on HTML.
- pedia.html: the essence of the site! The page is organized into the four major groups of plants. Each of those groups then has its own table that will be filled with plant images, names, and facts. This is a rough outline of what the site will contain, but eventually it will have more of a gallery feel. For now, it has teh bare bones info and structure.


React: JavaScript library for interaction with user
- public files
- src files
- .gitignore file for nodes that shouldn't be changed

Vite: toolchain to easily bundle code for converting to React
- debug support
- easily support JSX, TypeScript, & CSS flavors
- prefer .jsx for files with JSX (better editing tools)
*convert to React using vite
- index.html -> main.jsx (ReactDOM.createRoot) -> app.jsx (function App() {return...})
NPM commands:
- npm run dev = bundling code to temp directory that Vite HTTP server loads from 
- npm run build = deploy production environment
  - executes build script in package.json, invokes Vite
  - Vite then injects proper JS & outputs everything in dist subdirectory (dist)


API & Service Calls (see rapidapi.com for API examples)
- search for public APIs and mess around
- no authentication, yes https yes coors
- grab content from several APIs to make site
- 