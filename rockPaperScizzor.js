let me, rival;
let myPoint = 0, rivalPoint = 0;

let options = ['rock', 'paper', 'scizzor'];

window.onload = function () {  /* Function for putting images on the screen */
    for (let i = 0; i <= 2; i++) {  /* Array for images*/
        let option = document.createElement('img');
        option.id = options[i];
        option.src = options[i] + '.png';
    }
}