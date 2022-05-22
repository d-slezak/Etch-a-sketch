const board = document.getElementById('board');
const squareColor = 'red';

let numSquares = 16;
size = (1/numSquares)*100;

for (let i = 0; i < numSquares; i++)
{
    for (let j = 0; j < numSquares; j++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'black';
        square.style.width = `${size}%`;
        square.style.paddingTop = `${size}%`;
        board.appendChild(square);
    }
}

let gridSquares = board.querySelectorAll('div');
gridSquares.forEach(square => square.addEventListener('mouseover', colorSquares));

function colorSquares () {
    this.style.backgroundColor = squareColor;
}