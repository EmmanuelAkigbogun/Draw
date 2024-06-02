import { useContext } from "react";
import { Context } from "./Draw";

function RectMidCirleTest() {
        let context = useContext(Context);
        let editdrag = context.editdrag;
        let dragrect = context.dragrect;
        let lockdrag = context.lockdrag;
        let rcursor = context.rcursor;
        let edit = context.edit;
        let highlight = context.highlight;
         let rotatedown = context.rotatedown;
    return (
      <>
        {rotatedown.current&& (
          <circle
            cx={
              dragrect.current[0] +
              (dragrect.current[1] - dragrect.current[0]) / 2
            }
            cy={
              dragrect.current[2] +
              (dragrect.current[3] - dragrect.current[2]) / 2
            }
            r={`.5%`}
            fill={
              (!editdrag.current || highlight.current) && edit.current
                ? `#747474`
                : `none`
            }
            stroke="none"
            name="midcirart$"
            cursor={`grab`}
          />
        )}
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
            r={`.5%`}
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
      </>
    );
}
export default RectMidCirleTest;