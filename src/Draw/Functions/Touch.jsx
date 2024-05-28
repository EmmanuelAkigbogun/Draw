export let start = (e, context,touchstart) => {
  let vg = context.vg;
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let vgcolor = context.vgcolor;
  let vgidentity = context.vgidentity;
  let mooveboolean = context.mooveboolean;
  let cwidth = context.cwidth;
  let cheight = context.cheight;
  let straightcolor=context.straightcolor
    let vx = context.vx;
    let vy = context.vy;
  e.preventDefault();
  e.stopPropagation();
  touchstart(
    e,
    vgpathxy,
    vgidentity,
    vgpath,
    vgcolor,
    mooveboolean,
    vg,
    cwidth,
    cheight,
    straightcolor,vx,vy
  );
  setRender((e) => e + 1);
};
export let move = (e, context,touchmove) => {
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let vgidentity = context.vgidentity;
  let cwidth = context.cwidth;
  let cheight = context.cheight;
  let vg = context.vg;
  let vertical=context.vertical.current;
  let horizontal=context.horizontal.current;
  let line=context.line.current
  let vgcolor=context.vgcolor
  let straightcolor=context.straightcolor
    let vx = context.vx;
    let vy = context.vy;
  e.preventDefault();
  e.stopPropagation();
  touchmove(
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
    straightcolor,vx,vy
  );
  setRender((e) => e + 1);
};
export let end = (e, context,touchend) => {
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
    let vx = context.vx;
    let vy = context.vy;
  e.preventDefault();
  e.stopPropagation();
  touchend(
    e,
    vgpathxy,
    context,vx,vy
  );
  setRender((e) => e + 1);
};
