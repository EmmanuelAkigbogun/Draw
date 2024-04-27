export let chat = (color, color0, tox, toy, w, text, levitate, context) => {
  let ctx = context.ctx;
  let chathi = context.chathi;
  let chatwi = context.chatwi;
  let fontguy = context.fontguy;
  let x = context.x;
  let y = context.y;
  let vgchattri = context.vgchattri;
  let vgchatrec = context.vgchatrec;
  let vgchattxt = context.vgchattxt;
  let boolw = text < 0 ? -w : w;
  color = "rgb(15,15,15,.8)";
  ctx.current.font = fontguy + "px sans-serif";
  ctx.current.beginPath();
  x.current = tox;
  y.current = toy - (text < 0 ? -levitate : levitate);
  let xy = [x.current, y.current];
  let xybopn = [x.current + boolw, y.current - boolw];
  let xybonp = [x.current - boolw, y.current + boolw];
  let xybon = [x.current - boolw, y.current - boolw];
  let rectArr = [
    x.current - 2 * boolw,
    y.current -
      3 * boolw -
      (text < 0 ? 2 * w : ctx.current.measureText(text).hangingBaseline) -
      (text < 0 ? 0 : 1) * chathi.current,
    (text < 0 ? -1 : 1) * (ctx.current.measureText(text).width + 2 * w) +
      (text < 0 ? -1 : 1) * chatwi.current,
    ctx.current.measureText(text).hangingBaseline + 2 * w + chathi.current,
    3,
  ];
  let txtArr = [
    text,
    x.current -
      (text < 0 ? -w + ctx.current.measureText(text).width : w) +
      ((text < 0 ? -1 : 1) * chatwi.current) / 2,
    y.current -
      (text < 0 ? 0 : -ctx.current.measureText(text).hangingBaseline) +
      (text < 0 ? 1 : -1) *
        (ctx.current.measureText(text).hangingBaseline + 2 * w) -
      ((text < 0 ? -1 : 1) * chathi.current) / 2,
  ];
  //triangle
  ctx.current.moveTo(...xy);
  ctx.current.lineTo(...xybopn);
  ctx.current.lineTo(...xybon);
  ctx.current.lineTo(...xy);
  vgchattri.current=[...xy,...xybopn,...xybon,...xy]
  ctx.current.fillStyle = color;
  ctx.current.strokeStyle = color0;
  // round rect
  ctx.current.roundRect(
   ...rectArr
  );
  vgchatrec.current = [...rectArr];
  ctx.current.fill();
  ctx.current.stroke();
  //text
  ctx.current.beginPath();
  ctx.current.fillStyle = "white";
  ctx.current.fillText(
...txtArr
  );
  vgchattxt.current = [...txtArr];
  ctx.current.fill();
  ctx.current.stroke();
  //remove stroke
  ctx.current.beginPath();
  ctx.current.save();
  ctx.current.lineWidth = "2";
  ctx.current.strokeStyle = color;
  ctx.current.moveTo(
...xybon
  );
  ctx.current.lineTo(
...xybopn
  );
  ctx.current.stroke();
  ctx.current.restore();
  ctx.current.closePath();
};
