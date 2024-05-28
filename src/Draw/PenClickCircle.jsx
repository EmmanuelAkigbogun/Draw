import { useContext } from "react";
import { Context } from "./Draw";
function PenClickCircle() {
  let context = useContext(Context);
  let pencirclearr = context.pencirclearr;
  let circlerad = context.circlerad;
  return pencirclearr.current.map((e, i) => {
    return (
      <circle
        cx={e.split(" ")[0]}
        cy={e.split(" ")[1]}
        r={circlerad.current[0]}
        strokeWidth={circlerad.current[1]}
        fill={i == pencirclearr.current.length - 1 ? "blue" : "white"}
        stroke="white"
        key={`${e}c${i}`}
        name="circledbcart$"
      />
    );
  });
}
export default PenClickCircle;
