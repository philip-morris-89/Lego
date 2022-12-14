import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'

function ColorPaletteRed() {
  return (
    <div>
      <ColorSwatch name='Red 50' color='#FFEBEE' shape='row' contrast='dark'/>
      <ColorSwatch name='100' color='#FFCDD2' shape='row' contrast='dark'/>
      <ColorSwatch name='200' color='#EF9A9A' shape='row' contrast='dark'/>
      <ColorSwatch name='300' color='#E57373' shape='row' contrast='dark'/>
      <ColorSwatch name='400' color='#EF5350' shape='row' contrast='dark'/>
      <ColorSwatch name='500' color='#F44336' shape='row' contrast='light'/>
      <ColorSwatch name='600' color='#E53935' shape='row' contrast='light'/>
      <ColorSwatch name='700' color='#D32F2F' shape='row' contrast='light'/>
      <ColorSwatch name='800' color='#C62828' shape='row' contrast='light'/>
      <ColorSwatch name='900' color='#B71C1C' shape='row' contrast='light'/>
    </div>
  )
}

export default ColorPaletteRed
