import React from 'react'
import './colorSwatch.css'

function ColorSwatch({
  name = "Color",
  color = "#000000",
  contrast = "dark",
  shape = "row",
}) {

  return (
    <div className="colorSwatch" style={{backgroundColor: color}} data-contrast={contrast} data-shape={shape}>
      <h5>{name}</h5>
      <h6>{color}</h6>
    </div>
  )
}

export default ColorSwatch
