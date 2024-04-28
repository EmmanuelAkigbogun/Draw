export let mousemove = (e, context, ref) => {
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let cwidth=context.cwidth
  let cheight=context.cheight
  let mooveboolean = context.mooveboolean;
  if (mooveboolean.current) {
    let x =
      (e.clientX - ref.current.getBoundingClientRect().x) *
      (cwidth.current / ref.current.clientWidth);
    let y =
      (e.clientY - ref.current.getBoundingClientRect().y) *
      (cheight.current / ref.current.clientHeight);
    if (vgpathxy.current[`pathmouse`] !== undefined) {
      vgpathxy.current[`pathmouse`].push(`${x} ${y}`);
      vgpath.current.splice(
        vgpath.current.length - 1,
        1,
        vgpath.current[vgpath.current.length - 1] + ` ${x} ${y}`
      );
    }
  }
  setRender((r) => r + 1);
};
export let down = (e, context, ref) => {
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let vgcolor = context.vgcolor;
    let cwidth = context.cwidth;
    let cheight = context.cheight;
  let mooveboolean = context.mooveboolean;
  console.log("down");
  let x =
    (e.clientX - ref.current.getBoundingClientRect().x) *
    (cwidth.current / ref.current.clientWidth);
  let y =
    (e.clientY - ref.current.getBoundingClientRect().y) *
    (cheight.current / ref.current.clientHeight);
  if (vgpathxy.current[`pathmouse`] === undefined) {
    vgpathxy.current[`pathmouse`] = [`M${x} ${y} ${x} ${y}`];
    vgpath.current.push(`M${x} ${y} ${x} ${y}`);
    vgcolor.current.push(`white`);
  }
  mooveboolean.current = true;
  setRender((r) => r + 1);
};
export let up = (e, context) => {
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let mooveboolean = context.mooveboolean;
  console.log("up");
  setRender((r) => r + 1);
  vgpathxy.current = {};
  mooveboolean.current = false;
};
