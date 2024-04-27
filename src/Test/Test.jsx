import { useEffect, useRef } from "react";
function  Test() {
    let path= new Path2D()
    let path1 = new Path2D();
    let canvas=useRef(null)
    let ctx = useRef(null);
    useEffect(()=>{
     ctx.current=canvas.current?.getContext("2d")
     path1.lineTo(100,100)
      path.lineTo(10, 10);
     path1.lineTo( 120, 120);
      path.lineTo(90, 70);
     ctx.current.Style='blue'
     ctx.current.fill(path)
     ctx.current.strokeStyle = "red";
     ctx.current.fill(path1);

       ctx.current.stroke(path1);
         ctx.current.stroke(path);
     console.log(path);
    },[])
    return<>
    <canvas ref={canvas}></canvas>
    </>
}
export default Test;