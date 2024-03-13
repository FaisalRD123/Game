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