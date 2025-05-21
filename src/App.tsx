import { useState } from 'react'
import Display from './components/Display';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Etch a Sketch</h1>
      </header>

      <main>
        <Display />
      </main>

      <footer>
        <p>Made by <a href="https://github.com/Bre323">Bre323</a></p>
      </footer>
    </>
  )
}

export default App
