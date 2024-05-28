import { useContext } from "react";
import { Context } from "./Draw";

function F() {
    let context=useContext(Context)
    let dragrecta=context.dragrecta
    let lineeditwidth = context.lineeditwidth;

        if (Math.abs(dragrecta.current[0]) !== Infinity) {
          return (
            <>
              <rect
                x={dragrecta.current[0]}
                y={dragrecta.current[2]}
                width={`${Math.abs(dragrecta.current[1] - dragrecta.current[0])}`|0}
                height={`${Math.abs(dragrecta.current[3] - dragrecta.current[2])}`|0}
                strokeWidth={lineeditwidth.current}
                name="rectart$"
                cursor={`n-resize`}
                stroke="yellow"
              />
    
            </>
          );
        }
}
export default F