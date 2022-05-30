const board = document.getElementById('board');
let erase = false;
let squareColor = 'red';
let selectedColor = 'red';
let backgroundColor = 'black';

let numSquares = 16;


function buildBoard() {
    let size = (1/numSquares)*100;
    board.innerHTML = '';
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


    let footnote = document.querySelector('#footnote');
    footnote.textContent = `${numSquares} x ${numSquares}`;

}

function changeColor(color)
{
    squareColor = color;
}

function resetBoard() {
    buildBoard();
}

function colorSquares () {
    this.style.backgroundColor = squareColor;
}

function changeSize() {
    let newSize= prompt("Select a size");
    numSquares = newSize;
    buildBoard();
}

function pickColor(color) {
    selectedColor = color;
    squareColor = color;

    document.querySelector('#picker').style.backgroundColor = color;
}

function toggleEraser(){

    let eraseToggle = document.querySelector('#eraser');

    if (erase == false) //
    {
        erase = true;
        squareColor = backgroundColor;
        eraseToggle.style.backgroundColor = 'cyan';
    }
    else
    {
        erase = false;
        squareColor = selectedColor;
        eraseToggle.style.backgroundColor = 'white';
    }
}

let sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', changeSize);

let pickerBtn = document.querySelector('#picker');
pickerBtn.oninput = (e) => pickColor(e.target.value);

let eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click',toggleEraser);

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', resetBoard);

buildBoard();