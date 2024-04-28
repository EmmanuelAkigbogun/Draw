import { useContext,  useRef } from "react";
import { Context } from "./Draw";
import { keydownfx } from "./Download";
function Svg() {
  let download=useRef(null)
  let context=useContext(Context)
  let vg = context.vg;
  let canvas = context.canvas;
  let link = context.link;
  return (
    <>
      <foreignObject
        x={0}
        y={0}
        width={download?.current?.offsetWidth}
        height={download?.current?.offsetHeight}
      >
      <input
          xmlns="http://www.w3.org/2000/svg"
          style={{
            background: "#646464",
            border: "1px solid transparent",
            outline: "1px solid transparent",
            cursor: "pointer",
            color: "white",
          }}
          ref={download}
          onKeyUp={(e) => {
            keydownfx(e, vg, canvas, link);
            e.target.value = "";
            alert()
            e.target.focus()
          }}
        />
      </foreignObject>
    </>
  );
}
export default Svg;
