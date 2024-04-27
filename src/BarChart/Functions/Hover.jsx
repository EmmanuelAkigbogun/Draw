import { barChart } from "./Charts";
import { shadow } from "./Component";
import { star } from "./Component";
import { chat } from "./Chat";
import { chatwithin } from "./Within";
import { shadowoff } from "./Component";
import { textxfxindex } from "./Textx";
export let tryhover = (context) => {
  let state = context.state;
  let datayx = context.datayx;
  let datax = context.datax;
  let datayy = context.datayy;
  let wid = context.wid;
  state == "weekly"
    ? hover(
        Object.values(datayx.current)[new Date().getDay()] + wid.current / 2,
        Object.values(datayy.current)[new Date().getDay()],
        context
      )
    : state == "monthly"
    ? hover(
        Object.values(datayx.current)[new Date().getMonth()] + wid.current / 2,
        Object.values(datayy.current)[new Date().getMonth()],
        context
      )
    : state == "yearly"
    ? hover(
        Object.values(datayx.current)[
          datax.current.indexOf(new Date().getFullYear())
        ] +
          wid.current / 2,
        Object.values(datayy.current)[
          datax.current.indexOf(new Date().getFullYear())
        ],
        context
      )
    : "";
};
export let hover = (ex, ey, context) => {
  let ctx = context.ctx;
  let canvas = context.canvas;
  let data = context.data;
  let datayx = context.datayx;
  let datayy = context.datayy;
  let datayh = context.datayh;
  let yorigintop = context.yorigintop;
  let yoriginbottom = context.yoriginbottom;
  let gradient1 = context.gradient1;
  let wid = context.wid;
  let triwid = context.triwid;
  let pathpoint = context.pathpoint;
  let render = context.render;
  let setRender = context.setRender;
  let vgRoundRect = context.vgRoundRect;
  let vgtextx = context.vgtextx;
  let vgtexty = context.vgtexty;
  let vgchattri = context.vgchattri;
  let vgchatrec = context.vgchatrec;
  let vgchattxt = context.vgchattxt;
  vgRoundRect.current = {};
  vgtextx.current = {};
  vgtexty.current = {};
  vgchattri.current = [0,0,0,0,0,0,0,0];
  vgchatrec.current = [0,0,0,0,0];
  vgchattxt.current = [0,0,0]; 
  let boolguy = false;
  let r = {
    offsetX: ex,
    offsetY: ey,
  };
  //check if event, for event ex=0 boolguy ==true
  if (r.offsetX == "click" && r.offsetY == "click") {
    r = window.event;
    boolguy = true;
  }
  if (r.offsetX == "touch" && r.offsetY == "touch") {
    let ev = window.event.targetTouches[0];
    r = {
      offsetX: ev.clientX - canvas.current.getBoundingClientRect().x,
      offsetY: ev.clientY - canvas.current.getBoundingClientRect().y,
    };
    boolguy = true;
  }
  barChart(
    r.offsetX *
      (boolguy ? canvas.current.width / canvas.current.offsetWidth : 1),
    r.offsetY *
      (boolguy ? canvas.current.height / canvas.current.offsetHeight : 1),
    context
  );

  Object.keys(datayx.current).map((e, i) => {
    if (
      datayx.current[e] == pathpoint.current[0] &&
      datayy.current[e] == pathpoint.current[1]
    ) {
      //make chat within
      if (chatwithin(e, context) < 0) {
        data.current[e] < 0
          ? (yoriginbottom.current =
              yoriginbottom.current + Math.ceil(-chatwithin(e, context)))
          : (yorigintop.current =
              yorigintop.current + Math.ceil(-chatwithin(e, context)));
        barChart(true, true, context);
      }
      // hover bar
      ctx.current.beginPath();
      shadow(context);

      //gradient.current

      gradient1.current = ctx.current.createLinearGradient(
        datayx.current[e],
        datayy.current[e],
        datayx.current[e] + wid.current,
        datayy.current[e] + datayh.current[e]
      );

      //gradient1.current.addColorStop(0,"rgb(80,24,17)")
      let grad1 = "rgba(52, 202, 165,0)";
      let grad2 = "rgba(52, 202, 165)";
      gradient1.current.addColorStop(1, grad1);
      gradient1.current.addColorStop(0, grad2);
      ctx.current.fillStyle = gradient1.current;
      //bar
      let rectArray = [
        datayx.current[e],
        datayy.current[e],
        wid.current,
        datayh.current[e],
      ];
      let round = [20, 20, 0, 0];
      ctx.current.moveTo(datayx.current[e], datayy.current[e]);
      ctx.current.clearRect(
        ...rectArray
      );
      ctx.current.roundRect(
       ...rectArray,round
      
      );
      vgRoundRect.current[`rr${i}`] = [
        ...rectArray,
        ...round,
        rectArray[3] < 0
          ? `linear-gradient(to top ,${grad2} 0%,  ${grad1} 100%)`
          : `linear-gradient(to bottom ,${grad2} 0%, ${grad1} 100%)`,
      ];  
      ctx.current.fill();
      //chat
      chat(
        gradient1.current,
        "white",
        datayx.current[e] + wid.current / 2,
        datayy.current[e],
        triwid.current,
        data.current[e],
        10,
        context
      );
      //star
      1 == 2 &&
        star(
          "rgba(52, 202, 165)",
          "white",
          datayx.current[e] + wid.current,
          datayy.current[e],
          70,
          data.current[e],
          context
        );
      //redraw hidden trext
      shadowoff(context);
      textxfxindex(e, context);
    }
  });
  pathpoint.current = [];
  setRender((render = [canvas.current.width, canvas.current.height]));
  //console.log(ex, ey, r.offsetX, r.offsetY);
};
