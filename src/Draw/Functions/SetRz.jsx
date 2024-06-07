export let setRz = (context,x1,y1,w1,w2,h1,h2) => {
  let targetObject = context.targetObject;
  let dragd = context.dragd;
  let draga = context.draga;
  let vgpath = context.vgpath;
  let target = context.target;
  let setRender = context.setRender;
   target.current = [];
  Object.keys(targetObject.current).map((a, i) => {
    let lo = [];
      let oddfactor = 0;
    let wr = w2 / w1;
    let hr = h2 / h1;
    if (
      targetObject.current[a][0].localName === "rect" ||
      targetObject.current[a][0].localName === "circle" ||
      targetObject.current[a][0].localName === "ellipse"
    ) {
      let [b, c, d, e] = BoxToPoint(
        +dragd.current[i][0],
        +dragd.current[i][1],
        +dragd.current[i][2],
        +dragd.current[i][3]
      );
      let lizt = [b, c, d, e];
      lizt.map((r, q) => {
        let xr = r - x1;
        let yr = r - y1;
        let xval = x1 + wr * xr;
        let yval = y1 + hr * yr;
        if (q % 2 == 0) {
          lo.push(`${xval}`);
        } else {
          lo.push(`${yval}`);
        }
      });
    } else {
      for (let index = 0; index < draga.current[i].length; index++) {
        let xr = +dragd.current[i][index] - x1;
        let yr = +dragd.current[i][index] - y1;
        let xval = x1 + wr * xr;
        let yval = y1 + hr * yr;
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
      let [m, n, o, p] = PointToBox(...lo); 
      targetObject.current[a][0].setAttribute("width", `${o}`);
      targetObject.current[a][0].setAttribute("height", `${p}`);
      targetObject.current[a][0].setAttribute("x",`${m}`);
      targetObject.current[a][0].setAttribute("y",`${n}`);
      vgpath.current.splice(
        a,
        1,
        `RECT:${m} ${n} ${o} ${p}`
      );
    } else if (targetObject.current[a][0].localName == "circle") {
              let [m, n, o, p] = PointToBox(...lo);
              targetObject.current[a][0].setAttribute("r", `${Math.max(p,o)}`);
              targetObject.current[a][0].setAttribute("cx", `${lo[0]}`);
              targetObject.current[a][0].setAttribute("cy", `${lo[1]}`);
              vgpath.current.splice(a, 1, `CIRCLE:${lo[0]} ${lo[1]} ${Math.max(p,o)}`);    
    
    } else if (targetObject.current[a][0].localName == "ellipse") {
          let [m, n, o, p] = PointToBox(...lo);
          targetObject.current[a][0].setAttribute("rx", `${o}`);
          targetObject.current[a][0].setAttribute("ry", `${p}`);
          targetObject.current[a][0].setAttribute("cx", `${lo[0]}`);
          targetObject.current[a][0].setAttribute("cy", `${lo[1]}`);
      vgpath.current.splice(
        a,
        1,
        `ELLIPSE:${lo[0]} ${lo[1]} ${o} ${p}`
      );
    } else if (targetObject.current[a][0].localName == "line") {
      targetObject.current[a][0].setAttribute("x1", lo.map((m) => m)[0]);
      targetObject.current[a][0].setAttribute("y1", lo.map((m) => m)[1]);
      targetObject.current[a][0].setAttribute("x2", lo.map((m) => m)[2]);
      targetObject.current[a][0].setAttribute("y2", lo.map((m) => m)[3]);
    }      
  });
  setRender((r) => r + 1);
};
let BoxToPoint=(...data)=>{
  let [x1,y1,width,height]=data
  let x2= x1+width
  let y2=y1+height
  return [x1,y1,x2,y2];
}
let PointToBox = (...data) => {
  let [a, b, c, d] = data;
  let x1=Math.min(a,c)
  let x2 = Math.max(a, c);
  let y1 = Math.min(b, d);
  let y2 = Math.max(b, d);
  let width = Math.abs(x2-x1);
  let height = Math.abs(y2 - y1);
  return [x1, y1, width, height];
};
export let rectToPath=(context,index)=>{
    let vgpath = context.vgpath;
     let pointz=(vgpath.current[index].replace("RECT:","").split(" ").map(e=>+e));
     let[x1,y1,x2,y2] =BoxToPoint(...pointz)
     vgpath.current.splice(
       index,
       1,
       `M${x1} ${y1} ${x2} ${y1} ${x2} ${y2} ${x1} ${y2}Z`
     );
}
export let pathToRect = (context, index) => {
  let vgpath = context.vgpath;
  let arraydata = vgpath.current[index]
    .replace("M", "")
    .replace("Z", "")
    .replaceAll("L"," ")
    .split(" ");
   if(arraydata.length===8){
  let pointz = arraydata
    .slice(0, 3)
    pointz.push(arraydata[5])
    pointz=pointz.map((e) => +e);
  let [x1, y1, x2, y2] = PointToBox(...pointz);
  vgpath.current.splice(
    index,
    1,
    `RECT:${x1} ${y1} ${x2} ${y2}`
  );
}
};