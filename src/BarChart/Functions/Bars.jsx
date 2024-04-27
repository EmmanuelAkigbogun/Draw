import {shadow} from "./Component"
export let bars = (xax, yax,context) => {
    let ctx = context.ctx;
    let canvas = context.canvas;
    let data = context.data;
    let datayx = context.datayx;
    let datayy = context.datayy;
    let datayh = context.datayh;
    let yoriginbottom = context.yoriginbottom;
    let gradient = context.gradient;
    let wid = context.wid;
    let scaley = context.scaley;
    let gap = context.gap;
    let fgap = context.fgap;
    let xoriginleft = context.xoriginleft;
    let chartbeginx = context.chartbeginx;
    let constantleft = context.constantleft;
    let constantbottom = context.constantbottom;
    let pathpoint = context.pathpoint;
    let vgRoundRect = context.vgRoundRect; 
  ctx.current.lineWidth = "1";
  data.current.map((e, i) => {
    //shadow
    shadow(context);
    // bars gradient.current
    ctx.current.beginPath();
    let x =
      i * (gap.current + wid.current) +
      fgap.current +
      chartbeginx.current +
      xoriginleft.current +
      constantleft.current;
    let y= canvas.current.height -
        constantbottom.current -
        (e * scaley.current + yoriginbottom.current);
    let widthval = wid.current;
    let heightval = e * scaley.current;
    let rectArray = [x, y, widthval, heightval];
    let round=[20,20,0,0]
    let grad = "rgba(52, 202, 165,.1)";
    gradient.current = ctx.current.createLinearGradient(
        x,y,x +widthval,y+heightval
    );
    //gradient.current.addColorStop(0,"rgb(23,74,97)")
    gradient.current.addColorStop(1, grad);
    ctx.current.fillStyle = gradient.current;
    //bars
    ctx.current.clearRect(
     ...rectArray
    );
    ctx.current.roundRect(
      ...rectArray,
      [...round]
    );
    //click check
    if (ctx.current.isPointInPath(xax, yax)) {
      pathpoint.current = [datayx.current[i], datayy.current[i]];
    }
    ctx.current.fill();
    //store bar data
    datayx.current[i] =x;
    datayy.current[i] =y;
    datayh.current[i] = heightval;
    vgRoundRect.current[`rr${i}`] = [
       ...rectArray,...round,grad
    ];  
  });
};
