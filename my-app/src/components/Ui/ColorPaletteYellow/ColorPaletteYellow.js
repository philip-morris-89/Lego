import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'

function ColorPaletteYellow() {
  return (
    <div>
      <ColorSwatch name='Yellow 50' color='#FFFDE7' shape='row' contrast='dark'/>
      <ColorSwatch name='100' color='#FFF9C4' shape='row' contrast='dark'/>
      <ColorSwatch name='200' color='#FFF59D' shape='row' contrast='dark'/>
      <ColorSwatch name='300' color='#FFF176' shape='row' contrast='dark'/>
      <ColorSwatch name='400' color='#FFEE58' shape='row' contrast='dark'/>
      <ColorSwatch name='500' color='#FFEB3B' shape='row' contrast='dark'/>
      <ColorSwatch name='600' color='#FDD835' shape='row' contrast='dark'/>
      <ColorSwatch name='700' color='#FBC02D' shape='row' contrast='dark'/>
      <ColorSwatch name='800' color='#F9A825' shape='row' contrast='dark'/>
      <ColorSwatch name='900' color='#F57F17' shape='row' contrast='light'/>
    </div>
  )
}

export default ColorPaletteYellow
