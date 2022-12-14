import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'

function ColorPaletteIndigo() {
  return (
    <div>
      <ColorSwatch name='Indigo 50' color='#E8EAF6' shape='row' contrast='dark'/>
      <ColorSwatch name='100' color='#C5CAE9' shape='row' contrast='dark'/>
      <ColorSwatch name='200' color='#9FA8DA' shape='row' contrast='dark'/>
      <ColorSwatch name='300' color='#7986CB' shape='row' contrast='dark'/>
      <ColorSwatch name='400' color='#5C6BC0' shape='row' contrast='light'/>
      <ColorSwatch name='500' color='#3F51B5' shape='row' contrast='light'/>
      <ColorSwatch name='600' color='#3949AB' shape='row' contrast='light'/>
      <ColorSwatch name='700' color='#303F9F' shape='row' contrast='light'/>
      <ColorSwatch name='800' color='#283593' shape='row' contrast='light'/>
      <ColorSwatch name='900' color='#1A237E' shape='row' contrast='light'/>
    </div>
  )
}

export default ColorPaletteIndigo
