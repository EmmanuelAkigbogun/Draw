import { SetShear } from "./Functions/SetShear";
import { getPathData } from "./Functions/GetPath";
import { setPathData } from "./Functions/SetPath";
import { setRotate } from "./Functions/SetRotate";
import { pathToRect, rectToPath, setRz } from "./Functions/SetRz";
import { HeightFx, rotateFx, xfx } from "./Functions/xFx";
import Circle from "./PenHoverCircle";
export let keydownfx = (e, context, target) => {
  console.log(e.key);
  let setRender = context.setRender;
  let ctx = context.ctx;
  let link = context.link;
  let vg = context.vg;
  let edit = context.edit;
  let vgcolor = context.vgcolor;
  let vgpath = context.vgpath;
  let horizontal = context.horizontal;
  let vertical = context.vertical;
  let line = context.line;
  let pen = context.pen;
  let pencirclearr = context.pencirclearr;
  let movepen = context.movepen;
  let downconst = context.downconst;
  let straightcolor = context.straightcolor;
  let shapes = context.shapes;
  let rbox = context.rbox;
  let circle = context.circle;
  let ellipse = context.ellipse;
  let polyelip = context.polyelip;
  let hovercolor = context.hovercolor;
  let cursor = context.cursor;
  let duplicate = context.duplicate;
  let editdrag = context.editdrag;
  let targetObject = context.targetObject;
  let draga = context.draga;
  let dragd = context.dragd;
  let lockdrag = context.lockdrag;
  let vpoly = context.vpoly;
  let dragx = context.dragx;
  let dragy = context.dragy;
  let vectoredit = context.vectoredit;
  let bend = context.bend;
  let dragrectr = context.dragrectr;
    let anglevalue = context.anglevalue;
  if (e.key !== "G" && e.key !== "g") {
    if (e.ctrlKey) {
    }
  }
  if (pen.current && e.key !== "W" && e.key !== "w") {
    vgpath.current.splice(vgpath.current.length - 1, 1, downconst.current);
    pen.current = false;
  }
  if (e.key === "e" || e.key === "E") {
    edit.current = true;
    movepen.current = ``;
    pencirclearr.current = [];
    pen.current = false;
    rbox.current = false;
    ellipse.current = false;
    polyelip.current.splice(0, 1, false);
    circle.current = false;
    shapes.current = false;
    cursor.current = ``;
    setRender((r) => r + 1);
  } else if (e.key === "f" || e.key === "F") {
    let obj = targetObject.current; 
    let arraynumber = [];
    Object.keys(targetObject.current).map((e) => {
      if (targetObject.current[e][0].localName === "rect") {
        arraynumber.push(targetObject.current[e][7]);
        rectToPath(context, targetObject.current[e][7]);
        setRender((r) => r + 1);
      } else if (targetObject.current[e][0].localName === "path") {
        pathToRect(context, targetObject.current[e][7]);
        arraynumber.push(targetObject.current[e][7]);
        setRender((r) => r + 1);
      }
  
    });
   
            targetObject.current = {};
                    Object.keys(obj).map((e) => {
                 let el = obj[e][0];
                 let tgt = [];
                 tgt.push(el);
                 tgt.push(tgt[0].getBBox().x);
                 tgt.push(tgt[0].getBBox().y);
                 tgt.push(tgt[0].getBBox().width);
                 tgt.push(tgt[0].getBBox().height);
                 tgt.push(tgt[1] + tgt[3]);
                 tgt.push(tgt[2] + tgt[4]);
                 tgt.push(Array.from(vg.current.children).indexOf(el));
                 targetObject.current[
                   Array.from(vg.current.children).indexOf(el)
                 ] = tgt;
                })
  
  } else if (e.key === "D" || e.key === "d") {
    if (!e.shiftKey) {
      movepen.current = ``;
      pencirclearr.current = [];
      pen.current = false;
      rbox.current = false;
      ellipse.current = false;
      polyelip.current.splice(0, 1, false);
      circle.current = false;
      shapes.current = false;
      cursor.current = ``;
      edit.current = false;
    } else {
      Object.keys(targetObject.current).map((e) => {
        vgpath.current.push(vgpath.current[e]);
        vgcolor.current.push(vgcolor.current[e]);
        straightcolor.current.push(straightcolor.current[e]);
      });
    }
    setRender((r) => r + 1);
  } else if (e.key === "N" || e.key === "n") {
    movepen.current = ``;
    pencirclearr.current = [];
    pen.current = false;
    edit.current = false;
    horizontal.current = false;
    vertical.current = false;
    line.current = false;
    rbox.current = false;
    ellipse.current = false;
    polyelip.current.splice(0, 1, false);
    circle.current = false;
    shapes.current = false;
    cursor.current = ``;
    setRender((r) => r + 1);
  } else if (e.key === "W" || e.key === "w") {
    horizontal.current = false;
    vertical.current = false;
    line.current = false;
    pen.current = true;
    edit.current = false;
    rbox.current = false;
    ellipse.current = false;
    polyelip.current.splice(0, 1, false);
    circle.current = false;
    shapes.current = false;
    cursor.current = ``;
    setRender((r) => r + 1);
  } else if (e.key === "L" || e.key === "l") {
    horizontal.current = false;
    vertical.current = false;
    line.current = true;
    pen.current = false;
    edit.current = false;
    rbox.current = false;
    ellipse.current = false;
    polyelip.current.splice(0, 1, false);
    circle.current = false;
    shapes.current = false;
    cursor.current = `crosshair`;
    setRender((r) => r + 1);
  } else if (e.key === "H" || e.key === "h") {

    let wihi = prompt("width height");
    let wid;
    let hei;
    if (+wihi.split(" ")[0] === 0) wid = 0.01;
    else wid = +wihi.split(" ")[0];
    if (+wihi.split(" ")[1] === 0) hei = 0.01;
    else hei = +wihi.split(" ")[1];
    HeightFx(context,wid,hei)
  } else if (e.key === "X" || e.key === "x") {
    let xy = prompt("x y");
    let xq;
    let yq;
    if (+xy.split(" ")[0] === 0) xq = 0.01;
    else xq = +xy.split(" ")[0];
    if (+xy.split(" ")[1] === 0) yq = 0.01;
    else yq = +xy.split(" ")[1];
    xfx(context, xq, yq);
  } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
    if (e.key === "ArrowUp") {
      vpoly.current = true;
    } else {
      vpoly.current = false;
    }
    setRender((r) => r + 1);
  } else if (e.key === "PageUp") {
    if (e.shiftKey) {
      let xy = prompt("x y");
      let xq;
      let yq;
      if (+xy.split(" ")[0] === 0) xq = 0.01;
      else xq = +xy.split(" ")[0];
      if (+xy.split(" ")[1] === 0) yq = 0.01;
      else yq = +xy.split(" ")[1];
        let coriginx = -(dragrectr.current[1] - dragrectr.current[0]) / 2;
        let coriginy = -(dragrectr.current[3] - dragrectr.current[2]) / 2;
        let c2x =
          dragrectr.current[0] +
          (dragrectr.current[1] - dragrectr.current[0]) / 2;
        let c2y =
          dragrectr.current[2] +
          (dragrectr.current[3] - dragrectr.current[2]) / 2;
        xfx(context, coriginx, coriginy);
        dragd.current = [];
        draga.current = [];
        getPathData(context);
           SetShear(context, xq, yq);
        xfx(context, (c2x + coriginx), (c2y + coriginy));
    } else {
      let angle = prompt("angle");
      anglevalue.current=+angle
      rotateFx(context, 0);
      rotateFx(context, (+angle));
    }
    setRender((r) => r + 1);
  } else if (e.key === "R" || e.key === "r") {
    horizontal.current = true;
    vertical.current = false;
    line.current = false;
    pen.current = false;
    edit.current = false;
    rbox.current = false;
    ellipse.current = false;
    polyelip.current.splice(0, 1, false);
    circle.current = false;
    shapes.current = false;
    cursor.current = `crosshair`;
    setRender((r) => r + 1);
  } else if (e.key === "T" || e.key === "t") {
    vertical.current = true;
    horizontal.current = false;
    pen.current = false;
    line.current = false;
    edit.current = false;
    rbox.current = false;
    ellipse.current = false;
    polyelip.current.splice(0, 1, false);
    circle.current = false;
    shapes.current = false;
    cursor.current = `crosshair`;
    setRender((r) => r + 1);
  } else if (e.key === "Delete") {
    vgpath.current = vgpath.current.filter((e, i) => i !== target);
    straightcolor.current = straightcolor.current.filter(
      (e, i) => i !== target
    );
    vgcolor.current = vgcolor.current.filter((e, i) => i !== target);
    setRender((r) => r + 1);
  } else if (
    e.key === "o" ||
    e.key === "O" ||
    e.key === "q" ||
    e.key === "Q" ||
    e.key === "b" ||
    e.key === "B" ||
    e.key === "PageDown"
  ) {
    if (!vectoredit.current) {
      movepen.current = ``;
      pencirclearr.current = [];
      pen.current = false;
      edit.current = false;
      horizontal.current = false;
      vertical.current = false;
      line.current = false;
      shapes.current = true;
      cursor.current = `crosshair`;
    }
    if (e.key === "o" || e.key === "O") {
      circle.current = true;
      rbox.current = false;
      ellipse.current = false;
      polyelip.current.splice(0, 1, false);
    }

    if (e.key === "q" || e.key === "Q") {
      ellipse.current = true;
      rbox.current = false;
      polyelip.current.splice(0, 1, false);
      circle.current = false;
    }
    if (e.key === "b" || e.key === "B") {
      if (e.altKey && vectoredit.current) {
        if (!bend.current) {
          bend.current = true;
        } else {
          bend.current = false;
        }
      } else {
        rbox.current = true;
        polyelip.current.splice(0, 1, false);
        ellipse.current = false;
        circle.current = false;
      }
    }
    if (e.key === "PageDown") {
      rbox.current = false;
      ellipse.current = false;
      circle.current = false;
      let val = prompt("sides");
      polyelip.current.splice(0, 1, true);
      val > 1
        ? polyelip.current.splice(1, 1, +val)
        : polyelip.current.splice(1, 1, 2);
    }
    setRender((r) => r + 1);
  } else {
    ctx.current.reset();
    let value = btoa(vg.current.outerHTML);
    if (e.key === "v" || e.key === "v") {
      link.current.href = "data:image/svg+xml;base64," + value;
      link.current.download = "draw";
      link.current.click();
    }
    if (e.key === "p" || e.key === "P" || e.key === "j" || e.key === "J") {
      let img = new Image();
      img.src = "data:image/svg+xml;base64," + value;
      img.onload = () => {
        ctx.current.drawImage(img, 0, 0);
        link.current.href =
          e.key === "j" || e.key === "J"
            ? ctx.current.canvas.toDataURL("image/jpeg", 1)
            : ctx.current.canvas.toDataURL("image/png", 1);
        link.current.download = "draw";
        link.current.click();
      };
      img.remove();
    }
  }
};
export let bounded = (string, a, z) => {
  return string
    .split(a)
    .join(z)
    .split(z)
    .filter((e, i) => i % 2 !== 0);
};
export let promptfx = () => {
  let m = {};
  m["key"] = prompt("Function", "svg png jpeg edit draw delete");
  m["key"] = m["key"]
    .replace("svg", "v")
    .replace("png", "p")
    .replace("jpeg", "j")
    .replace("delete", "Delete")
    .replace("edit", "e")
    .replace("draw", "d");
  m["key"] !== "v" &&
  m["key"] !== "p" &&
  m["key"] !== "j" &&
  m["key"] !== "d" &&
  m["key"] !== "e" &&
  m["key"] !== "Delete"
    ? (m["key"] = "d")
    : "";
  return m;
};
