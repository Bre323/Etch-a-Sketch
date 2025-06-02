import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import './App.css';

function App() {
  let [size, setSize] = useState(8);


  const generateScreen = (size: number): void => {
    let screen = document.querySelector('.screen') as HTMLDivElement;
    screen.innerHTML = '';

    if(screen) {
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
        <Controls />
        <div className="screen"></div>
      </main>

      <footer>
        <p>Made by <a href="https://github.com/Bre323">Bre323</a></p>
      </footer>
    </>
  )
}

export default App;
