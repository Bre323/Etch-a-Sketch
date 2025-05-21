import { useState } from "react";

function Display() {
  return (
    <div className="controls">
      <div className="size-control">
        <p>Screen Size</p>
        <p id="size-value">8</p>
        <input 
          id="slider" 
          type="range" 
          min={8} 
          max={64} 
          step={2} 
          value={8} 
        />
      </div>

      <div className="color-control">
        <p>Color Mode</p>
        <button id="black-bt" className="control-bt color-bt">Black</button>
        <button id="white-bt" className="control-bt color-bt">White</button>
        <button id="rainbow-bt" className="control-bt color-bt">Rainbow</button>
      </div>

      <div className="erase-div">
        <button id="erase-bt" className="control-bt">Erase</button>
      </div>
    </div>
  )
}
