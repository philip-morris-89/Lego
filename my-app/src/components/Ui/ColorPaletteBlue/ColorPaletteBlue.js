import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'

function ColorPaletteBlue() {
  return (
    <div>
      <ColorSwatch name='Blue 50' color='#E3F2FD' shape='row' contrast='dark'/>
      <ColorSwatch name='100' color='#BBDEFB' shape='row' contrast='dark'/>
      <ColorSwatch name='200' color='#90CAF9' shape='row' contrast='dark'/>
      <ColorSwatch name='300' color='#64B5F6' shape='row' contrast='dark'/>
      <ColorSwatch name='400' color='#42A5F5' shape='row' contrast='dark'/>
      <ColorSwatch name='500' color='#2196F3' shape='row' contrast='light'/>
      <ColorSwatch name='600' color='#1E88E5' shape='row' contrast='light'/>
      <ColorSwatch name='700' color='#1976D2' shape='row' contrast='light'/>
      <ColorSwatch name='800' color='#1565C0' shape='row' contrast='light'/>
      <ColorSwatch name='900' color='#0D47A1' shape='row' contrast='light'/>
    </div>
  )
}

export default ColorPaletteBlue
