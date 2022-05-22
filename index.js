const board = document.getElementById('board');

let squares = 16;
size = (1/squares)*100;

for (let i = 0; i < squares; i++)
{
    for (let j = 0; j < squares; j++)
    {
        const square = document.createElement('div');
        square.style.backgroundColor = 'black';
        square.style.width = `${size}%`;
        square.style.paddingTop = `${size}%`;
        board.appendChild(square);
    }
}