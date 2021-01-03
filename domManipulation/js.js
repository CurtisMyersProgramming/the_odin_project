// your javascript file
const container = document.querySelector('#container'); // query the id container

const content = document.createElement('div'); // create an element "div"
content.classList.add('content'); // const content adds class called content
content.textContent = 'This is the glorious text-content!'; // text is added to the div
container.appendChild(content);

//red parapgraph

const redPara = document.createElement('p'); // creates paragraph element
redPara.textContent = "Hey i'm red!"; // adds text content to the element
container.appendChild(redPara); // add to the container when loaded

redPara.style.color = "red"; // style for the paragraph to turn text red

//H3 BLUE

const blueHeading = document.createElement('h3'); // create H3 element
blueHeading.textContent = "i'm a blue h3!"; // adds text content to the element
container.appendChild(blueHeading); // add to the container when loaded

blueHeading.style.color = "blue"; // style for the heading to turn text blue

//DIV BLACK BORDER AND PINK BACKGROUND
const divBorderBackground = document.createElement('div'); // create an element "div"
const h1 = document.createElement('h1'); // create H1 element
h1.textContent = "I'm in a div"; // put text in H1
const p = document.createElement('p'); // create P element
p.textContent = "ME TOO"; // put text in page
divBorderBackground.appendChild(h1); // append h1 to div
divBorderBackground.appendChild(p); // append p tag to div
container.appendChild(divBorderBackground); // append div to container


divBorderBackground.style.backgroundColor = "pink"; // make background pink
divBorderBackground.style.border = "thick solid black"; 

