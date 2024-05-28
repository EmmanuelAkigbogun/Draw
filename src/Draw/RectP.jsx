import { useContext, useEffect, useRef } from "react"
import { Context } from "./Draw"
function RectP() {
    let context=useContext(Context)
    let refpoly = useRef(null);
    let pick=context.pick
    let bBoxColor=context.bBoxColor
    let polyelip=context.polyelip;
    let vgpath=context.vgpath
    let render=context.render
    let eliele = context.eliele;
    let lockdrag = context.lockdrag
    let vpoly=context.vpoly
    useEffect(() => {
      eliele.current = refpoly;
    },[]);
    return (
      <g fill="none" name="highlightart$">
        {pick.current[2] && (
          <path
            d={`M${pick.current[2]} ${pick.current[3]} ${pick.current[4]} ${pick.current[3]} ${pick.current[4]} ${pick.current[5]} ${pick.current[2]} ${pick.current[5]} ${pick.current[2]} ${pick.current[3]}`}
            strokeWidth={`.2%`}
            stroke={
              lockdrag.current
                ? "none"
                : `rgb(${Math.random() * 255} ${Math.random() * 255} ${
                    Math.random() * 255
                  })`
            } //bBoxColor.current}
            name="rectart$"
          />
        )}
        {
          !vpoly.current&&<ellipse
            ref={refpoly}
            name="Polyart$"
            rx={pick.current[8]}
            ry={pick.current[9]}
            cx={pick.current[6]}
            cy={pick.current[7]}
            fill="#00000000"
            stroke={`none`}
            //transform={`rotate( ${90} ${pick.current[6]|0} ${pick.current[7]|0})`}
          />}{
          vpoly.current&&<rect
            ref={refpoly}
            name="Polyart$"
            width={`${(pick.current[8] * 2)}`|0}
            height={`${(pick.current[9] * 2)}`|0}
            x={`${(pick.current[6] - pick.current[8])}`|0}
            y={`${(pick.current[7] - pick.current[9])}`|0}
            rx={`50%`}
            fill="#00000000"
            stroke={`none`}
            //transform={`rotate( ${90} ${pick.current[6]|0} ${pick.current[7]|0})`}
          />
        }
      </g>
    );
}
export default RectP