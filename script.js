const screen = document.querySelector('.screen');

function generateScreen() {
    for(i = 0; i < 64; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');

        screen.appendChild(div);
    }
}




generateScreen();