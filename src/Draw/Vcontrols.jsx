import { useContext } from "react";
import { Context } from "./Draw";
function Vcontrols() {
  let context = useContext(Context);
  let vectorCp = context.vectorCp;
  let vectorCi = context.vectorCi;
  let vectorCj = context.vectorCj;
  let circlerad = context.circlerad;
  let vectord = context.vectord;
    let vectora = context.vectora;
  let velement = context.velement;
  let vectorctrmixed = context.vectorctrmixed;
   let vectoredit = context.vectoredit;
   let ashen=context.ashen
  

  return vectoredit.current&&vectorctrmixed.current.map((e, i) => {
    if (i % 2 == 0 && vectord.current[0][e] !== "") {
      return (
        <circle
          cx={vectord.current[0][e]}
          cy={vectord.current[0][e + 1]}
          r={circlerad.current[0]}
          strokeWidth={circlerad.current[1]}
          fill={"white"}
          stroke={ashen.current}
          key={`${e}c${i}`}
          name="vctrart$"
          data-value={e}
        />
      );
    }
  });
}
export default Vcontrols;
