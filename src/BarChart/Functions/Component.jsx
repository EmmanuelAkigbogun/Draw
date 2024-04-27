export let shadow = (context) => {
  let shadowx = context.shadowx;
  let shadowy = context.shadowy;
  let ctx = context.ctx;
  //shadow
  ctx.current.shadowBlur = 11;
  ctx.current.shadowColor = "rgba(35, 35, 35, .5)";
  ctx.current.shadowOffsetX = shadowx.current;
  ctx.current.shadowOffsetY = shadowy.current;
};
export let shadowoff = (context) => {
  let ctx = context.ctx;
  //shadow
  ctx.current.shadowBlur = 0;
  ctx.current.shadowColor = "rgba(35, 35, 35, .5)";
  ctx.current.shadowOffsetX = 0;
  ctx.current.shadowOffsetY = 0;
};
export let forward = (h, context) => {
  let ctx = context.ctx;
  let x = context.x;
  let y = context.y;
  let o = context.o;
  let x1 = x.current + h * Math.cos((Math.PI / 180) * o.current);
  let y1 = y.current + h * Math.sin((Math.PI / 180) * o.current);
  ctx.current.lineTo(x1, y1);
  ctx.current.stroke();
  x.current = x1;
  y.current = y1;
};
export let right = (p, context) => {
  let o = context.o;
  o.current += p;
};
export   let star = ( color, color0, tox, toy, w, text, context) => {
    let ctx = context.ctx;
    let fontguy = context.fontguy;
    let x = context.x;
    let y = context.y;
  ctx.current.beginPath();
  ctx.current.font = fontguy.current + "px sans-serif";
  x.current = tox;
  y.current = toy;
  for (let index = 0; index < 5; index++) {
  forward(w, context);
  right(144, context);
  }
  ctx.current.fillStyle = color;
  ctx.current.strokeStyle = color0;
  ctx.current.fill();
  ctx.current.stroke();
  //text
  ctx.current.beginPath();
  ctx.current.fillStyle = "white";
  ctx.current.fillText(
    text,
    tox + w / 2 - ctx.current.measureText(text).width / 2,
    toy +
      ctx.current.measureText(text).hangingBaseline +
      ctx.current.measureText(text).hangingBaseline/2
  );
  ctx.current.fill();
};
export let circle = (x, y, r,fill,stroke, context) => {
  let ctx = context.ctx;
  ctx.beginPath()
  ctx.current.arc(x, y, 10, 0, Math.PI * 2);
  ctx.closePath()
};

