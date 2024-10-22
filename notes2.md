MIDTERM QUESTIONS 
- In the following code, what does the link element do?
    A. define relationship between current document & external resource (ex stylesheet)
        - href = url of linked source

- In the following code,  what does a div tag do? 
    A. used to group & organize content: container for other elements

- In the following code, what is the difference between the #title and .grid selector? 
    - #title = ID Selector: ID unique within mage, higher specificity (override classes), apply to unique element
        - targets id="title" element
    - .grid = class selector: . selects element by class attribute, used on multiple elements throughout page, lower specificity, more flexible & reusable

- In the following code, what is the difference between padding and margin? 
    - padding = space inside element between content & border; inc size of element (background & border)
    - margin = space outside element (border and surrounding); create space between without affecting size (external spacing)

- Given this HTML and this CSS how will the images be displayed using flex? 
    - apply flexbox layout to container w/ images
    - html file has div class with image-container
    - flexbox container in css (flex-direction, justify-content, align-items control display)

- What does the following padding CSS do? 
    - padding = adds space inside element, inc size (unless box-sizing: border-box is used)
    - padding: 20x adds to all four sides (vs padding-top, -right, -bottom, -left)
    padding: 10px 20px = 1st value is top/bottom, 2nd is left/right

- What does the following code using arrow syntax function declaration do? 
    - arrow functions are fast way to write functions
    - lexical "this" binding -> inherit this from surrounding scope
    - don't have arguments, super, or new.target
    - can't be used as constructors with new
    - best used for callbacks, event handlers, and when "this" to behave predicatbly

- What does the following code using map with an array output? 
 - map() = iterate over array & apply function to each elements -> crate new array with results
    - original array is unchanged
    - cleaner than for loop
    - paramteres: currentValue = element being processed in the array
    - index = = current element processing
    - array = array map() is called on

- What does the following code output using getElementByID and addEventListener? 
    - getElementByID: selects HTML element by its unqiue id (manipulate/access properties)
    - addEventListener: attach event handler to element, allows faster response to user interactions 

- What does the following line of Javascript do using a # selector? 
    - # used to target elements by id when selecting them with methods like querySelector()
    - essential to CSS and JS for styling and manipulating elements uniquely identified by id attributes

- Which of the following are true? (mark all that are true about the DOM) 
    - DOM = Document Object Model = interface for web docs
        - reps structure of doc as tree of objects, allowing scripts (JS) to manipulate content, structure & style
        - Nodes: element (rep html elements like div & p), text (contain text content w/in elements), attribute (rep attributes of HTML, id and class), comment (rep comments in html)
        - access: document.getElementByClassName

- By default, the HTML span element has a default CSS display property value of:  
    A. inline

- How would you use CSS to change all the div elements to have a background color of red? 
    - CSS rule: 
    div {
        background-color: red;
    }
    - setup: 
    <div style="background-color: red;">This div has a red background.</div>


- How would you display an image with a hyperlink in HTML? 
    <a href="URL_of_the_link" target="_blank">
        <img src="URL_of_the_image" alt="Description of the image">
    </a>

- In the CSS box model, what is the ordering of the box layers starting at the inside and working out? 
+---------------------+
|       Margin        |  <-- 4. Margin
| +-----------------+ |
| |      Border     | |  <-- 3. Border
| | +-------------+ | |
| | |   Padding   | | |  <-- 2. Padding
| | | +---------+ | | |
| | | | Content | | | |  <-- 1. Content
| | | +---------+ | | |
| | +-------------+ | |
| +-----------------+ |
+---------------------+


- Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected? 
    - wrap trouble in <span> element and apply CSS to that specific <span>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Color</title>
    <style>
        .green-text {
            color: green; /* Sets the text color to green */
        }
    </style>
</head>
<body>
    <p>
        <span class="green-text">trouble</span> double
    </p>

- What will the following code output when executed using a for loop and console.log? 
    - iterates over specificed range of values and logs each value to the console during each iteration

- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? 
    - Use document.getElementById() to select the element by its id.
    - Change the text color by setting the style.color property to "green".
    <body>
    <p id="byu">This is some text that will change color.</p>

    <script>
        // Select the element with the id "byu"
        const element = document.getElementById("byu");
        
        // Change the text color to green
        element.style.color = "green";
    </script>
</body>

- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? 
    1. Paragraph: <p>
    2. Ordered list: <ol>
    3. Unordered list: <ul>
    4. Second level heading: <h2>
    5. First level heading: <h1>
    6. Third level heading: <h3>

- How do you declare the document type to be html? 
    - use <!DOCTYPE html> at beginning of HTML document

- What is valid javascript syntax for if, else, for, while, switch statements? 
    if (condition) {
        // Code to execute if condition is true
    } else {
        // Code to execute if condition is false
    }

    for (initialization; condition; increment) {
    // Code to be executed
    }

    while (condition) {
    // Code to be executed
    }
    switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if no cases match
    }

- What is the correct syntax for creating a javascript object? 
    - let objectName = new Object();
        objectName.key1 = value1;
    - let objectName = {key1: value1, key2: value}

- Is it possible to add new properties to javascript objects? 
    - Yes. JS objects are dynamic (add, modify, delete properties at any time)

- If you want to include JavaScript on an HTML page, which tag do you use? 
    - <script> placed under <head> or <body> in HTML doc

- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected? 
    - wrap animal in html element like <span> or <p> & use JS to target specific element to modify
    <body>
    <p>animal and fish</p>
    <!-- Wrap "animal" in a span -->
    <p><span id="animal">animal</span> and fish</p>
    <script>
        // Select the element with the id "animal"
        let animalElement = document.getElementById("animal");

        // Change the text content of the selected element to "crow"
        animalElement.textContent = "crow";
    </script>
    </body>

- Which of the following correctly describes JSON? 
    - lightweight data format used for storing and exchanging. Easy to read and write, and for machines to parse and generate.
        - text based // data structure key-value pairs // widely used

- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do? 
    - chmod = change mode: changes permission of file or directory
    - pwd = print working directory: displays current working directory
    - cd = change directory
    - ls = list: lists files and directories in current directory
    - vim = text editor: opens vim text editor for editing files
    - nano = text editor: opens the nano text editor, simpler text editor than vim
    - mkdir = make directory: creates new directory
    - mv = move: moves or renames files or directories
    - rm = remove: deletes files or directories
    - man = manual: displys the manual for a command
    - ssh = secure shell: connects to a remote mahcine via SSH
    - ps = process status: displays info about active processes
    - wget = web get: downloads files from the web
    - sudo = superuuser do: runs commands with superuser (root) privileges

- Which of the following console command creates a remote shell session? 
    - ssh creates a remote shell session

- Which of the following is true when the -la parameter is specified for the ls console command? 
    - will list all files & directories (including hidden ones) in the current directory in a detailed format.

- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? 
    1. Top level domain (TLD): last segment of domain name = .click
    2. Root domain: referred to as base domain = bozo.click
    3. subdomain: part of larger domain = banana.fruit is subdomain of root domain bozo.click. 
        - fruit = subdomain of bozo.click -> banana.fruit further subdomain

- Is a web certificate is necessary to use HTTPS. 
    - Yes. specifically ssl/tls certificate

- Can a DNS A record can point to an IP address or another A record. 
    - DNS can only point to IP address, not another A record. 
    - A record cannot point to anotehr A record, but CNAME record can be used to alias one domain to another

- Port 443, 80, 22 is reserved for which protocol? 
    - Port 80: HTTP
    - Port 443: HTTPS
    - Port 22: SSH

- What will the following code using Promises output when executed? 
    1. Create a Promise: Define your asynchronous operation using the Promise constructor.
    2. Handle Resolution: Use .then() to handle successful resolutions.
    3. Handle Rejection: Use .catch() to handle any errors.
    4. Use async/await: Alternatively, wrap your Promise handling in an async function and use await to get the result, with try/catch to handle errors.