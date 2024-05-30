export let setPathDataV = (context,x,y) => {
      let targetObject = context.targetObject;
      let dragd = context.dragd;
      let draga = context.draga;
      let dragx = context.dragx;
      let dragy = context.dragy;
      let vgpath = context.vgpath;
      let vDragpointsArr = context.vDragpointsArr
 
          let vectorCi = context.vectorCi;
          let vectorCj = context.vectorCj;
          let vectorCp = context.vectorCp;
          let vectorP = context.vectorP;
  Object.keys(targetObject.current).map((a, i) => {
    ///
    let lo = [];
    let oddfactor = 0;
    for (let index = 0; index < dragd.current[i].length; index++) {
      //////////////////////////////////////open////////////////////////////////
      if (
        (draga.current[i][index] == "M" ||
          draga.current[i][index] == "C" ||
          draga.current[i][index] == "L") &&
        (index - oddfactor) % 2 !== 0
      ) {
        oddfactor = oddfactor + 1;
      } else if (draga.current[i][index] == "Z" && (i - oddfactor) % 2 == 0) {
        oddfactor = oddfactor + 1;
      } else if (
        draga.current[i][index] == "V" &&
        (index - oddfactor) % 2 === 0
      ) {
        oddfactor = oddfactor + 1;
      } else if (
        draga.current[i][index] == "H" &&
        (index - oddfactor) % 2 !== 0
      ) {
        oddfactor = oddfactor + 1;
      }
      ////////////////////////////////////close///////////////////////////////////////
      if (vDragpointsArr.current.includes(index)) {
        let xval = Math.round(+dragd.current[i][index] - dragx.current + x);
        let yval = Math.round(+dragd.current[i][index] - dragy.current + y);

        if ((index - oddfactor) % 2 == 0) {
          lo.push(
            draga.current[i][index] +
              (dragd.current[i][index] !== "" ? xval : "")
          );
          ///////////////////////////////////////open/////////////////////////////////////////////
          if (draga.current[i][index] == "H") {
            oddfactor = oddfactor + 1;
          }
          ////////////////////////////////////close////////////////////////////////////////////////
        } else {
          lo.push(
            draga.current[i][index] +
              (dragd.current[i][index] !== "" ? yval : "")
          );
        }
      } else {
        lo.push(draga.current[i][index] + dragd.current[i][index]);
      }
    }

    if (targetObject.current[a][0].localName == "path") {
      targetObject.current[a][0].setAttribute(
        "d",
        lo
          .map((m) => m)
          .join(" ")
          .replace(/ (?=[A-Z]|[a-z])/g, "")
      );
      vgpath.current.splice(a, 1, targetObject.current[a][0].getAttribute("d"));
    } 
  });
};
