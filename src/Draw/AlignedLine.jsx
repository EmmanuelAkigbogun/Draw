import { useContext } from "react";
import { Context } from "./Draw";
function AlignedLine() {
  let context = useContext(Context);
  let alignedline = context.alignedline;
  let pen=context.pen
  let vectoredit=context.vectoredit
  return (pen.current|vectoredit.current)&&alignedline.current.map((e,i) => {
    return (
      <line
        x1={e.split(" ")[0]}
        y1={e.split(" ")[1]}
        x2={e.split(" ")[2]}
        y2={e.split(" ")[3]}
        stroke="red"
        strokeWidth=".1%"
        key={e+i}
      ></line>
    );
  });
}
export default AlignedLine;
