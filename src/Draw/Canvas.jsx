import { useContext, useEffect, useRef } from "react";
import { Context } from "./Draw";
function Canvas() {
    let context=useContext(Context)
      let canvas = useRef(null);
      let ctx=context.ctx
      useEffect(()=>{
          ctx.current=canvas.current.getContext("2d");
      },[])
    return (
        <canvas
          ref={canvas}
          className="none"
          width={7000}
          height={7000}
          id="xx"
        ></canvas>
    );
}
export default Canvas