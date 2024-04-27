export let textxfxindex = (index,context) => {
  let ctx = context.ctx;
  let canvas = context.canvas;
  let datax = context.datax;
  let yoriginbottom = context.yoriginbottom;
  let wid = context.wid;
  let gap = context.gap;
  let fgap = context.fgap;
  let xoriginleft = context.xoriginleft;
  let chartbeginx = context.chartbeginx;
  let constantleft = context.constantleft;
  let constantbottom = context.constantbottom;
  let begintextx = context.begintextx;
  let fontguy = context.fontguy;
  let vgtextx= context.vgtextx
 let tranArray=   [index * (wid.current + gap.current) +
      fgap.current +
      xoriginleft.current +
      constantleft.current +
      chartbeginx.current +
      wid.current / 2,
      canvas.current.height -
      constantbottom.current -
      yoriginbottom.current -
      begintextx.current];
  ctx.current.beginPath();
  ctx.current.save();
  ctx.current.lineWidth = ".2";
  ctx.current.letterSpacing = "1px";
  ctx.current.fillStyle = "rgb(158,158,158)";
  ctx.current.font = fontguy.current + 1 + "px sans-serif";
  ctx.current.translate(
    ...tranArray
  );
  ctx.current.rotate((Math.PI / 180) * 0);
  //text x axiz stroke
  let text = datax.current[index];
  let x= -ctx.current.measureText(datax.current[index]).width / 2
  let y = ctx.current.measureText(datax.current[index]).hangingBaseline / 2;
  let textArray = [
        text,
       x,
       y,
  ];
  ctx.current.strokeText(...textArray);
  ctx.current.stroke();
  //text x axiz fill
  ctx.current.fillText(...textArray);
  ctx.current.fill();
  ctx.current.restore();
  ctx.current.closePath();

  vgtextx.current[`tx${Object.keys(vgtextx.current).length}`] = [
    ...textArray,
    ...tranArray
  ];
};
export let textxfx = (context) => {
      let datax = context.datax;
      let vgtextx = context.vgtextx;
      vgtextx.current=[]
  for (let index = 0; index < datax.current.length; index++) {
    textxfxindex(index,context);
  }
};
