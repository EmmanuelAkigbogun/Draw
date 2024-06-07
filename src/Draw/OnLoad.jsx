import { useContext, useEffect, useRef } from "react";
import { touchmove, touchend, touchstart } from "./Functions/Function";
import { start, move, end } from "./Functions/Touch";
import { Context } from "./Draw"; 
import {down, mousemove, up} from "./Functions/Mouse"
import {keydownfx} from "./Download"
import { promptfx } from "./Download";
import { Wheel } from "./Wheel";
 function OnLoad() {
  let context=useContext(Context)
  let vg=context.vg
  let edit=context.edit
  let focusbool=context.focusbool
  let vgpath = context.vgpath;
  let vgcolor = context.vgcolor;
  let canvas = context.canvas;
  let link = context.link;
  let setRender=context.setRender;
  let target=context.target
  let targetObject=context.targetObject
  let count=useRef(0)
  let countm = useRef(0);
  context["countm"]=countm
  let vectoredit = context.vectoredit;
      let shapes = context.shapes;
  useEffect(()=>{
    vg.current.addEventListener("wheel",(e)=>{
          //    e.preventDefault();
          //    e.stopPropagation();
     //Wheel(context,e);
    })
    vg.current.addEventListener("touchstart", (e) => {
      focusbool.current[0] = true;
      focusbool.current[1] = e.timeStamp;
      !vectoredit.current&&!shapes.current && !edit.current && start(e, context, touchstart);
    });
    vg.current.addEventListener("touchmove", (e) => {
      if (count.current>=1) {
            focusbool.current[1] = 0;
            focusbool.current[0] = false; 
      }
      count.current = count.current+1;
      !vectoredit.current &&
        !shapes.current &&
        !edit.current &&
        move(e, context, touchmove);
    });
    vg.current.addEventListener("touchend", (e) => {
      if (
          focusbool.current[0] === true &&
          e.timeStamp - focusbool.current[1] > 1000
        ) 
      {
          vgcolor.current.pop();
          vgpath.current.pop();
          keydownfx(
            promptfx(),
            context,
            target
          );
          targetObject.current = {};
          focusbool.current[1] = 0;
          focusbool.current[0] = false;
      }
      count.current = 0;
      !vectoredit.current &&
        !shapes.current &&
        !edit.current &&
        end(e, context, touchend);
    });
        vg.current.addEventListener("touchcancel", (e) => {
          if (
            focusbool.current[0] === true &&
            e.timeStamp - focusbool.current[1] > 1000
          ) {
            vgcolor.current.pop();
            vgpath.current.pop();
            keydownfx(promptfx(), context, target);
            targetObject.current = {};
            focusbool.current[1] = 0;
            focusbool.current[0] = false;
          }
          count.current = 0;
           !vectoredit.current &&
             !shapes.current &&
             !edit.current &&
             end(e, context, touchend);
        });
    vg.current.addEventListener("mousedown", (e) => {
      !vectoredit.current &&
        !shapes.current &&
        !edit.current &&
        down(e, context, vg);
    });
    vg.current.addEventListener("mousemove", (e) => {
       !vectoredit.current &&
         !shapes.current &&
         !edit.current &&
         mousemove(e, context, vg);
    });
    vg.current.addEventListener("mouseup", (e) => {
       !vectoredit.current &&
         !shapes.current &&
         !edit.current &&
         up(e, context);
    });
  },[])
 }
 export default OnLoad