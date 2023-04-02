import React from 'react'
import { Graphics } from '@inlet/react-pixi'

const Rectangle = () => {
  return <Graphics draw={({ g, stageWidth, stageHeight }) => {
    g.beginFill(0xff3300)
    g.drawRoundedRect(stageWidth / 2, stageHeight / 2, stageWidth, stageHeight, 15)
    g.endFill()
  }} />
}

export default Rectangle
