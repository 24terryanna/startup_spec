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
- CSS is for artist
  - don't let the beautiful piece get in HTML
  - HTML is to make it work smoothly. CSS is for styling.
  - HTML = function, CSS = styling

startupHtml.md:
- 10+ commit changes
- use "Live Server VS Code extension" to view code in browser
- Deploy:
  - simon deployFiles.sh (copied on 9/27 to startup_spec)
  - use -s for service parameter:
  ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
  example: ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup
  **must use POSIX compliant console to run deployFiles.sh from project directory -> this deliverable = https://startup.yourdomainname
