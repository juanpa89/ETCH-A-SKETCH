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
    const width = Math.floor(96 / squaresPerSide);
    const height = Math.floor(80 / squaresPerSide);
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

const reset = document.getElementById('reset');
const newGrid = document.getElementById('newGrid');

createGrid();

reset.addEventListener('click', () => { //add logic to mantain current grid.
    const gridNumber = document.querySelectorAll('.box').length;
    removeGrid();
    createGrid(Math.sqrt(gridNumber));
})

newGrid.addEventListener('click', () => {
    const result = window.prompt('How many Squares per side do you want the grid to be?', '16 or any number');
    const promptToNumber = parseInt(result);

    if (promptToNumber == null) {
        createGrid();
    } else {
        createGrid(promptToNumber);
    }
})