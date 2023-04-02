import { Sprite } from '@inlet/react-pixi'
import BunnySprite from './../assets/bunny.png'

const Bunny = ({ stageWidth, stageHeight }) => {
  return (
    <Sprite
      image={BunnySprite}
      anchor={[0.5, 0.5]}
      position={[stageWidth / 2, stageHeight / 2]}
    />
  )
}

export default Bunny

