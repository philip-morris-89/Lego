import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'

function ColorPaletteOrange() {
  return (
    <div>
      <ColorSwatch name='Orange 50' color='#FFF3E0' shape='row' contrast='dark'/>
      <ColorSwatch name='100' color='#FFE0B2' shape='row' contrast='dark'/>
      <ColorSwatch name='200' color='#FFCC80' shape='row' contrast='dark'/>
      <ColorSwatch name='300' color='#FFB74D' shape='row' contrast='dark'/>
      <ColorSwatch name='400' color='#FFA726' shape='row' contrast='dark'/>
      <ColorSwatch name='500' color='#FF9800' shape='row' contrast='light'/>
      <ColorSwatch name='600' color='#FB8C00' shape='row' contrast='light'/>
      <ColorSwatch name='700' color='#F57C00' shape='row' contrast='light'/>
      <ColorSwatch name='800' color='#EF6C00' shape='row' contrast='light'/>
      <ColorSwatch name='900' color='#E65100' shape='row' contrast='light'/>
    </div>
  )
}

export default ColorPaletteOrange
