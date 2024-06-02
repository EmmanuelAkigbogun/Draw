import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./Draw";
function Dimension({x1,x2,y1,y2}) {
  let context = useContext(Context);
  let bBoxColor = context.bBoxColor;
  let circlerad = context.circlerad;
  let  editdrag = context.editdrag;
    let edit = context.edit;
  let highlight = context.highlight;
  let vectoredit = context.vectoredit
  let rotatedown=context.rotatedown
    let anglevalue = context.anglevalue;
  let text=useRef(null)
  let [num,setnum] = useState(0);
  let num1 = useRef(0);
  useEffect(() => {
    setnum(num= text.current.getComputedTextLength());
    num1.current = text.current.getBBox().height;
  });
  return (
    <>
      {1 === 2 && (
        <circle
          cx={Math.abs(x1) === Infinity ? null : x1 + (x2 - x1) / 2}
          cy={Math.abs(y2) === Infinity ? null : y2}
          r={circlerad.current[0]}
          strokeWidth={circlerad.current[1]}
          fill="#000000"
          stroke="white"
          name="rectcirart$"
        />
      )}
      {1 === 2 && (
        <rect
          x={
            Math.abs(x2) === Infinity
              ? null
              : x1 + (x2 - x1) / 2 - num.current / 2
          }
          y={Math.abs(y2) === Infinity ? null : y2}
          width={num.current}
          height={num1.current}
          fill={
            (!editdrag.current || highlight.current) && edit.current
              ? bBoxColor.current
              : `none`
          }
          strokeWidth={`0%`}
          name="recttxtart$"
        />
      )}
      <text
        ref={text}
        x={Math.abs(x2) === Infinity ? null : x1 + (x2 - x1) / 2 - num / 2}
        y={Math.abs(y2) === Infinity ? null : y2 + num1.current}
        stroke={
          (!editdrag.current || editdrag.current || highlight.current) &&
          edit.current
            ? `white`
            : `none`
        }
        fill={
          (!editdrag.current || editdrag.current || highlight.current) &&
          edit.current
            ? bBoxColor.current
            : `none`
        }
        strokeWidth={`.04%`}
        id="tx"
        name="recttxtart$"
        className="draw-text"
      >
        {!editdrag.current
          ? `${!rotatedown.current ? Math.round(x2 - 2 - (x1 + 2)):``} ${
              !rotatedown.current ? `x`:``
            } ${!rotatedown.current?Math.round(y2 - 2 - (y1 + 2)):``} ${
              rotatedown.current
                ? ` (${Math.round(anglevalue.current)} deg)`
                : ``
            }`
          : `x= ${Math.round(x1)}, y= ${Math.round(y1)}`}
      </text>
    </>
  );
}
export default Dimension;