import React from 'react';
import './main.css';
import Canvas from './canvas/canvas'

interface Props {}
const Main: React.FC<Props> = () => {
  const main = React.useRef<HTMLDivElement>(null);

  return (
    <div className='main'>
      <Canvas />
    </div>
  )
}
export default Main;