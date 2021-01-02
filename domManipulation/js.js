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

