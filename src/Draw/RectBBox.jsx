import { useContext } from "react";
import { Context } from "./Draw";
function RectBBox() {
        let context = useContext(Context);
        let dragrect = context.dragrect;
        let lockdrag = context.lockdrag;
        let lineeditwidth = context.lineeditwidth;
        let rcursor = context.rcursor;
      
    return (
      <>
        <line
          x1={dragrect.current[0]}
          x2={dragrect.current[1]}
          y1={dragrect.current[2]}
          y2={dragrect.current[2]}
          strokeWidth={lineeditwidth.current}
          name="rectart$"
          cursor={`n-resize`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            lockdrag.current = true;
          }}
        ></line>
        <line
          x1={dragrect.current[0]}
          x2={dragrect.current[0]}
          y1={dragrect.current[2]}
          y2={dragrect.current[3]}
          strokeWidth={lineeditwidth.current}
          name="rectart$"
          cursor={`w-resize`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            lockdrag.current = true;
          }}
        ></line>
        <line
          x1={dragrect.current[1]}
          x2={dragrect.current[1]}
          y1={dragrect.current[2]}
          y2={dragrect.current[3]}
          strokeWidth={lineeditwidth.current}
          name="rectart$"
          cursor={`e-resize`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            lockdrag.current = true;
          }}
        ></line>
        <line
          x1={dragrect.current[0]}
          x2={dragrect.current[1]}
          y1={dragrect.current[3]}
          y2={dragrect.current[3]}
          strokeWidth={lineeditwidth.current}
          name="rectart$"
          cursor={`s-resize`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            lockdrag.current = true;
          }}
        ></line>
      </>
    );
}
export default RectBBox;