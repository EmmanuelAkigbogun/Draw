import { useContext, useEffect, useRef } from "react";
import { Context } from "./Draw";
function Polyelip() {
    let context=useContext(Context)
    let refpoly=useRef(null)
    let polyelip=context.polyelip
    let e = polyelip?.current[2];
    useEffect(()=>{
        polyelip.current[3] = refpoly;
    },[])
    return (
      <>
        <ellipse
          ref={refpoly}
          name="Polyart$"
          rx={e?.split(" ")[2]}
          ry={e?.split(" ")[3]}
          cx={e?.split(" ")[0]}
          cy={e?.split(" ")[1]}
          fill="#00000000"
          stroke={`none`}
        />
      </>
    );
}
export default Polyelip;