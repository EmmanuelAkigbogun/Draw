export let nthlinexfxnegative = (index, linewidthval, color,  maxmin, context) => {
  let ctx = context.ctx;
  let canvas = context.canvas;
  let yoriginbottom = context.yoriginbottom;
  let wid = context.wid;
  let increment = context.increment;
  let mark = context.mark;
  let gap = context.gap;
  let xoriginleft = context.xoriginleft;
  let chartbeginx = context.chartbeginx;
  let constantleft = context.constantleft;
  let constantbottom = context.constantbottom;
  let vglinex = context.vglinex;
  let LArray = [
    index * (wid.current + gap.current) +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      0 * mark.current -
      yoriginbottom.current
  ];
  let MArray = [
    index * (wid.current + gap.current) +
      constantleft.current +
      xoriginleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      (parseInt(maxmin.current / increment.current) - 1) * mark.current -
      yoriginbottom.current
  ];
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.moveTo(
...MArray
  );
  ctx.current.lineTo(
...LArray
  );
  ctx.current.stroke();
    vglinex.current[`lx${Object.keys(vglinex.current).length}`] = [
      ...MArray,
      ...LArray,
      color,
      linewidthval,
    ];
};

export let nthlinexfxpositive = (
  index,
  linewidthval,
  color,
  maxmin,
  context
) => {
  let ctx = context.ctx;
  let canvas = context.canvas;
  let yoriginbottom = context.yoriginbottom;
  let wid = context.wid;
  let increment = context.increment;
  let mark = context.mark;
  let gap = context.gap;
  let xoriginleft = context.xoriginleft;
  let chartbeginx = context.chartbeginx;
  let constantleft = context.constantleft;
  let constantbottom = context.constantbottom;
  let vglinex = context.vglinex;
  let LArray = [
    index * (wid.current + gap.current) +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      (parseInt(maxmin.current / increment.current) + 1) * mark.current -
      yoriginbottom.current,
  ];
  
  let MArray = [
    index * (wid.current + gap.current) +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current,
    canvas.current.height -
      constantbottom.current -
      0 * mark.current -
      yoriginbottom.current,
  ];
  
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.moveTo(...MArray);
  ctx.current.lineTo(...LArray);
  ctx.current.stroke();
  vglinex.current[`lx${Object.keys(vglinex.current).length}`] = [
    ...MArray,
    ...LArray,
    color,
    linewidthval,
  ];
};
// canvas.current.height - constantbottom.current - 0 * mark.current - yoriginbottom.current
export let linexfx = (context) => {
  let ctx = context.ctx;
  let maximum = context.maximum;
  let minimum = context.minimum;
  let data = context.data;
  let dashx = context.dashx;
  let linexcolor = context.linexcolor;
  let linexwidth = context.linexwidth;
  let vglinex = context.vglinex;
  vglinex.current = [];
  //let vgliney = context.vgliney;
  ctx.current.beginPath();
  ctx.current.setLineDash([dashx.current]);
  if (maximum.current > 0) {
    //first line +
    nthlinexfxpositive(
      0,
      linexwidth.current,
      linexcolor.current,
      maximum,
      context
    );
    //other lines
    for (let index = 1; index < data.current.length + 1; index++) {
      ctx.current.beginPath();
      ctx.current.setLineDash([dashx.current]);
      nthlinexfxpositive(
        index,
        linexwidth.current,
        linexcolor.current,
        maximum,
        context
      );
    }
  }
  //-
  if (minimum.current < 0) {
    ctx.current.beginPath();
    ctx.current.setLineDash([dashx.current]);
    //first line -
    nthlinexfxnegative(
      0,
      linexwidth.current,
      linexcolor.current,
      minimum,
      context
    );
    //other lines
    for (let index = 1; index < data.current.length + 1; index++) {
      ctx.current.beginPath();
      ctx.current.setLineDash([dashx.current]);
      nthlinexfxnegative(
        index,
        linexwidth.current,
        linexcolor.current,
        minimum,
        context
      );
    }
  }
  ctx.current.closePath();
};
