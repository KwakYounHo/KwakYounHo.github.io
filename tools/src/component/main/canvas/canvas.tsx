import React from 'react';
import { Field } from './field/field';

interface Props {}
const Canvas: React.FC<Props> = () => {
  
  // varable management
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const [ ctx, setCtx ]     = React.useState<CanvasRenderingContext2D>();
  const [ field, setField ] = React.useState<Field>();
  const [ main, setMain ]   = React.useState<Element>();

  // resize canvas
  const resizeCanvas = React.useCallback(()=>{
    if ( !canvasRef.current || !main ) return;
    canvasRef.current.width = main.clientWidth;
    canvasRef.current.height = main.clientHeight;
  }, [main?.clientWidth, main?.clientHeight])

  // get main division
  React.useEffect(()=>{
    const getMain = document.querySelector('.main');
    if ( getMain ) {
      setMain(getMain);
    }
  }, [])

  // set context
  React.useEffect(()=>{
    if ( !canvasRef.current || !main ) return;
    canvasRef.current.width = main.clientWidth;
    canvasRef.current.height = main.clientHeight;
    const context = canvasRef.current.getContext('2d');
    if ( context ) {
      setCtx(context)
    }
  }, [canvasRef.current, main])

  // set field
  React.useEffect(()=>{
    if ( !canvasRef.current || !ctx ) return;
    const fieldInCanvas = new Field({c: canvasRef.current, ctx: ctx, scale: {x: 5, y: 5}})
    setField(fieldInCanvas);
  }, [ctx])

  // animation
  React.useEffect(()=>{
    function animation(): void {
      if ( !canvasRef.current || !ctx || !field ) return;
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      field?.draw();
      requestAnimationFrame(animation);
    }
    animation();
  }, [field])

  // event management
  React.useEffect(()=>{
    addEventListener('resize', resizeCanvas);
    return ()=>{
      removeEventListener('resize', resizeCanvas);
    }
  }, [])

  return (
    <canvas ref={canvasRef} />
  )
}
export default Canvas;