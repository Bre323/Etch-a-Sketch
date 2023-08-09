const screen = document.querySelector('.screen');
const sizeValue = document.getElementById('size-value');
const slider = document.getElementById('slider');
const black = document.getElementById('black-bt');
const white = document.getElementById('white-bt');
const rainbow = document.getElementById('rainbow-bt');
const erase = document.getElementById('erase-bt');


function generateScreen() {
    for(let i = 0; i < 64; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        screen.appendChild(div);
    }
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeSize(value) {
    sizeValue.textContent = value;

    removeAllChildNodes(screen);
    screen.setAttribute('style', `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`);

    for(let i = 0; i < value*value; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        screen.appendChild(div);
    }
}


slider.oninput = event => changeSize(event.target.value);


generateScreen();
