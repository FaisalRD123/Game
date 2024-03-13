let me, rival;
let myPoint = 0, rivalPoint = 0;

let options = ['rock', 'paper', 'scizzor'];

window.onload = function () {  /* Function for putting images on the screen */
    for (let i = 0; i <= 2; i++) {  /* Array for images*/
        let option = document.createElement('img');
        option.id = options[i];
        option.src = options[i] + '.png';

        /* To append on clicking */
        option.addEventListener('click', selectOption);
        document.getElementById('options').append(option); /* Appending options */
    }
}

function selectOption() {
    me = this.id;
    document.getElementById('my-option').src = me + '.png';

    /* Math.Floor to get a whole number */
    rival = options[Math.floor(Math.random() * 3)];
    document.getElementById('rival-option').src = rival + '.png';

     /* Game logic */
     if (me == 'paper') {
        if (rival == 'rock'){
            myPoint++;
        }
        else if (rival == 'scizzor') {
            rivalPoint++;
        }
     }
     else if (me == 'rock') {
        if (rival == 'scizzor'){
            myPoint++;
        }
        else if (rival == 'paper') {
            rivalPoint++;
        }
     }
     else if (me == 'scizzor') {
        if (rival == 'paper'){
            myPoint++;
        }
        else if (rival == 'rock') {
            rivalPoint++;
        }
     }

    /* Converting points to text */
    document.getElementById('my-points').innerText = myPoint;
    document.getElementById('rival-points').innerText = rivalPoint;
}