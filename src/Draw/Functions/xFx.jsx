import { GetC } from "../GetCentroid";
import { getPathData } from "./GetPath";
import { setPathData } from "./SetPath";
import { setRotate } from "./SetRotate";
import { setRz } from "./SetRz";
import { setTran } from "./SetTrans";
export let xfx=(context,xq,yq)=>{
    let dragd=context.dragd
    let draga = context.draga;
    let targetObject=context.targetObject
    let dragx=context.dragx
    let dragy = context.dragy;
    let setRender = context.setRender;
        dragd.current = [];
        draga.current = [];
        let x1 = Object.keys(targetObject.current).map(
          (e) => targetObject.current[e][1]
        );
        x1 = Math.min(...x1);

        let y1 = Object.keys(targetObject.current).map(
          (e) => targetObject.current[e][2]
        );
        y1 = Math.min(...y1);
        dragx.current = x1;
        dragy.current = y1;
        getPathData(context);
        setPathData(context, xq, yq);
        //setTran(context, xq - dragx.current, yq - dragy.current);
        setRender((r) => r + 1);
        Object.keys(targetObject.current).map((e) => {
          targetObject.current[e][1] = targetObject.current[e][0].getBBox().x;
          targetObject.current[e][2] = targetObject.current[e][0].getBBox().y;
          targetObject.current[e][3] =
            targetObject.current[e][0].getBBox().width;
          targetObject.current[e][4] =
            targetObject.current[e][0].getBBox().height;
          targetObject.current[e][5] =
            targetObject.current[e][1] + targetObject.current[e][3];
          targetObject.current[e][6] =
            targetObject.current[e][2] + targetObject.current[e][4];
        });
        
}
export let rotateFx=(context,angle)=>{
            let dragd = context.dragd;
            let draga = context.draga;
            let dragrectr = context.dragrectr;
             let setRender = context.setRender;
 //       dragd.current = [];
//        draga.current = [];
//       getPathData(context);
//        let [centx,centy]=GetC(context)
//      let [centox,centoy]=[dragrectr.current[0]-centx,dragrectr.current[2]-centy]
//      let coriginx = -(dragrectr.current[1] - dragrectr.current[0]) / 2;
//      let coriginy = -(dragrectr.current[3] - dragrectr.current[2]) / 2;
        let c2x =dragrectr.current[0] + (dragrectr.current[1] - dragrectr.current[0]) / 2;
        let c2y =dragrectr.current[2] +(dragrectr.current[3] - dragrectr.current[2]) / 2;
        //  console.log(centx,centy,"caft",centox,centoy)
         // console.log(c2x,c2y,"cbfr",coriginx,coriginy);
        dragd.current = [];
        draga.current = [];
        getPathData(context);
        setRotate(context, angle,c2x,c2y);
        setRender((r) => r + 1);
}
export let HeightFx=(context,wid,hei)=>{
          let dragd = context.dragd;
          let draga = context.draga;
          let lockdrag=context.lockdrag    
          let targetObject = context.targetObject;
          let setRender = context.setRender;
          dragd.current = [];
          draga.current = [];
          lockdrag.current = true;
          getPathData(context);
          lockdrag.current = false;
          let x1 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][1]
          );
          x1 = Math.min(...x1);
          let x2 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][5]
          );
          x2 = Math.max(...x2);
          let y1 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][2]
          );
          y1 = Math.min(...y1);
          let y2 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][6]
          );
          y2 = Math.max(...y2);
          setRz(
            context,
            x1,
            y1,
            x2 - x1, //w1
            wid,
            y2 - y1, //h1
            hei
          );
          dragd.current = [];
         draga.current = [];
          setRender((r) => r + 1);
          Object.keys(targetObject.current).map((e) => {
            targetObject.current[e][1] = targetObject.current[e][0].getBBox().x;
            targetObject.current[e][2] = targetObject.current[e][0].getBBox().y;
            targetObject.current[e][3] =
              targetObject.current[e][0].getBBox().width;
            targetObject.current[e][4] =
              targetObject.current[e][0].getBBox().height;
            targetObject.current[e][5] =
              targetObject.current[e][1] + targetObject.current[e][3];
            targetObject.current[e][6] =
              targetObject.current[e][2] + targetObject.current[e][4];
          });
}