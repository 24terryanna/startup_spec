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

- What will the following code output when executed using a for loop and console.log? 

- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? 

- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? 

- How do you declare the document type to be html? 

- What is valid javascript syntax for if, else, for, while, switch statements? 

- What is the correct syntax for creating a javascript object? 

- Is it possible to add new properties to javascript objects? 

- If you want to include JavaScript on an HTML page, which tag do you use? 

- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected? 

- Which of the following correctly describes JSON? 

- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do? 

- Which of the following console command creates a remote shell session? 

- Which of the following is true when the -la parameter is specified for the ls console command? 

- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? 

- Is a web certificate is necessary to use HTTPS. 

- Can a DNS A record can point to an IP address or another A record. 

- Port 443, 80, 22 is reserved for which protocol? 

- What will the following code using Promises output when executed? 