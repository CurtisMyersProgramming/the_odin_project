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
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = "ME TOO";
divBorderBackground.appendChild(h1);
divBorderBackground.appendChild(p);
container.appendChild(divBorderBackground);


divBorderBackground.style.backgroundColor = "pink";
divBorderBackground.style.borderColor = "black";

