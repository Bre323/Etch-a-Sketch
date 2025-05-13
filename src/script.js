/*
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

function handlePainting(color) {
    let colors = ['#ee1100', '#ff6644', '#feae2d', '#aacc22', '#11aabb', '#4444dd', '#442299'];
    let val = slider.value;
    let cell = screen.children;
  
    for(let i = 0; i < val*val; i++) {
      cell[i].addEventListener('mouseover', () => {
        switch(color) {
          case 'black':
            cell[i].style.backgroundColor = 'black';
            break;
  
          case 'white':
            cell[i].style.backgroundColor = 'white';
            break;
  
          case 'rainbow':
            let randomIndex = Math.floor((Math.random() * 7));
            cell[i].style.backgroundColor = colors[randomIndex];
            break;
  
          default:
            break;
        }
      })
    }
  }

function eraseScreen(value) {
  let val = slider.value;
  let cell = screen.children;

  removeAllChildNodes(screen);
  generateScreen(value);  
}


slider.oninput = event => changeSize(event.target.value);
black.onclick = () => handlePainting('black');
white.onclick = () => handlePainting('white');
rainbow.onclick = () => handlePainting('rainbow');
erase.onclick = () => eraseScreen(slider.value);


generateScreen();
*/