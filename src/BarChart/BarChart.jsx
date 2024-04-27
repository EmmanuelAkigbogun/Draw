import { createContext, useRef, useState } from "react";
import { hover } from "./Functions/Hover";
import Functions from "./Functions";
import Form from "./Form";
import Svg from "./Svg";
export let Context = createContext();
function BarCharts() {
  let weekly = useRef(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
  let monthly = useRef([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  let yearly = useRef([
    "2015",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ]);
  let datax = useRef([]);
  let data = useRef([100, 204, 205, 420, 500, 680, 106]);
  let difference = useRef(100);
  let lowest = useRef(0);
  let divisor = useRef(4);
  let constantbottom = useRef(0);
  let constantleft = useRef(0);
  let constantright = useRef(0);
  let datayx = useRef({}); //start x of the bars
  let datayy = useRef({}); //start y of the bars
  let datayh = useRef({}); //height of the bars
  let pathpoint = useRef([]);
  let wid = useRef(50);
  let fgap = useRef(0);
  let bgap = useRef(30);
  let gap = useRef(fgap.current + bgap.current);
  let scaley = useRef(5);
  let increment = useRef(25);
  let constantscaley = useRef(2.3);
  let maximumpossible = useRef(100);
  let mark = useRef(increment.current * scaley.current);
  let chartbeginx = useRef(20);
  let xoriginright = useRef(0);
  let xoriginleft = useRef(0);
  let yoriginbottom = useRef(15);
  let yorigintop = useRef(0);
  let begintexty = useRef(0);
  let begintextx = useRef(-10);
  let linexcolor = useRef("rgba(158, 158, 158, 0.8)");
  let lineycolor = useRef("rgba(158, 158, 158, 0.8)");
  let linexwidth = useRef(0.7);
  let lineywidth = useRef(0.7);
  let fontguy = useRef(16);
  let dashy = useRef(5);
  let dashx = useRef(5);
  let x = useRef(0);
  let y = useRef(0);
  let o = useRef(0);
  let triwid = useRef(10);
  let list = useRef([]);
  let maximum = useRef(Math.max(...data.current));
  let minimum = useRef(Math.min(...data.current));
  let maxormin = useRef(0);
  let shadowx = useRef(10);
  let shadowy = useRef(0);
  let precision = useRef(2);
  let chathi = useRef(40);
  let chatwi = useRef(40);
  let canvas = useRef(null);
  let ctx = useRef(canvas?.current?.getContext("2d"));
  let gradient = useRef([]);
  let gradient1 = useRef([]);
  let [render, setRender] = useState([0,0]);
  let [state,setState]=useState("monthly")
  let vgRoundRect  = useRef({});
  let vgtextx = useRef({});
  let vgtexty = useRef({});
  let vglinex = useRef({});
  let vgliney = useRef({});
  let  vgchattri= useRef([0,0,0,0,0,0,0,0]);
  let  vgchatrec= useRef([0,0,0,0,0]);
  let vgchattxt = useRef([0,0,0]);
  let contextData = {
    weekly: weekly,
    monthly: monthly,
    yearly: yearly,
    datax: datax,
    data: data,
    difference: difference,
    lowest: lowest,
    divisor: divisor,
    constantbottom: constantbottom,
    constantleft: constantleft,
    constantright: constantright,
    datayx: datayx, //start x of the bars
    datayy: datayy, //start y of the bars
    datayh: datayh, //height of the bars
    pathpoint: pathpoint,
    wid: wid,
    fgap: fgap,
    bgap: bgap,
    gap: gap,
    scaley: scaley,
    increment: increment,
    constantscaley: constantscaley,
    maximumpossible: maximumpossible,
    mark: mark,
    chartbeginx: chartbeginx,
    xoriginright: xoriginright,
    xoriginleft: xoriginleft,
    yoriginbottom: yoriginbottom,
    yorigintop: yorigintop,
    begintexty: begintexty,
    begintextx: begintextx,
    linexcolor: linexcolor,
    lineycolor: lineycolor,
    linexwidth: linexwidth,
    lineywidth: lineywidth,
    fontguy: fontguy,
    dashy: dashy,
    dashx: dashx,
    x: x,
    y: y,
    o: o,
    triwid: triwid,
    list: list,
    maximum: maximum,
    minimum: minimum,
    maxormin: maxormin,
    shadowx: shadowx,
    shadowy: shadowy,
    precision: precision,
    chathi: chathi,
    chatwi: chatwi,
    canvas: canvas,
    ctx: ctx,
    gradient: gradient,
    gradient1: gradient1,
    state: state,
    setState: setState,
    render: render,
    setRender: setRender,
    vgRoundRect: vgRoundRect,
    vgtextx: vgtextx,
    vgtexty: vgtexty,
    vglinex: vglinex,
    vgliney: vgliney,
    vgchattri: vgchattri,
    vgchatrec: vgchatrec,
    vgchattxt: vgchattxt,
  };
  return (
    <>
      <Context.Provider value={contextData}>
        <Svg />
        <Functions />
        <canvas
          ref={canvas}
          id="c"
          onClick={() => {
            hover("click", "click", contextData);
          }}
          className="canvas"
        ></canvas>
        <Form />
      </Context.Provider>
    </>
  );
}
export default BarCharts;
