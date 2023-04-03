import { Stage } from '@inlet/react-pixi'
import Logo from "./components/Logo"
// import Device from "./components/gameUI/device"

const App = () => {
  const stageWidth = window.innerWidth
  const stageHeight = window.innerHeight

  return(
    <Stage width={stageWidth} height={stageHeight} options={{ transparent: true }}>
      <Logo stageWidth={stageWidth} stageHeight={stageHeight} />
      {/* <Device
        width={stageWidth}
        height={stageHeight}
        anchor={[0.5, 0.5]}
        position={[stageWidth / 2, stageHeight / 2]}
      /> */}
    </Stage>
  )
}

export default App