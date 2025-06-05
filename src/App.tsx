import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import './App.css';

function App() {
  let [color, setColor] = useState('');
  let [size, setSize] = useState(8);


  const changeSize = (event: { target: { value: string; }; }) => {
    setSize(parseInt(event.target.value));
    generateScreen(size);
  };

  const removeAllChildNodes = (parent: HTMLDivElement) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  };

  const generateScreen = (size: number): void => {
    let screen = document.querySelector('.screen') as HTMLDivElement;

    if(screen) {
      removeAllChildNodes(screen);
      screen.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);

      for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        screen.appendChild(div);
      }
    }
    else {
      console.error("The 'screen' element was not found!");
    }
  };

  const handlePainting = (color: string): void => {
    let colors = ['#ee1100', '#ff6644', '#feae2d', '#aacc22', '#11aabb', '#4444dd', '#442299'];
    let screen = document.querySelector('.screen') as HTMLDivElement;
    let cell = screen.children as HTMLCollectionOf<HTMLElement>;

    for(let i = 0; i < size * size; i++) {
      switch(color) {
        case 'black':
          setColor('black');
          cell[i].addEventListener('mouseover', () => {
            cell[i].style.backgroundColor = color;
          })
          break;

        case 'white':
          setColor('white');
          cell[i].addEventListener('mouseover', () => {
            cell[i].style.backgroundColor = color;
          })
          break;

        case 'rainbow':
          setColor('rainbow');
          cell[i].addEventListener('mouseover', () => {
            let randomIndex = Math.floor((Math.random() * 7));
            cell[i].style.backgroundColor = colors[randomIndex];
          })
          break;

        default:
          break;
      }
    }
  };

  const eraseScreen = () => {
    let screen = document.querySelector('.screen') as HTMLDivElement;
    removeAllChildNodes(screen);
    generateScreen(size);
  }

  useEffect(() => {
    generateScreen(size);
  }, []);


  return (
    <>
      <header>
        <h1>Etch a Sketch</h1>
      </header>

      <main>
        <Controls changeSize={changeSize} currentSize={size} handlePainting={handlePainting} eraseScreen={eraseScreen} />
        <div className="screen"></div>
      </main>

      <footer>
        <p>Made by <a href="https://github.com/Bre323">Bre323</a></p>
      </footer>
    </>
  )
}

export default App;
