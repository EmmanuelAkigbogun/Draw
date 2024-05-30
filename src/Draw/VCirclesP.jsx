import { useContext} from "react";
import { Context } from "./Draw";
function VCirclesP() {
     let context = useContext(Context);
     let vectorCL = context.vectorCL; 
     let circlerad = context.circlerad;
     let vectord = context.vectord;
     let vectora = context.vectora;
     let vectoredit = context.vectoredit;
     let vectorGp=context.vectorGp
     let mval=0
     let oddfactor=0;
     return vectoredit.current&&vectorCL.current.map((e, i) => {
       ////////////////////////////////////open///////////////////////////////////////
       if (
         (vectora.current[0][e] == "M" ||
           vectora.current[0][e] == "C" ||
           vectora.current[0][e] == "L") &&
         (i - oddfactor) % 2 !== 0
       ) {
         oddfactor = oddfactor + 1;
       } else if (vectora.current[0][e] == "Z" && (i - oddfactor) % 2 == 0) {
         oddfactor = oddfactor + 1;
       }
       ////////////////////////////////////close///////////////////////////////////////
       if ((i - oddfactor) % 2 == 0 && vectord.current[0][e] !== "") {
         if (vectora.current[0][e] == "M") {
           mval = e;
         }
         return (
           <circle
             cx={vectord.current[0][e]}
             cy={vectord.current[0][e + 1]}
             r={circlerad.current[0]}
             strokeWidth={circlerad.current[1]}
             fill={"white"}
             stroke={"white"}
             key={`${e}c${i}`}
             name="vcirart$"
             data-value={e}
             data-mz={vectora.current[0][e + 2] === "Z" ? mval : ""}
           />
         );
       }
     });
    
}
export default VCirclesP;