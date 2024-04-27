import { useContext, useEffect } from "react";
import { setupfx } from "./Functions/Setup";
import { hover } from "./Functions/Hover";
import { tryhover } from "./Functions/Hover";
import { Context } from "./BarChart";
function Functions() {
  let context = useContext(Context);
  let canvas = context.canvas;
  let lowest = context.lowest;
  let difference = context.difference;
  let constantscaley = context.constantscaley;
  let render=context.render;
  let setRender = context.setRender;
  useEffect(() => {
    setupfx(context);
    canvas.current.addEventListener("touchstart", (e) => {
      console.log(e);
      hover("touch", "touch", context);
      //e.preventDefault();
      //e.stopPropagation();
    });
    canvas.current.addEventListener("dblclick", (e) => {
      lowest.current == 0 ? (lowest.current = -100) : (lowest.current = 0);
      constantscaley.current == 2.3
        ? (constantscaley.current = 1.15)
        : (constantscaley.current = 2.3);
      difference.current == 100
        ? (difference.current = 200)
        : (difference.current = 100);
      setupfx(context);
      tryhover(context);
    });
    setRender(render=[canvas.current.width,canvas.current.height]);
  }, [context.state]);
  return <></>;
}
export default Functions;
