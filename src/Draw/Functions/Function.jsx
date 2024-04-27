export let touchstart = (
  e,
  vgpathxy,
  vgidentity,
  vgpath,
  vgcolor,
  mooveboolean,
  vg,
  cwidth,
  cheight
) => {
  mooveboolean.current = false;
  for (let index = 0; index < e.targetTouches.length; index++) {
    const element = e.targetTouches[index];
    const x =
      (element.clientX - vg.current.getBoundingClientRect().x) *
      (cwidth.current / vg.current.clientWidth);
    const y =
      (element.clientY - e.target.getBoundingClientRect().y) *
      (cheight.current / vg.current.clientHeight);
    if (vgpathxy.current[`path${element.identifier}`] === undefined) {
      vgpathxy.current[`path${element.identifier}`] = [`M${x} ${y} ${x} ${y}`];
      vgpath.current.push(`M${x} ${y} ${x} ${y}`);
      vgcolor.current.push(
        `rgb(${Math.random() * 255},${Math.random() * 255},${
          Math.random() * 255
        })`
      );
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
  cheight
) => {
  for (let index = 0; index < e.targetTouches.length; index++) {
    const element = e.targetTouches[index];
    const x =
      (element.clientX - vg.current.getBoundingClientRect().x) *
      (cwidth.current / vg.current.clientWidth);
    const y =
      (element.clientY - vg.current.getBoundingClientRect().y) *
      (cheight.current / vg.current.clientHeight);
    if (vgpathxy.current[`path${element.identifier}`] !== undefined) {
      vgpathxy.current[`path${element.identifier}`].push(`${x} ${y}`);
      vgpath.current.splice(
        vgidentity.current[`${element.identifier}`],
        1,
        vgpath.current[vgidentity.current[`${element.identifier}`]] +
          ` ${x} ${y}`
      );
    }  
  }
};
export let touchend = (
  e,
  vgpathxy,
) => {
  console.log("end");
  identifyPath(e, vgpathxy);
};
export let identifyPath = (e, path) => {
  let data = path.current;
  path.current = {};
  Object.keys(e.targetTouches).map((m) => {
    path.current[`path${e.targetTouches[m].identifier}`] =
      data[`path${e.targetTouches[m].identifier}`];
  });
};
