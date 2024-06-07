export let setPathData = (context,x,y) => {
      let targetObject = context.targetObject;
      let dragd = context.dragd;
      let draga = context.draga;
      let dragx = context.dragx;
      let dragy = context.dragy;
      let vgpath = context.vgpath;
  Object.keys(targetObject.current).map((a, i) => {
    ///
    let lo = [];
    let oddfactor=0
    for (let index = 0; index < dragd.current[i].length; index++) {
      let xval = + dragd.current[i][index] - dragx.current + x;
      let yval = +dragd.current[i][index] - dragy.current + y;
    
      //////////////////////////////////////open////////////////////////////////
      if (
        (draga.current[i][index] == "M" ||
          draga.current[i][index] == "C" ||
          draga.current[i][index] == "L") &&
        (index - oddfactor) % 2 !== 0
      ) {
        oddfactor = oddfactor + 1;
      } else if (
        draga.current[i][index] == "V" &&
        (index - oddfactor) % 2 === 0
      ) {
        oddfactor = oddfactor + 1;
      } else if (
        draga.current[i][index] == "H" &&
        (index - oddfactor) % 2 != 0
      ) {
        oddfactor = oddfactor + 1;
      } 
      ////////////////////////////////////close///////////////////////////////////////
      if ((index-oddfactor) % 2 == 0) {
        lo.push(
          draga.current[i][index] +
            (dragd.current[i][index] !== "" ? xval.toFixed(2) : "")
        );
        ///////////////////////////////////////open/////////////////////////////////////////////
        if (draga.current[i][index] == "H") {
          oddfactor = oddfactor + 1;
        }
        ////////////////////////////////////close////////////////////////////////////////////////
      } else {
        lo.push(
          draga.current[i][index] +
            (dragd.current[i][index] !== "" ? yval.toFixed(2) : "")
        );
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
    } else if (targetObject.current[a][0].localName == "rect") {
      targetObject.current[a][0].setAttribute("x", lo.map((m) => m)[0]);
      targetObject.current[a][0].setAttribute("y", lo.map((m) => m)[1]);
      vgpath.current.splice(
        a,
        1,
        `RECT:${targetObject.current[a][0].getAttribute(
          "x"
        )} ${targetObject.current[a][0].getAttribute(
          "y"
        )} ${targetObject.current[a][0].getAttribute(
          "width"
        )} ${targetObject.current[a][0].getAttribute("height")}`
      );
    } else if (targetObject.current[a][0].localName == "circle") {
      targetObject.current[a][0].setAttribute("cx", lo.map((m) => m)[0]);
      targetObject.current[a][0].setAttribute("cy", lo.map((m) => m)[1]);
      vgpath.current.splice(
        a,
        1,
        `CIRCLE:${targetObject.current[a][0].getAttribute(
          "cx"
        )} ${targetObject.current[a][0].getAttribute(
          "cy"
        )} ${targetObject.current[a][0].getAttribute("r")}`
      );
    } else if (targetObject.current[a][0].localName == "ellipse") {
      targetObject.current[a][0].setAttribute("cx", lo.map((m) => m)[0]);
      targetObject.current[a][0].setAttribute("cy", lo.map((m) => m)[1]);
      vgpath.current.splice(
        a,
        1,
        `ELLIPSE:${targetObject.current[a][0].getAttribute(
          "cx"
        )} ${targetObject.current[a][0].getAttribute(
          "cy"
        )} ${targetObject.current[a][0].getAttribute(
          "rx"
        )} ${targetObject.current[a][0].getAttribute("ry")}`
      );
    } else if (targetObject.current[a][0].localName == "line") {
      targetObject.current[a][0].setAttribute("x1", lo.map((m) => m)[0]);
      targetObject.current[a][0].setAttribute("y1", lo.map((m) => m)[1]);
      targetObject.current[a][0].setAttribute("x2", lo.map((m) => m)[2]);
      targetObject.current[a][0].setAttribute("y2", lo.map((m) => m)[3]);
    }
  });
};
