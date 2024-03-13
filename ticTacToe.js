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