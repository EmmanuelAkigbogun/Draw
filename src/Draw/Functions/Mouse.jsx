export let down = (e, context, ref) => {
  console.log("down");
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let vgcolor = context.vgcolor;
  let cwidth = context.cwidth;
  let cheight = context.cheight;
  let mooveboolean = context.mooveboolean;
  let straightcolor = context.straightcolor;
  let pen = context.pen;
  let pencirclearr = context.pencirclearr;
  let movepen = context.movepen;
  let downconst = context.downconst;
  let vx = context.vx;
  let vy = context.vy;
  let alignedline = context.alignedline
  let x =
    (e.clientX - ref.current.getBoundingClientRect().x) *
      (cwidth.current / ref.current.clientWidth) +
    vx.current;
  let y =
    (e.clientY - ref.current.getBoundingClientRect().y) *
      (cheight.current / ref.current.clientHeight) +
    vy.current;
  if (vgpathxy.current[`pathmouse`] === undefined) {
    vgpathxy.current[`pathmouse`] = [`M${x} ${y}L${x} ${y}`];
    vgpath.current.push(`M${x} ${y} ${x} ${y}`);
    if (pen.current) {
      downconst.current = `M${x} ${y}`;
    }
    vgcolor.current.push(`white`);
    straightcolor.current.push("white");
  } else {
    if (pen.current) {
      if (e.target.getAttribute("name") === "circledbcart$") {
        x = e.target.getAttribute("cx");
        y = e.target.getAttribute("cy");
      }
     if (
       pencirclearr.current.includes(`${x} ${y}`) &&
       pencirclearr.current[pencirclearr.current.length - 2] !== `${x} ${y}` &&
       pencirclearr.current[pencirclearr.current.length - 1] !== `${x} ${y}`
     ) {
     } 
     else{
      downconst.current = downconst.current + `L${x} ${y}`;
    }
    }
  }
  if (pen.current) {
    if (
      pencirclearr.current.includes(`${x} ${y}`) &&
      pencirclearr.current[pencirclearr.current.length - 2] !== `${x} ${y}` &&
      pencirclearr.current[pencirclearr.current.length - 1] !== `${x} ${y}`
    ) {
      vgpathxy.current = {};
      pencirclearr.current = [];
      movepen.current = `L `;
      downconst.current = downconst.current+"Z" ;
    } else {
      pencirclearr.current.push(`${x} ${y}`);
    }
    vgpath.current.splice(vgpath.current.length - 1, 1, downconst.current);
  }
  mooveboolean.current = true;
  alignedline.current = [];
  setRender((r) => r + 1);
};
export let mousemove = (e, context, ref) => {
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let cwidth = context.cwidth;
  let cheight = context.cheight;
  let mooveboolean = context.mooveboolean;
  let vertical = context.vertical.current;
  let horizontal = context.horizontal.current;
  let line = context.line.current;
  let straightcolor = context.straightcolor;
  let vgcolor = context.vgcolor;
  let vg = context.vg;
  let pen = context.pen.current;
  let movepen = context.movepen;
  let pencirclearr = context.pencirclearr;
  let downconst = context.downconst;
  let vx = context.vx;
  let vy = context.vy;
  let alignedline = context.alignedline;
  if (mooveboolean.current) {
    if (vgpathxy.current[`pathmouse`] !== undefined) {
      let x =
        (e.clientX - ref.current.getBoundingClientRect().x) *
          (cwidth.current / ref.current.clientWidth) +
        vx.current;
      let y =
        (e.clientY - ref.current.getBoundingClientRect().y) *
          (cheight.current / ref.current.clientHeight) +
        vy.current;
      let end = vg.current.children[
        vgcolor.current.length - 1
      ].getPointAtLength(
        vg.current.children[vgcolor.current.length - 1].getTotalLength()
      );
      let begin =
        vg.current.children[vgcolor.current.length - 1].getPointAtLength(0);
      vgpathxy.current[`pathmouse`].push(`L${x} ${y}`);
      !horizontal &&
        !vertical &&
        !line &&
        !pen &&
        vgpath.current.splice(
          vgpath.current.length - 1,
          1,
          vgpath.current[vgpath.current.length - 1] + `L${x} ${y}`
        );
      vertical &&
        vgpath.current.splice(
          vgpath.current.length - 1,
          1,
          vgpath.current[vgpath.current.length - 1].replace(
            /[V][-|0-9|.]*/g,
            ""
          ) + `V${y}`
        );
      horizontal &&
        vgpath.current.splice(
          vgpath.current.length - 1,
          1,
          vgpath.current[vgpath.current.length - 1].replace(
            /[H][-|0-9|.]*/g,
            ""
          ) + `H${x}`
        );
      line &&
        vgpath.current.splice(
          vgpath.current.length - 1,
          1,
          vgpath.current[vgpath.current.length - 1].replace(
            /[L][-|0-9|.]* [0-9|.]*/g,
            ""
          ) + `L${x} ${y}`
        );
      if (pen) {
        vgpath.current.splice(
          vgpath.current.length - 1,
          1,
          downconst.current + `L${x} ${y}`
        );
        movepen.current = `${x} ${y}`;
      }
      if (line && (begin.x === end.x || begin.y === end.y)) {
        vgcolor.current.splice(vgcolor.current.length - 1, 1, "green");
      } else if (
        pen &&
        pencirclearr.current
          .map((e) => {
            if (e.includes(`${x}`) || e.includes(`${y}`)) {
                alignedline.current.push(`${x} ${y} ${e}`)
              return (e.includes(`${x}`) || e.includes(`${y}`));
            }
          })
          .filter((e) => e == true)[0]
      ) {
      
      } else {
        alignedline.current=[]
        vgcolor.current.splice(
          vgcolor.current.length - 1,
          1,
          straightcolor.current[vgcolor.current.length - 1]
        );
      }
    }
  }
  setRender((r) => r + 1);
};
export let up = (e, context) => {
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let mooveboolean = context.mooveboolean;
  let vgpath = context.vgpath;
  let vgcolor = context.vgcolor;
  let straightcolor = context.straightcolor;
  let pen = context.pen;
  if (!pen.current) {
    vgpathxy.current[`pathmouse`].length > 1 &&
      vgpath.current.splice(
        vgpath.current.length - 1,
        1,
        `M` +
          vgpath.current[vgpath.current.length - 1].replace(
            /[M][-|0-9|.]* [-|0-9|.]* /g,
            ""
          )
      );
  }
  vgcolor.current.splice(
    vgcolor.current.length - 1,
    1,
    straightcolor.current[vgcolor.current.length - 1]
  );
  console.log("up");
  setRender((r) => r + 1);
  if (!pen.current) {
    vgpathxy.current = {};
    mooveboolean.current = false;
  }
};
