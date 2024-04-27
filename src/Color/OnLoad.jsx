import { useContext, useEffect } from "react";
import { Context } from "./Color";
import { colorWheel, gradientCard, lines, pixelCoordinate } from "./Functions/Function";
function OnLoad() {
  let context = useContext(Context);
  let c = context.c;
  let cv = context.cv;
  let gradient = context.gradient;
  let renderValue = context.renderValue
  let setrenderValue = context.setrenderValue;
  useEffect(() => {
    cv.current = c.current.getContext("2d", { willReadFrequently: true });
    cv.current.imageSmoothingQuality = "high";
    cv.current.fillStyle = "#646464";
    cv.current.fillRect(0, 0, c.current.width, c.current.height);
    cv.current.fill();
    lines(c, cv);
    gradientCard(cv, gradient);
    colorWheel(cv);
    c.current.addEventListener(
      "click",
      (e) => {
        pixelCoordinate(e, c, cv, renderValue, setrenderValue);
      },
      true
    );
    c.current.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        cv.current.beginPath();
        pixelCoordinate(e.targetTouches[0], c, cv, renderValue, setrenderValue);
      },
      true
    );
    c.current.addEventListener(
      "mousemove",
      (e) => {
        pixelCoordinate(e, c, cv, renderValue, setrenderValue);
      },
      true
    );
  }, []);
  return <></>;
}
export default OnLoad;
