export let touchstart = (
  e,
  vgpathxy,
  vgidentity,
  vgpath,
  vgcolor,
  mooveboolean,
  vg,
  cwidth,
  cheight,
  straightcolor,
  vx,vy
) => {
  mooveboolean.current = false;
  for (let index = 0; index < e.targetTouches.length; index++) {
    const element = e.targetTouches[index];
    let x =
      (element.clientX - vg.current.getBoundingClientRect().x) *
        (cwidth.current / vg.current.clientWidth) +
      vx.current;
    let y =
      (element.clientY - vg.current.getBoundingClientRect().y) *
      (cheight.current / vg.current.clientHeight)+vy.current;
      x=x.toFixed(2)
      y = y.toFixed(2);
    if (vgpathxy.current[`path${element.identifier}`] === undefined) {
      vgpathxy.current[`path${element.identifier}`] = [`M${x} ${y}L${x} ${y}`];
      vgpath.current.push(`M${x} ${y}L${x} ${y}`);
      vgcolor.current.push(`hsl(${(element.identifier+1)*20},100%,50%)`);
       straightcolor.current.push(
         `hsl(${(element.identifier + 1) * 20},100%,50%)`
       );;
      //      `rgb(${Math.random() * 255},${Math.random() * 255},${
       //   Math.random() * 255
     //   })`
      vgidentity.current[`${element.identifier}`] = vgcolor.current.length - 1;
    }
  }
};
export let touchmove = (
  e,
  vgpathxy,
  vgidentity,
  vgpath,
  vg,
  cwidth,
  cheight,
  vertical,
  horizontal,
  line,
  vgcolor,
  straightcolor,
  vx,
  vy
) => {
  for (let index = 0; index < e.targetTouches.length; index++) {
    const element = e.targetTouches[index];
    let x =
      (element.clientX - vg.current.getBoundingClientRect().x) *
      (cwidth.current / vg.current.clientWidth)+vx.current;
    let y =
      (element.clientY - vg.current.getBoundingClientRect().y) *
      (cheight.current / vg.current.clientHeight)+vy.current;
          x = x.toFixed(2);
          y = y.toFixed(2);
    if (vgpathxy.current[`path${element.identifier}`] !== undefined) {
           let end = vg.current.children[
             vgidentity.current[`${element.identifier}`]
           ].getPointAtLength(
             vg.current.children[
               vgidentity.current[`${element.identifier}`]
             ].getTotalLength()
           );
           let begin =
             vg.current.children[
               vgidentity.current[`${element.identifier}`]
             ].getPointAtLength(0);
      let pathidentity =
        vgpath.current[vgidentity.current[`${element.identifier}`]];
      vgpathxy.current[`path${element.identifier}`].push(`L${x} ${y}`);
      !horizontal &&
        !vertical &&
        !line &&
        vgpath.current.splice(
          vgidentity.current[`${element.identifier}`],
          1,
          pathidentity + `L${x} ${y}`
        );
      horizontal &&
        vgpath.current.splice(
          vgidentity.current[`${element.identifier}`],
          1,
          pathidentity.replace(/[-|H][-|0-9|.]*/g, ``) + `H${x}`
        );
      vertical &&
        vgpath.current.splice(
          vgidentity.current[`${element.identifier}`],
          1,
          pathidentity.replace(/[V][-|0-9|.]*/g, ``) + `V${y}`
        );
      line &&
        vgpath.current.splice(
          vgidentity.current[`${element.identifier}`],
          1,
          pathidentity.replace(/[L][-|0-9|.]* [-|0-9|.]*/g, "") + `L${x} ${y}`
        );
        if (line && (Math.round(begin.x) === Math.round(end.x) ||Math.round(begin.y) === Math.round(end.y))) {
                  vgcolor.current.splice(
                    vgidentity.current[`${element.identifier}`],
                    1,
                    "green"
                  );
              } else if(line) {
                vgcolor.current.splice(
                  vgidentity.current[`${element.identifier}`],
                  1,
                  straightcolor.current[
                    vgidentity.current[`${element.identifier}`]
                  ]
                );
              }
    }
  }
};
export let touchend = (
  e,
  vgpathxy,context,
) => {
  identifyPath(e, vgpathxy,context);
};
export let identifyPath = (e,path,context) => {
  let vgcolor=context.vgcolor;
  let vgidentity=context.vgidentity;
  let straightcolor=context.straightcolor;
  let line = context.line;
  let data = path.current;
  path.current = {};
  Object.keys(e.targetTouches).map((m) => {
    path.current[`path${e.targetTouches[m].identifier}`] =
      data[`path${e.targetTouches[m].identifier}`];

  });
  if (line.current) {
     Object.keys(data).map((e) => {
       if (path.current[e] === undefined) {
         vgcolor.current.splice(
           vgidentity.current[e.replace("path","")],
           1,
           straightcolor.current[vgidentity.current[e.replace("path","")]]
         );
       }
     }); 
  }

};

