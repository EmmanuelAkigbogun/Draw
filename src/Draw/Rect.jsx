import { useContext } from "react";
import { Context } from "./Draw";
import Dimension from "./Dimension";
import { getPathData } from "./Functions/GetPath";
import { setRz } from "./Functions/SetRz";
import ResizeCircles from "./ResizeCircles";
import RotateCircles from "./RotateCircles";
import RectBBox from "./RectBBox";
import RectMidCirleTest from "./RectMidCirleTest";
import { getBezierPoints } from "./TryEllipse";
function Rect() {
  let context = useContext(Context);
  let targetObject = context.targetObject;
  let bBoxColor = context.bBoxColor;
  let circlerad = context.circlerad;
  let editdrag = context.editdrag;
  let dragrect = context.dragrect;
  let dragrectr = context.dragrectr;
  let lockdrag = context.lockdrag;
  let lineeditwidth = context.lineeditwidth;
  let rcursor = context.rcursor;
  let edit = context.edit;
  let highlight = context.highlight;
  let vectoredit = context.vectoredit;
  let rotatedown = context.rotatedown;

  ///*
  let x1 = Object.keys(targetObject.current).map(
    (e) => targetObject.current[e][0].getBBox().x - 2
  );
  x1 = Math.min(...x1);
  let x2 = Object.keys(targetObject.current).map(
    (e) =>
      targetObject?.current[e][0].getBBox().x +
      targetObject?.current[e][0].getBBox().width +
      2
  );
  x2 = Math.max(...x2);
  let y1 = Object.keys(targetObject.current).map(
    (e) => targetObject.current[e][0].getBBox().y - 2
  );
  y1 = Math.min(...y1);
  let y2 = Object.keys(targetObject.current).map(
    (e) =>
      targetObject.current[e][0].getBBox().y +
      targetObject.current[e][0].getBBox().height +
      2
  );
  y2 = Math.max(...y2);
  //*/

  /*
  let xdata=[]
  let ydata = [];
  let xmax=[]
  let ymax=[]
    let xmin = [];
    let ymin = [];

    Object.keys(targetObject.current).map(
      (e) =>{
           xdata = [];
           ydata = [];
         for (
           let index = 0;
           index < targetObject.current[e][0].getTotalLength();
           index++
         ) {
          xdata.push(targetObject.current[e][0].getPointAtLength(index).x); 
          ydata.push(targetObject.current[e][0].getPointAtLength(index).y); 
      
         }
        
        xmax.push(Math.max(...xdata))
         xmin.push(Math.min(...xdata))
         ymax.push(Math.max(...ydata));
         ymin.push(Math.min(...ydata));
     
      }

    );

    let x1=Math.min(...xmin)+2
    let x2=Math.max(...xmax)-2
    let y1=Math.min(...ymin)+2
    let y2 = Math.max(...ymax) - 2;
*/

  dragrect.current = [x1, x2, y1, y2];
  dragrectr.current = [x1 + 2, x2 - 2, y1 + 2, y2 - 2];
  return (
    Math.abs(x1) !== Infinity &&
    !vectoredit.current && (
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
        <RectBBox />
        <ResizeCircles />
        <RotateCircles />
        <RectMidCirleTest />
      </g>
    )
  );
}
export default Rect;
