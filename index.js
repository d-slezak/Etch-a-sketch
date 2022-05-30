const board = document.getElementById('board');
let squareColor = 'red';
let backgroundColor = 'black';

let numSquares = 16;
size = (1/numSquares)*100;

function buildBoard() {
    for (let i = 0; i < numSquares; i++)
    {
        for (let j = 0; j < numSquares; j++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = backgroundColor;
            square.style.width = `${size}%`;
            square.style.paddingTop = `${size}%`;
            board.appendChild(square);
        }
    }

    let gridSquares = board.querySelectorAll('div');
    gridSquares.forEach(square => square.addEventListener('mouseover', colorSquares));

}

function changeColor(color)
{
    squareColor = color;
}

function resetBoard() {
    board.innerHTML = '';
    buildBoard();
}

function colorSquares () {
    this.style.backgroundColor = squareColor;
}

let eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', changeColor('black'));

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', resetBoard);

buildBoard();