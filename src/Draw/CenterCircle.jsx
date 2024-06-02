import { useContext } from "react";
import { Context } from "./Draw";
function CenterCircle() {
  //pen line divide
  let context = useContext(Context);
  let centercirclearr = context.centercirclearr;
  let circlerad = context.circlerad;
  return centercirclearr.current.map((e, i) => {
    return (
      <circle
        cx={centercirclearr.current[0]}
        cy={centercirclearr.current[1]}
        r={circlerad.current[0]}
        strokeWidth={circlerad.current[1]}
        fill={i == centercirclearr.current.length - 1 ? "blue" : "white"}
        stroke="white"
        key={`${e}c${i}`}
        name="centercircleart$"
      />
    );
  });
}
export default CenterCircle;
