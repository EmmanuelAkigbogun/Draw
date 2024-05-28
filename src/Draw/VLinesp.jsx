import { useContext, useRef } from "react";
import { Context } from "./Draw";
function VLinesP() {
  let context = useContext(Context);
  let vectorP = context.vectorP;
  let vectorCL = context.vectorCL; 
  let circlerad = context.circlerad;
  let vectord = context.vectord;
    let vectora = context.vectora;
    let mval = 0;
   let velement = context.velement;
  return vectorP.current.filter(e=>!vectorCL.current.includes(e)).map((e, i) => {
    if (i % 2 == 0 && vectord.current[0][e] !== "") {
      if (vectora.current[0][e] == "M") {
            mval = e;
          }
      return (
        <circle
          cx={vectord.current[0][e]}
          cy={vectord.current[0][e + 1]}
          r={circlerad.current[0]}
          strokeWidth={circlerad.current[1]}
          fill={"white"}
          stroke={"white"}
          key={`${e}c${i}`}
          name="vlineart$"
          data-value={e}
          data-mz={vectora.current[0][e + 2] === "Z" ? mval : ""}
        />
      );
    }
  });
}
export default VLinesP;
