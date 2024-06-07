import { rotateFx } from "./xFx";

export let getRotateAngle = (context, x, y) => {
  let dragx = context.dragx;
  let dragy = context.dragy;
  let dragrectr = context.dragrectr;
  let dragrect = context.dragrect;
  let vg = context.vg;
  let rotatewheel = context.rotatewheel;
  let rotatetype = context.rotatetype;
  let anglevalue = context.anglevalue;
  let targetObject = context.targetObject;
  //console.log(-((titad * 360) / Math.PI));
  //console.log(Math.acos(0));
  /*
    let  xy=x*dragx.current+y*dragy.current
    let dragxab1 = Math.sqrt(
      dragx.current**2  + dragy.current **2
    );
    let ab1 = Math.sqrt(x **2 + y **2);
    let valuetita=(xy)/(dragxab1*ab1)
    let titad = (Math.acos(valuetita)) 
    console.log(-((titad * 360) / Math.PI));
    //console.log(Math.acos(0));
  */
  const pi = Math.PI;
  let cx =
    dragrectr.current[0] + (dragrectr.current[1] - dragrectr.current[0]) / 2;
  let cy =
    dragrectr.current[2] + (dragrectr.current[3] - dragrectr.current[2]) / 2;
  let differy = cy - y;
  let differx = cx - x;
  let yita = Math.atan(differy / differx);
  let ym = yita * 180;
  let gh = ym / pi;
  let constantval = 45;

  if (rotatetype.current == "sw") {
    // down left
    constantval = -45;
    if (x > cx && -gh + constantval < 0) {
      gh = -gh + constantval + 180;
    } else if (y < cy && -gh + constantval <= 45 && -gh + constantval >= 0) {
      gh = -gh + constantval - 180;
    } else {
      gh = -gh + constantval;
    }
  } else if (rotatetype.current == "se") {
    // down right
    constantval = 45;
    if (y < cy && -gh + constantval < 0) {
      gh = -gh + constantval + 135 + constantval;
    } else if (x < cx && -gh + constantval < 135 && -gh + constantval >= 0) {
      gh = -gh + constantval - 180;
    } else {
      gh = -gh + constantval;
    }
  } else if (rotatetype.current == "nw") {
    //up left
    constantval = 45;
    if (y > cy && -gh + constantval < 0) {
      gh = -gh + constantval + 135 + constantval;
    } else if (x > cx && -gh + constantval < 135 && -gh + constantval >= 0) {
      gh = -gh + constantval - 180;
    } else {
      gh = -gh + constantval;
    }
  } else if (rotatetype.current == "ne") {
    // up right
    constantval = -45;
    if (x < cx && -gh + constantval < 0) {
      gh = -gh + constantval + 180;
    } else if (y > cy && -gh + constantval <= 45 && -gh + constantval >= 0) {
      gh = -gh + constantval - 180;
    } else {
      gh = -gh + constantval;
    }
  }
  anglevalue.current=gh;
  if (rotatewheel.current) {
    rotateFx(context, 0);
    rotatewheel.current = false;
  } else {
    rotateFx(context, gh);
  }
};
