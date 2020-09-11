function createDiv(squaresPerSide = 16) {
    const container = document.querySelector('.container');
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++){
        const square = document.createElement('div');
        container.appendChild(square);
        square.classList.add('box');
    }
}

function createSquares (squaresPerSide = 16) {
    const box = document.querySelectorAll('.box');
    const width = (96 / squaresPerSide);
    const height = (80 / squaresPerSide);
    for (let i = 0; i < box.length; i++) {
        box[i].style.width = `${width}vw`;
        box[i].style.height = `${height}vh`;
    }
}

function createGrid (squaresPerSide = 16) {
    createDiv(squaresPerSide);
    createSquares(squaresPerSide);
} 

function removeGrid () {
    const container = document.querySelector('.container');
    const box = document.querySelectorAll('.box');
    for (let i = 0; i < box.length; i++) {
        container.removeChild(box[i]);
    }
}

function randomNumber () {
    const number = Math.floor(Math.random() * 256); 
    return number;
}

function getColors (element) { //Returns an array with the number of colors in rgb.
    const color = element.style.backgroundColor;
    const stringNumbers = color.substring(4, color.length -1);
    const colorNumbers = stringNumbers.split(',');
    return colorNumbers ;
}


function changeColor (element) {
    const red = randomNumber();
    const green = randomNumber();
    const blue = randomNumber();
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    element.style.backgroundColor = randomColor;
    }


function changeWhiter (element) {
    const colorNumbers = getColors(element);
    let red = Number(colorNumbers[0]);
    let green = Number(colorNumbers[1]);
    let blue = Number(colorNumbers[2]);
    red += 25;
    green += 25;
    blue += 25;
    const color = `rgb(${red}, ${green}, ${blue})`;
    element.style.backgroundColor = color;
}


function addEventToBox () {
    const allBoxes = document.querySelectorAll('.box');
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener('mouseover', () => {
            if (getColors(allBoxes[i]).length === 1) {
                changeColor(allBoxes[i]);
            } else {
                changeWhiter(allBoxes[i]);
            }
            
        })
    }
}


const reset = document.getElementById('reset');
const newGrid = document.getElementById('newGrid');


reset.addEventListener('click', () => { 
    const gridNumber = document.querySelectorAll('.box').length;
    removeGrid();
    createGrid(Math.sqrt(gridNumber));
    addEventToBox();
})

newGrid.addEventListener('click', () => {
    removeGrid();
    const result = window.prompt('How many Squares per side do you want the grid to be?', '16 or any number');
    const promptToNumber = parseInt(result);
    
    if (promptToNumber == null) {
        createGrid();
    } else {
        createGrid(promptToNumber);
    }
    addEventToBox();
})

//Creates the starting Grid
createGrid();
addEventToBox();