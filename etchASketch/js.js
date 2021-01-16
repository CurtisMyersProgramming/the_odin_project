const container = document.querySelector('.container'); // setting refrence to container div which will house grid
const btn = document.querySelector('#reset-button');// refrence to button in html
window.onload = defaultGrid// when window is loaded call function 

//function to setup default grid
function defaultGrid(){
    createGrid(16) // defualt grid size 
    fillGrid(16) // default grid size 
}


// function to create grid based off deauly size 
function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size},1fr`; // setup css grid
    container.style.gridTemplateRows = `repeat(${size}, 1fr`;// setup css grid
}

//function to fill grid established in createGrid method
function fillGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
                let newDiv = document.createElement('div'); // create a new div element
                newDiv.style.display = 'flexbox';
                newDiv.className = 'newDiv';
                newDiv.addEventListener('mouseover', colour); // setup event of mouse over to call colour method 
                container.appendChild(newDiv); // append new div to 
    }
  }

// fucntion for random colour block takes event as param
function colour(e){
    //methods to assign random number equal to RGB value
    randomR = Math.floor(Math.random()*256);
    randomG = Math.floor(Math.random()*256);
    randomB = Math.floor(Math.random()*256);

    // event param is target set style to 3 random rgb elements 
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}






  btn.addEventListener('click', newSize);

  function newSize(){
     
      let newSizes = prompt("enter a number between 1 - 64");
      if(newSizes < 1 || newSizes > 64){
          newSize();
          
  } else {
      clearGrid();
      createGrid(newSizes);
      fillGrid(newSizes);
  }
}

function clearGrid(){
    const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  });
}

