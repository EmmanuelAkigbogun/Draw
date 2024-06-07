export let setRotate = (context, angle, c2x, c2y) => {
  let targetObject = context.targetObject;
  let dragd = context.dragd;
  let draga = context.draga;
  let dragx = context.dragx;
  let dragy = context.dragy;
  let rotatedown = context.rotatedown;
  let rotatewheel = context.rotatewheel;
  let vgpath = context.vgpath;
  /*
    let ctmObj=targetObject.current[a][0].getCTM().rotate(+angle)
    let ctmObjr = targetObject.current[a][0].getScreenCTM().rotateFromVector();
    let z= ctmObj.a
    let b = ctmObj.b;
    let c = ctmObj.c;
    let d = ctmObj.d;
    let e = ctmObj.e;
    let f = ctmObj.f;
    */
  Object.keys(targetObject.current).map((a, i) => {
    const pi = Math.PI;
    let ma = +angle * (pi / 180);
    if (rotatewheel.current) {
      if (targetObject.current[a][0]?.getAttribute("rotate-dataw") !== null) {
        ma =
          +angle +
          targetObject.current[a][0]?.getAttribute("rotate-dataw") * (pi / 180);
      }
    } else {
      if (rotatedown.current) {
        if (targetObject.current[a][0]?.getAttribute("rotate-dataw") !== null) {
          ma =
            (+angle -
              +targetObject.current[a][0]?.getAttribute("rotate-dataw")) *
            (pi / 180);
        }
        targetObject.current[a][0].setAttribute("rotate-dataw", +angle);
      } else {
        if (targetObject.current[a][0]?.getAttribute("rotate-data") !== null) {
          ma =
            (+angle -
              +targetObject.current[a][0]?.getAttribute("rotate-data")) *
            (pi / 180);
        }
        targetObject.current[a][0].setAttribute("rotate-data", angle);
      }
    }
    let coz = Math.cos(-ma);
    let zin = Math.sin(-ma);
    let z = coz;
    let b = -zin;
    let c = zin;
    let d = coz;
    let e = c2x * (1 - coz) + c2y * zin;
    let f = c2y * (1 - coz) - c2x * zin;
    ///
    let lo = [];
    let oddfactor = 0;
    for (let index = 0; index < dragd.current[i].length; index++) {
      let xval =  (+dragd.current[i][index] * z) + +dragd.current[i][index + 1] * b + e;
      let yval =
        +dragd.current[i][index - 1] * c + +dragd.current[i][index] * d + f;
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
      if ((index - oddfactor) % 2 == 0) {
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
    } else {
      targetObject.current[a][0].setAttribute(
        `transform`,
        `rotate(${-angle} ${c2x} ${c2y})`
      );
      
    }
  });
};
