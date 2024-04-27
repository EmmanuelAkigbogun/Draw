export let nthlineyfxindex = (index, linewidthval, color,context) => {
      let ctx = context.ctx;
      let canvas = context.canvas;
      let yoriginbottom = context.yoriginbottom;
      let mark = context.mark;
      let xoriginleft = context.xoriginleft;
      let xoriginright = context.xoriginright;
      let chartbeginx = context.chartbeginx;
      let constantleft = context.constantleft;
      let constantright = context.constantright;
      let constantbottom = context.constantbottom;
      let dashy = context.dashy;
      let vgliney = context.vgliney;
      let MArray = [
        xoriginleft.current + constantleft.current + chartbeginx.current,
        canvas.current.height -
          constantbottom.current -
          index * mark.current -
          yoriginbottom.current,
      ];
      let LArray = [
        canvas.current.width - xoriginright.current - constantright.current,
        canvas.current.height -
          constantbottom.current -
          index * mark.current -
          yoriginbottom.current,
      ];
  ctx.current.strokeStyle = color;
  ctx.current.lineWidth = linewidthval;
  ctx.current.setLineDash([dashy.current]);
  ctx.current.moveTo(
...MArray
  );
  ctx.current.lineTo(
...LArray
  );
  ctx.current.stroke();
         vgliney.current[`ly${Object.keys(vgliney.current).length}`] = [
           ...MArray,
           ...LArray,
           color,
           linewidthval,
         ];
};
export let lineyfx = (context) => {
      let ctx = context.ctx;
      let maximum = context.maximum;
      let minimum = context.minimum;
      let increment = context.increment;
      let lineycolor = context.lineycolor;
      let lineywidth = context.lineywidth;
      let vgliney = context.vgliney;
          vgliney.current=[];
  ctx.current.beginPath();
  //first line +
  nthlineyfxindex(0, lineywidth.current, lineycolor.current, context);
  if (maximum.current > 0) {
    //other lines
    for (
      let index = 1;
      index < parseInt(maximum.current / increment.current) + 2;
      index++
    ) {
        ctx.current.beginPath();
      nthlineyfxindex(
        index,
        lineywidth.current,
        lineycolor.current,
        context
      );
    }
  }
  //-
     ctx.current.beginPath();
  if (minimum.current < 0) {
    //other lines
    for (
      let index = parseInt(minimum.current / increment.current) - 1;
      index < 1;
      index++
    ) {
        ctx.current.beginPath();
      nthlineyfxindex(
        index,
        lineywidth.current,
        lineycolor.current,
        context
      );
    }
  }
  ctx.current.closePath();
};
