import { useState } from 'react'
import Controls from './components/Controls';
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Etch a Sketch</h1>
      </header>

      <main>
        <Controls />
      </main>

      <footer>
        <p>Made by <a href="https://github.com/Bre323">Bre323</a></p>
      </footer>
    </>
  )
}

export default App
