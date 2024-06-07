import { useContext } from "react";
import { Context } from "./Draw";
import { move } from "./Functions/Touch";
function PenHoverCircle() {
  let context = useContext(Context);
    let circlerad = context.circlerad;
  let movepen = context.movepen;
    return (
      movepen.current?.split(" ")[1] && (
        <circle
          cx={movepen.current?.split(" ")[0]}
          cy={movepen.current?.split(" ")[1]}
          r={circlerad.current[0]}
          strokeWidth={circlerad.current[1]}
          fill={"white"}
          stroke="#343434"
          name="mouseart$"
        />
      )
    );
}
export default PenHoverCircle;
