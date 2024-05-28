import { useContext } from "react";
import { Context } from "./Draw";
import Dimension from "./Dimension";
import { getPathData } from "./Functions/GetPath";
import { setRz } from "./Functions/SetRz";
function Rect() {
    let context=useContext(Context)
    let targetObject=context.targetObject
    let bBoxColor = context.bBoxColor;
    let circlerad = context.circlerad;
    let editdrag=context.editdrag
    let dragrect=context.dragrect
    let lockdrag = context.lockdrag
    let lineeditwidth = context.lineeditwidth;
    let rcursor = context.rcursor;
      let edit = context.edit;
    let highlight=context.highlight
        let vectoredit = context.vectoredit;
    
        let x1 = Object.keys(targetObject.current).map(
          (e) => targetObject.current[e][0].getBBox().x-2
        );
        x1 = Math.min(...x1);
        let x2 = Object.keys(targetObject.current).map(
          (e) =>
            (targetObject?.current[e][0].getBBox().x +
            targetObject?.current[e][0].getBBox().width)+2
        );
        x2 = Math.max(...x2);
        let y1 = Object.keys(targetObject.current).map(
          (e) => targetObject.current[e][0].getBBox().y-2
        );
        y1 = Math.min(...y1);
        let y2 = Object.keys(targetObject.current).map(
          (e) =>
            (targetObject.current[e][0].getBBox().y +
            targetObject.current[e][0].getBBox().height)+2
        );
        y2 = Math.max(...y2);
        dragrect.current=[x1,x2,y1,y2]
    return (
      Math.abs(x1) !== Infinity &&
      !vectoredit.current&&(
        <g
          stroke={
            (!editdrag.current || highlight.current) && edit.current
              ? bBoxColor.current
              : `none`
          }
          fill="none"
          name="rectgart$"
        >
          <Dimension
            x1={dragrect.current[0]}
            x2={dragrect.current[1]}
            y1={dragrect.current[2]}
            y2={dragrect.current[3]}
          />
          <line
            x1={dragrect.current[0]}
            x2={dragrect.current[1]}
            y1={dragrect.current[2]}
            y2={dragrect.current[2]}
            strokeWidth={lineeditwidth.current}
            name="rectart$"
            cursor={`n-resize`}
            onPointerDown={(e) => {
              rcursor.current = e.target.getAttribute("cursor");
              lockdrag.current = true;
            }}
          ></line>
          <line
            x1={dragrect.current[0]}
            x2={dragrect.current[0]}
            y1={dragrect.current[2]}
            y2={dragrect.current[3]}
            strokeWidth={lineeditwidth.current}
            name="rectart$"
            cursor={`w-resize`}
            onPointerDown={(e) => {
              rcursor.current = e.target.getAttribute("cursor");
              lockdrag.current = true;
            }}
          ></line>
          <line
            x1={dragrect.current[1]}
            x2={dragrect.current[1]}
            y1={dragrect.current[2]}
            y2={dragrect.current[3]}
            strokeWidth={lineeditwidth.current}
            name="rectart$"
            cursor={`e-resize`}
            onPointerDown={(e) => {
              rcursor.current = e.target.getAttribute("cursor");
              lockdrag.current = true;
            }}
          ></line>
          <line
            x1={dragrect.current[0]}
            x2={dragrect.current[1]}
            y1={dragrect.current[3]}
            y2={dragrect.current[3]}
            strokeWidth={lineeditwidth.current}
            name="rectart$"
            cursor={`s-resize`}
            onPointerDown={(e) => {
              rcursor.current = e.target.getAttribute("cursor");
              lockdrag.current = true;
            }}
          ></line>
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
          {1 === 2 && (
            <circle
              cx={
                dragrect.current[0] +
                (dragrect.current[1] - dragrect.current[0]) / 2
              }
              cy={
                dragrect.current[2] +
                (dragrect.current[3] - dragrect.current[2]) / 2
              }
              r={`2%`}
              fill={
                (!editdrag.current || highlight.current) && edit.current
                  ? `#747474`
                  : `none`
              }
              stroke="none"
              name="rectcirart$"
              cursor={`sw-resize`}
              onPointerDown={(e) => {
                rcursor.current = e.target.getAttribute("cursor");
                lockdrag.current = true;
              }}
              transform={`rotate(${100} ${
                dragrect.current[0] +
                (dragrect.current[1] - dragrect.current[0]) / 2
              } ${
                dragrect.current[2] +
                (dragrect.current[3] - dragrect.current[2]) / 2
              })`}
            />
          )}
        </g>
      )
    );
}
export default Rect;
