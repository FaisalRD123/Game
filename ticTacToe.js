// Tic Tac Toe Java Script code

let panel;
let player1 = 'O';
let player2 = 'X';
let player = player1;
let finished = false;

// On launching the page
window.onload = function () {
    setGame();
}

// Creating the basic ticTacToe structure
function setGame() {
    panel = [
               [' ', ' ', ' '],
               [' ', ' ', ' '],
               [' ', ' ', ' '] 
            ]
    for (let i = 0; i < 3; i++) {     /* Row loop */
    for (let j = 0; j < 3; j++) {   /* Column loop */
                
        let tile = document.createElement('div');
        tile.id = i.toString() + '-' + j.toString();   /* Creating a div element woth all the board numbers starting from 0-0 */
        tile.classList.add('tile');

        if ( i == 0 || i == 1) {
            tile.classList.add('horizontal-line');  /* Adding horizantal line */
        }
        if ( j == 0 || j == 1) {
            tile.classList.add('vertical-line');  /* Adding vertical line */
        }

        tile.innerText = '';
        tile.addEventListener('click', pressed);
        document.getElementById('panel').appendChild(tile); /* Appending div to panel ID on the main page */

    }
}
}

function pressed() {
    if (finished) {
        return;
    }
    
let press = this.id.split('-');
let i = parseInt(press[0]); /* Row */
let j = parseInt(press[1]);  /* Column */

if (panel[i][j] != ' ') {
    return;   /* Checking to see if the spot is empty */
}

panel[i][j] = player;  /* Updating the game after click */
this.innerText = player;

/* Changing players */
if (player == player1) {
    player = player2;
} else {
    player = player1;
}

win(); /* Win function to see if we have winner */

}