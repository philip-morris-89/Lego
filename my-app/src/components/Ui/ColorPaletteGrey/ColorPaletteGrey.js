import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'

function ColorPaletteGrey() {
  return (
    <div>
      <ColorSwatch name='Grey 50' color='#FAFAFA' shape='row' contrast='dark'/>
      <ColorSwatch name='100' color='#F5F5F5' shape='row' contrast='dark'/>
      <ColorSwatch name='200' color='#EEEEEE' shape='row' contrast='dark'/>
      <ColorSwatch name='300' color='#E0E0E0' shape='row' contrast='dark'/>
      <ColorSwatch name='400' color='#BDBDBD' shape='row' contrast='light'/>
      <ColorSwatch name='500' color='#9E9E9E' shape='row' contrast='light'/>
      <ColorSwatch name='600' color='#757575' shape='row' contrast='light'/>
      <ColorSwatch name='700' color='#616161' shape='row' contrast='light'/>
      <ColorSwatch name='800' color='#424242' shape='row' contrast='light'/>
      <ColorSwatch name='900' color='#212121' shape='row' contrast='light'/>
    </div>
  )
}

export default ColorPaletteGrey
