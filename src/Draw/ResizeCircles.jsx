import { useContext } from "react";
import { Context } from "./Draw";
function ResizeCircles() {
  let context = useContext(Context);
  let circlerad = context.circlerad;
  let editdrag = context.editdrag;
  let dragrect = context.dragrect;
  let lockdrag = context.lockdrag;
  let rcursor = context.rcursor;
  let edit = context.edit;
  let highlight = context.highlight;
  return (
    <>
      <circle
        cx={
          Math.abs(dragrect.current[0]) === Infinity
            ? null
            : dragrect.current[0]
        }
        cy={
          Math.abs(dragrect.current[2]) === Infinity
            ? null
            : dragrect.current[2]
        }
        r={circlerad.current[0]}
        strokeWidth={circlerad.current[1]}
        fill={
          (!editdrag.current || highlight.current) && edit.current
            ? `white`
            : `none`
        }
        name="rectcirart$"
        cursor={`nw-resize`}
        onPointerDown={(e) => {
          rcursor.current = e.target.getAttribute("cursor");
          lockdrag.current = true;
        }}
      />
      <circle
        cx={
          Math.abs(dragrect.current[1]) === Infinity
            ? null
            : dragrect.current[1]
        }
        cy={
          Math.abs(dragrect.current[2]) === Infinity
            ? null
            : dragrect.current[2]
        }
        r={circlerad.current[0]}
        strokeWidth={circlerad.current[1]}
        fill={
          (!editdrag.current || highlight.current) && edit.current
            ? `white`
            : `none`
        }
        name="rectcirart$"
        cursor={`ne-resize`}
        onPointerDown={(e) => {
          rcursor.current = e.target.getAttribute("cursor");
          lockdrag.current = true;
        }}
      />
      <circle
        cx={
          Math.abs(dragrect.current[1]) === Infinity
            ? null
            : dragrect.current[1]
        }
        cy={
          Math.abs(dragrect.current[3]) === Infinity
            ? null
            : dragrect.current[3]
        }
        r={circlerad.current[0]}
        strokeWidth={circlerad.current[1]}
        fill={
          (!editdrag.current || highlight.current) && edit.current
            ? `white`
            : `none`
        }
        name="rectcirart$"
        cursor={`se-resize`}
        onPointerDown={(e) => {
          rcursor.current = e.target.getAttribute("cursor");
          lockdrag.current = true;
        }}
      />
      <circle
        cx={
          Math.abs(dragrect.current[0]) === Infinity
            ? null
            : dragrect.current[0]
        }
        cy={
          Math.abs(dragrect.current[3]) === Infinity
            ? null
            : dragrect.current[3]
        }
        r={circlerad.current[0]}
        strokeWidth={circlerad.current[1]}
        fill={
          (!editdrag.current || highlight.current) && edit.current
            ? `white`
            : `none`
        }
        name="rectcirart$"
        cursor={`sw-resize`}
        onPointerDown={(e) => {
          rcursor.current = e.target.getAttribute("cursor");
          lockdrag.current = true;
        }}
      />
    </>
  );
}
export default ResizeCircles;
