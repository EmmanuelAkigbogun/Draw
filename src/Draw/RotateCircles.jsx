import { useContext } from "react";
import { Context } from "./Draw";
function RotateCircles() {
        let context = useContext(Context);
        let circlerad = context.circlerad;
        let editdrag = context.editdrag;
        let dragrect = context.dragrect;
        let rotatedown = context.rotatedown
        let edit = context.edit;
        let highlight = context.highlight;
        let rcursor=context.rcursor
    return (
      <>
        <circle
          cx={
            Math.abs(dragrect.current[0]) === Infinity
              ? null
              : dragrect.current[0] - 8
          }
          cy={
            Math.abs(dragrect.current[2]) === Infinity
              ? null
              : dragrect.current[2] - 8
          }
          r={circlerad.current[3]}
          strokeWidth={circlerad.current[1]}
          fill={
            (!editdrag.current || highlight.current) && edit.current
              ? `white`
              : `none`
          }
          name="rotcirart$"
          data-rotate="nw"
          cursor={`alias`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            rotatedown.current = true;
          }}
          opacity={0}
        />
        <circle
          cx={
            Math.abs(dragrect.current[1]) === Infinity
              ? null
              : dragrect.current[1] + 8
          }
          cy={
            Math.abs(dragrect.current[2]) === Infinity
              ? null
              : dragrect.current[2] - 8
          }
          r={circlerad.current[3]}
          strokeWidth={circlerad.current[1]}
          fill={
            (!editdrag.current || highlight.current) && edit.current
              ? `white`
              : `none`
          }
          name="rotcirart$"
          data-rotate="ne"
          cursor={`alias`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            rotatedown.current = true;
          }}
          opacity={0}
        />
        <circle
          cx={
            Math.abs(dragrect.current[1]) === Infinity
              ? null
              : dragrect.current[1] + 8
          }
          cy={
            Math.abs(dragrect.current[3]) === Infinity
              ? null
              : dragrect.current[3] + 8
          }
          r={circlerad.current[3]}
          strokeWidth={circlerad.current[1]}
          fill={
            (!editdrag.current || highlight.current) && edit.current
              ? `white`
              : `none`
          }
          name="rotcirart$"
          data-rotate="se"
          cursor={`alias`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            rotatedown.current = true;
          }}
          opacity={0}
        />
        <circle
          cx={
            Math.abs(dragrect.current[0]) === Infinity
              ? null
              : dragrect.current[0] - 8
          }
          cy={
            Math.abs(dragrect.current[3]) === Infinity
              ? null
              : dragrect.current[3] + 8
          }
          r={circlerad.current[3]}
          strokeWidth={circlerad.current[1]}
          fill={
            (!editdrag.current || highlight.current) && edit.current
              ? `white`
              : `none`
          }
          name="rotcirart$"
          data-rotate="sw"
          cursor={`alias`}
          onPointerDown={(e) => {
            rcursor.current = e.target.getAttribute("cursor");
            rotatedown.current = true;
          }}
          opacity={0}
        />
      </>
    );
}
export default RotateCircles;