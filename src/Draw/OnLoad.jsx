import { useContext, useEffect } from "react";
import { touchstart } from "./Functions/Function";
import { touchmove } from "./Functions/Function";
import { touchend } from "./Functions/Function";
import { Context } from "./Draw"; 
import {down, mousemove, up} from "./Functions/Mouse"
export let start = (e, context) => {
  let vg = context.vg;
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let vgcolor = context.vgcolor;
  let vgidentity = context.vgidentity;
  let mooveboolean = context.mooveboolean;
  let cwidth = context.cwidth;
  let cheight = context.cheight;
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
    cheight
  );
  setRender((e) => e + 1);
};
export let move = (e, context) => {
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  let vgidentity = context.vgidentity;
  let cwidth = context.cwidth;
  let cheight = context.cheight;
  let vg=context.vg
  e.preventDefault();
  e.stopPropagation();
  touchmove(e, vgpathxy, vgidentity, vgpath, vg, cwidth, cheight);
  setRender((e) => e + 1);
};
export let end = (e, context) => {
  let vgpathxy = context.vgpathxy;
  let setRender = context.setRender;
  e.preventDefault();
  e.stopPropagation();
  touchend(e, vgpathxy);
  setRender((e) => e + 1);
}
 function OnLoad() {
  let context=useContext(Context)
  let vg=context.vg
  useEffect(()=>{
    vg.current.addEventListener("touchstart", (e) => {
      start(e, context);
    });
    vg.current.addEventListener("touchmove", (e) => {
      move(e, context);
    });
    vg.current.addEventListener("touchend", (e) => {
      end(e, context);
    });
    vg.current.addEventListener("mousedown", (e) => {
      down(e, context, vg);
    });
    vg.current.addEventListener("mousemove", (e) => {
      mousemove(e, context, vg);
    });
    vg.current.addEventListener("mouseup", (e) => {
      up(e, context);
    });
  },[])
 }
 export default OnLoad