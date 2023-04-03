import { Sprite } from '@inlet/react-pixi'
import LogoSprite from './../assets/tomadachi-logo.webp'

const Logo = ({ stageWidth, stageHeight }) => {
  return (
    <Sprite
      image={LogoSprite}
      anchor={[0.5, 0.5]}
      position={[stageWidth / 2, stageHeight / 2]}
      width={300}
      height={300}
    />
  )
}

export default Logo

