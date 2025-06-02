import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import './App.css';

function App() {
  let [size, setSize] = useState(8);


  const changeSize = (event: { target: { value: string; }; }) => {
    setSize(parseInt(event.target.value));
    generateScreen(size);
  }

  const removeAllChildNodes = (parent: HTMLDivElement) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  const generateScreen = (size: number): void => {
    let screen = document.querySelector('.screen') as HTMLDivElement;
    screen.innerHTML = '';

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
  }

  useEffect(() => {
    generateScreen(size);
  }, [])


  return (
    <>
      <header>
        <h1>Etch a Sketch</h1>
      </header>

      <main>
        <Controls changeSize={changeSize} currentSize={size} />
        <div className="screen"></div>
      </main>

      <footer>
        <p>Made by <a href="https://github.com/Bre323">Bre323</a></p>
      </footer>
    </>
  )
}

export default App;
