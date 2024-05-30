import { useContext, useEffect, useRef } from "react";
import { Context } from "./Draw";
import { keydownfx } from "./Download";
import { up } from "./Functions/Mouse";
import { promptfx } from "./Download";
import { setPathData } from "./Functions/SetPath";
import { getPathData } from "./Functions/GetPath";
import { setRz } from "./Functions/SetRz";
import { vectorPathData } from "./Functions/GetVectorPath";
import { setPathDataV } from "./Functions/SetPathV";
import { AddPath } from "./Functions/AddPath";
import { bendCntrlDragLine, cntrlFromPoint, lineDrag, multiLineFx } from "./Fx";
import { reDefine } from "./Vredefine";
import { MZOnZDrag, syncMZOnZ } from "./mZSync";
function WindowFx() {
  let context = useContext(Context);
  let cwidth = context.cwidth;
  let cheight = context.cheight;
  let setRender = context.setRender;
  let hovercolor = context.hovercolor;
  let canvas = context.canvas;
  let link = context.link;
  let vg = context.vg;
  let edit = context.edit;
  let target = context.target;
  let straightcolor = context.straightcolor;
  let vgcolor = context.vgcolor;
  let vgpath = context.vgpath;
  let vgpathxy = context.vgpathxy;
  let targetObject = context.targetObject;
  let thick = context.thick;
  let bBoxColor = context.bBoxColor;
  let vx = context.vx;
  let vy = context.vy;
  let editdrag = context.editdrag;
  let dragx = context.dragx;
  let dragy = context.dragy;
  let dragd = context.dragd;
  let draga = context.draga;
  let ctx = context.ctx;
  let dragbool = context.dragbool;
  let dragrect = context.dragrect;
  let drag = context.drag;
  let pick = context.pick;
  let highlight = context.highlight;
  let movepen = context.movepen;
  let downconst = context.downconst;
  let alignedline = context.alignedline;
  let pencirclearr = context.pencirclearr;
  let pen = context.pen;
  let gendragorclick = context.gendragorclick;
  let shapes = context.shapes;
  let shapebool = context.shapebool;
  let rbox = context.rbox;
  let circle = context.circle;
  let ellipse = context.ellipse;
  let polyelip = context.polyelip;
  let shapedown = context.shapedown;
  let cursor = context.cursor;
  let eliele = context.eliele;
  let lockdrag = context.lockdrag;
  let rcursor = context.rcursor;
  let vectorindex = context;
  let vectoredit = context.vectoredit;
  let vectorCi = context.vectorCi;
  let vectorCj = context.vectorCj;
  let vectorCp = context.vectorCp;
  let vectorCL = context.vectorCL;
  let vectorGp = context.vectorGp;
  let vectorP = context.vectorP;
  let vDragpointsArr = context.vDragpointsArr;
  let velement = context.velement;
  let vectordrag = context.vectordrag;
  let vectord = context.vectord;
  let vectora = context.vectora;
  let vectorctrmixed = context.vectorctrmixed;
  let vctrline = context.vctrline;
  let vectorBtwP = context.vectorBtwP;
  let centercirclearr = context.centercirclearr;
  let vage = context.vage;
  let bend = context.bend;
  let ashen=context.ashen
  let mouseon=useRef(false)
  useEffect(() => {
    window.onresize = (e) => {
      cwidth.current = window.innerWidth;
      cheight.current = window.innerHeight;
      setRender((r) => r + 1);
    };
    window.onkeydown = (e) => {
      let hovervalue = null;
      if (e.ctrlKey) {
      } else {
        vgpathxy.current = {};
        if (
          e.key === "Delete" &&
          Object.values(targetObject.current).length > 0
        ) {
          if (hovercolor.current === -1) {
          } else {
            hovervalue = Array.from(vg.current.children)[hovercolor.current];
          }
          Object.values(targetObject.current)
            .reverse()
            .map((m) => {
              keydownfx(e, context, m[7]);
            });
          if (hovervalue !== null) {
            hovercolor.current = Array.from(vg.current.children)
              .filter((f) => !f.getAttribute("name")?.includes("art$"))
              .map((m, i) => {
                if (hovervalue === m) {
                  return i;
                }
              })
              .filter((e) => e !== undefined)[0];
            setRender((r) => r + 1);
          } else {
            hovercolor.current = -1;
            setRender((r) => r + 1);
          }
          targetObject.current = {};
        } else {
          // edit draw download
          keydownfx(e, context, "m");
        }
      }
    };
    window.ondblclick = (e) => {
      if (vectoredit.current) {
        vectorindex.current = [];
        vectorCi.current = [];
        vectorCj.current = [];
        vectorCp.current = [];
        vectorCL.current=[];
        vectorGp.current = [];
        vectorP.current = [];
        vectoredit.current = false;
        vctrline.current = [];
        vectorctrmixed.current = [];
        vDragpointsArr.current = [];
        dragd.current = [];
        draga.current = [];
        vectord.current = [];
        vectora.current = [];
        vectordrag.current = false;
        bend.current = false;
        // target.current[0].classList.remove("none");

        if (!e.target.getAttribute("name")?.includes("art$")) {
          target.current = [];
          targetObject.current = {};
          target.current.push(e.target);
          target.current.push(target.current[0].getBBox().x);
          target.current.push(target.current[0].getBBox().y);
          target.current.push(target.current[0].getBBox().width);
          target.current.push(target.current[0].getBBox().height);
          target.current.push(target.current[1] + target.current[3]);
          target.current.push(target.current[2] + target.current[4]);
          target.current.push(hovercolor.current);
          targetObject.current[hovercolor.current] = target.current;
        } else if (e.target.getAttribute("name")?.includes("cloneart$")) {
          let el = target.current[0];
          target.current = [];
          targetObject.current = {};
          target.current.push(el);
          target.current.push(target.current[0].getBBox().x);
          target.current.push(target.current[0].getBBox().y);
          target.current.push(target.current[0].getBBox().width);
          target.current.push(target.current[0].getBBox().height);
          target.current.push(target.current[1] + target.current[3]);
          target.current.push(target.current[2] + target.current[4]);
          target.current.push(hovercolor.current);
          targetObject.current[hovercolor.current] = target.current;
        } else {
        }
      } else {
        if (
          !e.target.getAttribute("name")?.includes("art$") &&
          e.target.localName === "path"
        ) {
        reDefine(context);
        }
      }
      setRender((r) => r + 1);
    };
    window.onpointerdown = (e) => {
      let dataX =
        (e.clientX - vg.current.getBoundingClientRect().x) *
          (cwidth.current / vg.current.clientWidth) +
        vx.current;
      let dataY =
        (e.clientY - vg.current.getBoundingClientRect().y) *
          (cheight.current / vg.current.clientHeight) +
        vy.current;

      if (vectoredit.current) {
        if (e.target.getAttribute("name")?.includes("cloneart$")) {
          vDragpointsArr.current = [];
          vDragpointsArr.current = e.target
            .getAttribute("data-value")
            .split(" ")
            .map((e) => +e);
          vectorctrmixed.current = [];
          vctrline.current = [];
               let ndx = e.target
                 .getAttribute("data-value")
                 .split(" ")
                 .map((e) => +e)
                 .slice(0, 2);
              let pointx = e.target
                                .getAttribute("data-value")
                                .split(" ")
                                .map((e) => +e);

          if (vDragpointsArr.current.length > 4 ) {
            if (bend.current) {
                 vDragpointsArr.current = [];
               vectorctrmixed.current = [];
               vctrline.current = [];
               bendCntrlDragLine(context,ndx);

                             vectordrag.current=true
            }
            else{
               let dataq = syncMZOnZ(context, pointx);
               lineDrag(context, pointx, 0, 1, 6, 7); 
               if (dataq!==undefined) {
                   MZOnZDrag(context, dataq[0], dataq[0] + 1);   
               }  
                
      
            }
          }else{
            if (bend.current) {
              vDragpointsArr.current = [];
              vage.current = e.target
                .getAttribute("data-value")
                .split(" ")
                .map((e) => +e)
                .slice(0, 2);
              
                vage.current.push(
                e.target.getPointAtLength((2 * e.target.getTotalLength()) / 5).x
              );
              vage.current.push(
                e.target.getPointAtLength((2 * e.target.getTotalLength()) / 5).y
              );
              vage.current.push(
                e.target.getPointAtLength(
                  e.target.getTotalLength() -
                    (2 * e.target.getTotalLength()) / 5
                ).x
              );
              vage.current.push(
                e.target.getPointAtLength(
                  e.target.getTotalLength() -
                    (2 * e.target.getTotalLength()) / 5
                ).y
              );
              //vDragpointsArr.current=vage.current.slice(2);
                  dragd.current=[]
                  draga.current = [];
                  getPathData(context);
                  vectorPathData(context);
                  AddPath(context);
                  reDefine(context)
                bendCntrlDragLine(context, ndx);
            }
            else{

                let dataq=  syncMZOnZ(context, pointx); 
                console.log(dataq);
                lineDrag(context,pointx,0,1,2,3)
                if (dataq !== undefined) {
                      MZOnZDrag(context, dataq[0], dataq[0] + 1);
                } 
            }
  
         
          }
          dragd.current = [];
          draga.current = [];
          getPathData(context);
          vectorPathData(context);
          dragx.current = dataX;
          dragy.current = dataY;
          vectordrag.current = true;
          setRender((r) => r + 1);
        } else if (
          e.target.getAttribute("name")?.includes("centercircleart$")
        ) {
          dragd.current = [];
          draga.current = [];
          getPathData(context);
          vectorPathData(context);
          AddPath(context);
          reDefine(context)
          setRender((r) => r + 1);
        } else if (
          !e.target.getAttribute("name")?.includes("art$") &&
          e.target.localName == "path"
        ) {
          if (e.target === target.current) {
          } else {
          }
        } else {
          if (
            e.target.getAttribute("name")?.includes("vcirart$") ||
            e.target.getAttribute("name")?.includes("vlineart$")
          ) {
            if (e.target.getAttribute("name")?.includes("vcirart$")) {

              e.target.setAttribute("fill", "blue");
              e.target.setAttribute("stroke", "white");
              let cntrl12= cntrlFromPoint(context, +e.target.getAttribute("data-value")); 
              let indexData = vectorGp.current.indexOf(
                   +e.target.getAttribute("data-value")
                 );
              let pointbfr = vectorGp.current[indexData-2];
               let pointaft = vectorGp.current[indexData+2];
               let pointcenter = +e.target.getAttribute("data-value");
        
               let cntrl34= cntrlFromPoint(context, pointbfr); 
               let cntrl56 = cntrlFromPoint(context, pointaft); 
              vDragpointsArr.current = [
                pointcenter,
                pointcenter + 1,
                ...cntrl12//,...cntrl34,...cntrl56
              ];
                 vectorctrmixed.current = [];
                 vctrline.current = [];
                 vectorctrmixed.current.push(...cntrl12,...cntrl34,...cntrl56) 
              console.log(cntrl12,cntrl34,cntrl56);
              multiLineFx(context,cntrl12,pointcenter)
               multiLineFx(context, cntrl34,pointbfr);
                multiLineFx(context, cntrl56,pointaft);
                 //////////////////////////////m and z sync////////////////////////////////////////////
                   if (
                     vectora.current[0][
                       pointcenter + 2
                     ] == "Z"
                   ) {
                    if (
                      vectord.current[0][+e.target.getAttribute("data-mz")] ==
                        vectord.current[0][
                          pointcenter
                        ] &&
                      vectord.current[0][+e.target.getAttribute("data-mz")+1] ==
                        vectord.current[0][pointcenter+1]
                    ) {
                     //only i for M CURVE
                     let pointmz = +e.target.getAttribute("data-mz");
                     let cntrlz = cntrlFromPoint(context, pointmz); 
                      vDragpointsArr.current.push(
                        pointmz
                      );
                      vDragpointsArr.current.push(
                        pointmz+1
                      );
                           
                        vDragpointsArr.current.push(
                               ...cntrlz
                             );
                          //length required          
                          vectorctrmixed.current.push(...cntrlz);
                        multiLineFx(context, cntrlz, pointmz);
                    
                    }
                  
                   }
              ///////////////////////////////////////////////////////////////////////////////////////
           
  
            }
            if (e.target.getAttribute("name")?.includes("vlineart$")) {
              console.log("vli");
              vctrline.current = [];
              vectorctrmixed.current = [];
              e.target.setAttribute("fill", "purple");
              e.target.setAttribute("stroke", "white");
              vDragpointsArr.current = [
                +e.target.getAttribute("data-value"),
                +e.target.getAttribute("data-value") + 1,
              ];
            }
            if (velement?.current[0] !== e.target) {
              velement?.current[0]?.setAttribute("fill", "white");
              velement?.current[0]?.setAttribute("stroke", "white");
            }
            if (velement?.current[1] !== e.target) {
              velement?.current[1]?.setAttribute("fill", "white");
              velement?.current[1]?.setAttribute("stroke", ashen.current);
            }
            velement.current[0] = e.target;
            dragd.current = [];
            draga.current = [];
            getPathData(context);

            dragx.current = dataX;
            dragy.current = dataY;
            vectordrag.current = true;
          }
          if (e.target.getAttribute("name")?.includes("vctrart$")) {
            vDragpointsArr.current = [
              +e.target.getAttribute("data-value"),
              +e.target.getAttribute("data-value") + 1,
            ];
            e.target.setAttribute("fill", ashen.current);
            e.target.setAttribute("stroke", "white");
            if (velement?.current[1] !== e.target) {
              velement?.current[1]?.setAttribute("fill", "white");
              velement?.current[1]?.setAttribute("stroke", ashen.current);
            }
            if (velement?.current[0] !== e.target) {
              velement?.current[0]?.setAttribute("fill", "white");
              velement?.current[0]?.setAttribute("stroke", "white");
            }
            velement.current[1] = e.target;
            dragd.current = [];
            draga.current = [];
            getPathData(context);
            dragx.current = dataX;
            dragy.current = dataY;
            vectordrag.current = true;
          }
         else if (e.target.localName =="svg") {
                vctrline.current = [];
                vectorctrmixed.current = [];
                vDragpointsArr.current=[]
                velement?.current[0]?.setAttribute("fill", "white");
                velement?.current[0]?.setAttribute("stroke", "white");
         }
        }
        setRender((r) => r + 1);
      } else {
        if (!edit.current && shapes.current) {
          pick.current = [];
          drag.current = false;
          highlight.current = false;
          pick.current.push(dataX, dataY);
          shapebool.current = true;
          shapedown.current = true;
          setRender((r) => r + 1);
        }
        if (edit.current && hovercolor.current >= 0) {
          if (!e.target.getAttribute("name")?.includes("art$")) {
            target.current = [];
            dragd.current = [];
            draga.current = [];
            gendragorclick.current = false;
            let ObjectData = targetObject.current;
            dragbool.current = false;
            if (!e.ctrlKey) {
              targetObject.current = {};
              dragd.current = [];
              draga.current = [];
            }

            target.current.push(
              Array.from(vg.current.children).filter(
                (e) => !e.getAttribute("name")?.includes("art$")
              )[hovercolor.current]
            );
            target.current.push(target.current[0].getBBox().x);
            target.current.push(target.current[0].getBBox().y);
            target.current.push(target.current[0].getBBox().width);
            target.current.push(target.current[0].getBBox().height);
            target.current.push(target.current[1] + target.current[3]);
            target.current.push(target.current[2] + target.current[4]);
            target.current.push(hovercolor.current);
            target.current[0].setAttribute(
              "stroke",
              vgcolor.current[hovercolor.current]
            );
            ///*
            Object.values(ObjectData).filter((e) => e[0] === target.current[0])
              .length
              ? e.ctrlKey
                ? delete targetObject.current[hovercolor.current] //in obj del on cntrl
                : (gendragorclick.current = true) //in obj new or drag
              : (targetObject.current[hovercolor.current] = target.current); //not in obj
            //*/
            if (gendragorclick.current) {
              targetObject.current = ObjectData;
              targetObject.current[hovercolor.current] = target.current;
            }
            // targetObject.current[hovercolor.current] = target.current;
            if (
              dataX >= dragrect.current[0] &&
              dataX <= dragrect.current[1] &&
              dataY >= dragrect.current[2] &&
              dataY <= dragrect.current[3]
            ) {
              drag.current = true;
            } else {
              drag.current = false;
            }
            setRender((r) => r + 1);
          }
        } else {
          if (edit.current) {
            if (
              e.target.getAttribute("name") === "rectcirart$" ||
              e.target.getAttribute("name") === "rectart$"
            ) {
              dragd.current = [];
              draga.current = [];
              dragx.current = dataX;
              dragy.current = dataY;
              lockdrag.current = true;
              getPathData(context);
            } else {
              if (
                dataX >= dragrect.current[0] &&
                dataX <= dragrect.current[1] &&
                dataY >= dragrect.current[2] &&
                dataY <= dragrect.current[3]
              ) {
                drag.current = true;
                highlight.current = false;
              } else {
                pick.current = [];
                drag.current = false;
                highlight.current = true;
                pick.current.push(dataX, dataY);
              }
              if (!e.ctrlKey) {
                dragbool.current = true;
                dragd.current = [];
                draga.current = [];
              } else {
                dragbool.current = true;
              }
            }
          }
        }
        if (
          Object.keys(targetObject.current).length > 0 &&
          edit.current &&
          !lockdrag.current
        ) {
          dragx.current = dataX;
          dragy.current = dataY;
          getPathData(context);
          editdrag.current = true;
        }
      }
    };
    window.onpointermove = (e) => {
      let x =
        (e.clientX - vg.current.getBoundingClientRect().x) *
          (cwidth.current / vg.current.clientWidth) +
        vx.current;
      let y =
        (e.clientY - vg.current.getBoundingClientRect().y) *
          (cheight.current / vg.current.clientHeight) +
        vy.current;
      if (polyelip.current[0] && !vectoredit.current) {
        polyelip.current[2] = `${"0"} ${"0"} ${"0"} ${"0"}`;
      }
      if (vectoredit.current) {
        if (vectordrag.current) {
          setPathDataV(context, x, y);
          vectord.current = [];
          vectora.current = [];
          vectorPathData(context);
          setRender((r) => r + 1);
        }
      } else {
        if (lockdrag.current) {
          dragbool.current = false;
          cursor.current = rcursor.current;
          let x1 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][1]
          );
          x1 = Math.min(...x1);
          let x2 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][5]
          );
          x2 = Math.max(...x2);
          let y1 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][2]
          );
          y1 = Math.min(...y1);
          let y2 = Object.keys(targetObject.current).map(
            (e) => targetObject.current[e][6]
          );
          y2 = Math.max(...y2);

          pick.current[0] = x1;
          pick.current[1] = y1;
          pick.current[2] = x2;
          pick.current[3] = y2;
          //w1,w2,h1,h2

          if (
            rcursor.current == "se-resize" &&
            x2 - x1 !== 0 &&
            y2 - y1 !== 0
          ) {
            setRz(
              context,
              x1,
              y1,
              x2 - x1, //w1
              x - pick.current[0], //w2
              y2 - y1, //h1
              y - pick.current[1] //h2
            );
          } else if (
            rcursor.current == "sw-resize" &&
            x1 - x2 !== 0 &&
            y2 - y1 !== 0
          ) {
            setRz(
              context,
              x2,
              y1,
              x1 - x2,
              x - pick.current[2],
              y2 - y1,
              y - pick.current[1]
            );
          } else if (
            rcursor.current == "nw-resize" &&
            x1 - x2 !== 0 &&
            y1 - y2 !== 0
          ) {
            setRz(
              context,
              x2,
              y2,
              x1 - x2,
              x - pick.current[2],
              y1 - y2,
              y - pick.current[3]
            );
          } else if (
            rcursor.current == "ne-resize" &&
            x2 - x1 !== 0 &&
            y1 - y2 !== 0
          ) {
            setRz(
              context,
              x1,
              y2,
              x2 - x1,
              x - pick.current[0],
              y1 - y2,
              y - pick.current[3]
            );
          } else if (rcursor.current == "n-resize" && y1 - y2 !== 0) {
            setRz(context, 1, y2, 1, 1, y1 - y2, y - pick.current[3]);
          } else if (rcursor.current == "s-resize" && y2 - y1 !== 0) {
            setRz(context, 1, y1, 1, 1, y2 - y1, y - pick.current[1]);
          } else if (rcursor.current == "e-resize" && x2 - x1 !== 0) {
            setRz(context, x1, 1, x2 - x1, x - pick.current[0], 1, 1);
          } else if (rcursor.current == "w-resize" && x1 - x2 !== 0) {
            setRz(context, x2, 1, x1 - x2, x - pick.current[2], 1, 1);
          } else {
            setPathData(context, x, y);
          }
        }

        let valw = x;
        let valh = y;
        let valx = pick.current[0];
        let valy = pick.current[1];

        if (
          (shapes.current && !edit.current && shapebool.current) ||
          lockdrag.current
        ) {
          let indexvalue = 0;
          if (shapedown.current) {
            indexvalue = vgpath.current.length;
            shapedown.current = false;
            vgcolor.current.push(`white`);
            straightcolor.current.push(`white`);
          } else {
            indexvalue = vgpath.current.length - 1;
          }
          pick.current.splice(2, 1, valx);
          pick.current.splice(3, 1, valy);
          pick.current.splice(4, 1, valw);
          pick.current.splice(5, 1, valh);
          valw = Math.abs(x - pick.current[0]);
          valh = Math.abs(y - pick.current[1]);
          valx =
            pick.current[0] +
            (x - pick.current[0] < 0 ? x - pick.current[0] : 0);
          valy =
            pick.current[1] +
            (y - pick.current[1] < 0 ? y - pick.current[1] : 0);
          pick.current.splice(6, 1, `${valx + valw / 2}`);
          pick.current.splice(7, 1, `${valy + valh / 2}`);
          pick.current.splice(8, 1, `${valw / 2}`);
          pick.current.splice(9, 1, `${valh / 2}`);
          if (ellipse.current) {
            vgpath.current.splice(
              indexvalue,
              1,
              `ELLIPSE:${valx + valw / 2} ${valy + valh / 2} ${valw / 2} ${
                valh / 2
              }`
            );
            /*
                   `M${pick.current[0] + (x - pick.current[0]) / 2} ${
                pick.current[1]
              }C${x + (x - pick.current[0]) / 6} ${pick.current[1]} ${x} ${
                pick.current[1] - (y - pick.current[1]) / 6
              } ${x} ${pick.current[1] + (y - pick.current[1]) / 2}C${x} ${
                y + (y - pick.current[1]) / 6
              } ${x + (x - pick.current[0]) / 6} ${y} ${
                pick.current[0] + (x - pick.current[0]) / 2
              } ${y}C${pick.current[0] - (x - pick.current[0]) / 6} ${y} ${
                pick.current[0]
              } ${y + (y - pick.current[1]) / 6} ${pick.current[0]} ${
                pick.current[1] + (y - pick.current[1]) / 2
              }C${pick.current[0]} ${
                pick.current[1] - (y - pick.current[1]) / 6
              } ${pick.current[0] - (x - pick.current[0]) / 6} ${
                pick.current[1]
              } ${pick.current[0] + (x - pick.current[0]) / 2} ${
                pick.current[1]
              }Z`
            */
            /*
                 `M${pick.current[0] + (x - pick.current[0]) / 2} ${
                pick.current[1]
              }C${x + (x - pick.current[0]) / 6} ${pick.current[1]} ${
                x + (x - pick.current[0]) / 6
              } ${y} ${pick.current[0] + (x - pick.current[0]) / 2} ${y}C${
                pick.current[0] - (x - pick.current[0]) / 6
              } ${y} ${pick.current[0] - (x - pick.current[0]) / 6} ${
                pick.current[1]
              } ${pick.current[0] + (x - pick.current[0]) / 2} ${
                pick.current[1]
              }Z`
           */
            /*
               `M${pick.current[0] + (x - pick.current[0]) / 2} ${
                pick.current[1]
              }C${x} ${pick.current[1]} ${x} ${
                pick.current[1]
              } ${x} ${pick.current[1] + (y - pick.current[1]) / 2}C${x} ${
                y 
              } ${x } ${y} ${
                pick.current[0] + (x - pick.current[0]) / 2
              } ${y}C${pick.current[0] } ${y} ${
                pick.current[0]
              } ${y } ${pick.current[0]} ${
                pick.current[1] + (y - pick.current[1]) / 2
              }C${pick.current[0]} ${
                pick.current[1] 
              } ${pick.current[0]} ${
                pick.current[1]
              } ${pick.current[0] + (x - pick.current[0]) / 2} ${
                pick.current[1]
              }Z` */
          } else if (circle.current) {
            vgpath.current.splice(
              indexvalue,
              1,
              `CIRCLE:${valx + valw / 2} ${valy + valh / 2} ${valh / 2}`
            );
          } else if (polyelip.current[0]) {
            let polynumber = 0;
            let polyguy = ``;
            let increment =
              eliele.current.current.getTotalLength() /
              Number(polyelip.current[1]);
            for (let index = 0; index < polyelip.current[1] ; index++) {
              if (index === 0) {
                try {
                  polyguy += `M${
                    eliele.current.current.getPointAtLength(polynumber).x
                  } ${eliele.current.current.getPointAtLength(polynumber).y}`;
                } catch (e) {}
              } else {
                try {
                  polyguy += `L${
                    eliele.current.current.getPointAtLength(polynumber).x
                  } ${eliele.current.current.getPointAtLength(polynumber).y}`;
                } catch (e) {}
              }
              polynumber += increment;
            }

            vgpath.current.splice(indexvalue, 1, polyguy+"Z");
          } else if (rbox.current) {
            vgpath.current.splice(
              indexvalue,
              1,
              `M${pick.current[0]} ${pick.current[1]}L${x} ${pick.current[1]}L${x} ${y}L${pick.current[0]} ${y}Z`
            );
          }
          setRender((r) => r + 1);
        }
        if (edit.current) {
          gendragorclick.current = false;
          if (
            drag.current &&
            !highlight.current &&
            editdrag.current &&
            Object.keys(targetObject.current).length > 0
          ) {
            dragbool.current = false;
            cursor.current = `grabbing`;
            setPathData(context, x, y);
            editdrag.current = true;
            setRender((r) => r + 1);
          } else {
            if (highlight.current) {
              dragbool.current = false;
              pick.current.splice(2, 1, valx);
              pick.current.splice(3, 1, valy);
              pick.current.splice(4, 1, valw);
              pick.current.splice(5, 1, valh);
              valx = pick.current[2];
              valy = pick.current[3];
              if (!e.ctrlKey) {
                targetObject.current = {};
              }
              Array.from(vg.current.children)
                .filter((f) => !f.getAttribute("name")?.includes("art$"))
                .map((p, i) => {
                  target.current = [];
                  let vx = pick.current[0];
                  let vy = pick.current[1];
                  let x1 = p.getBBox().x;
                  let y1 = p.getBBox().y;
                  let x2 = x1 + p.getBBox().width;
                  let y2 = y1 + p.getBBox().height;
                  /*
                console.log(
                  x ,x1 , x2 ,
                y , y1,  y2,
                p
                );

                 (x >= x1 && x <= x2 && y >= y1 && y <= y2) ||
                    (valx >= x1 && valx <= x2 && valy >= y1 && valy <= y2)
                */
                  if (
                    (x1 >= valx && x1 <= x && y1 >= valy && y1 <= y) ||
                    (x2 >= valx && x2 <= x && y2 >= valy && y2 <= y) ||
                    (x1 >= valx && x1 <= x && y2 >= valy && y2 <= y) ||
                    (x2 >= valx && x2 <= x && y1 >= valy && y1 <= y) ||
                    (x1 <= valx && x1 >= x && y1 <= valy && y1 >= y) ||
                    (x2 <= valx && x2 >= x && y2 <= valy && y2 >= y) ||
                    (x1 <= valx && x1 >= x && y2 <= valy && y2 >= y) ||
                    (x2 <= valx && x2 >= x && y1 <= valy && y1 >= y) ||
                    (x >= x1 && x <= x2 && y >= y1 && y <= y2) ||
                    (x >= x1 && x <= x2 && valy >= y1 && valy <= y2) ||
                    (valx >= x1 && valx <= x2 && y >= y1 && y <= y2) ||
                    (valx >= x1 && valx <= x2 && valy >= y1 && valy <= y2) ||
                    (x <= x1 && x >= x2 && y <= y1 && y >= y2) ||
                    (x <= x1 && x >= x2 && valy <= y1 && valy >= y2) ||
                    (valx <= x1 && valx >= x2 && y <= y1 && y >= y2) ||
                    (valx <= x1 && valx >= x2 && valy <= y1 && valy >= y2) ||
                    p == e.target
                  ) {
                    target.current.push(p);
                    target.current.push(p.getBBox().x);
                    target.current.push(p.getBBox().y);
                    target.current.push(p.getBBox().width);
                    target.current.push(p.getBBox().height);
                    target.current.push(target.current[1] + target.current[3]);
                    target.current.push(target.current[2] + target.current[4]);
                    target.current.push(i);
                    targetObject.current[i] = target.current;
                  }
                });
              setRender((r) => r + 1);
            }
          }
        }
      }
    };
    window.onpointerup = (e) => {
      let dataX =
        (e.clientX - vg.current.getBoundingClientRect().x) *
          (cwidth.current / vg.current.clientWidth) +
        vx.current;
      let dataY =
        (e.clientY - vg.current.getBoundingClientRect().y) *
          (cheight.current / vg.current.clientHeight) +
        vy.current;

      if (vectoredit.current) {
        vectordrag.current = false;
        vectord.current = [];
        vectora.current = [];
        dragd.current = [];
        draga.current = [];
        getPathData(context);
        vectorPathData(context);
      } else {
        drag.current = false;
        pick.current = [0, 0, 0, 0];
        highlight.current = false;
        if (edit.current) {
          if (gendragorclick.current) {
            targetObject.current = {};
            targetObject.current[hovercolor.current] = target.current;
          }
          if (editdrag.current || lockdrag.current) {
            if (editdrag.current) {
              editdrag.current = false;
            }
            if (lockdrag.current) {
              lockdrag.current = false;
            }
            if (
              e.target.getAttribute("cursor")?.includes("cursor") &&
              e.target.getAttribute("cursor")?.includes("art$")
            ) {
              cursor.current = rcursor.current;
            } else {
              cursor.current = ``;
            }

            Object.keys(targetObject.current).map((e) => {
              targetObject.current[e][1] =
                targetObject.current[e][0].getBBox().x;
              targetObject.current[e][2] =
                targetObject.current[e][0].getBBox().y;
              targetObject.current[e][3] =
                targetObject.current[e][0].getBBox().width;
              targetObject.current[e][4] =
                targetObject.current[e][0].getBBox().height;
              targetObject.current[e][5] =
                targetObject.current[e][1] + targetObject.current[e][3];
              targetObject.current[e][6] =
                targetObject.current[e][2] + targetObject.current[e][4];
            });
            if (dragbool.current) {
              targetObject.current = {};
            }
          }
          setRender((r) => r + 1);
        }
        if (shapes.current) {
          if (shapedown.current) {
            if (circle.current) {
              vgpath.current.push(`CIRCLE:${dataX} ${dataY} ${50}`);
              vgcolor.current.push(`white`);
              straightcolor.current.push(`white`);
            } else if (ellipse.current) {
              vgpath.current.push(`ELLIPSE:${dataX} ${dataY} ${100} ${50}`);
              vgcolor.current.push(`white`);
              straightcolor.current.push(`white`);
            } else if (rbox.current) {
              vgpath.current.push(
                `M${dataX} ${dataY} ${dataX + 100} ${dataY} ${dataX + 100} ${
                  dataY + 100
                } ${dataX} ${dataY+100}Z`
              );
              vgcolor.current.push(`white`);
              straightcolor.current.push(`white`);
            }
            shapedown.current = false;
          }
          shapebool.current = false;
          setRender((r) => r + 1);
        }
      }
    };
    window.onpointerover = (e) => {
      if (
        !e.target.getAttribute("name")?.includes("art$") &&
        e.target.localName != "html"
      ) {
        hovercolor.current = Array.from(vg.current.children)
          .filter((e) => !e.getAttribute("name")?.includes("art$"))
          .indexOf(e.target);
        edit.current && e.target.setAttribute("stroke", bBoxColor.current);
        if (
          Array.from(e.target.attributes)
            .map((m) => m.name)
            .filter((f) => f === "fill")[0] === "fill"
        ) {
        } else {
          edit.current && e.target.classList.add("fill");
        }
        edit.current &&
          e.target.setAttribute("stroke-width", thick.current + 1);
      }
      if (e.target.getAttribute("name")?.includes("cloneart$")) {
        e.target.setAttribute("stroke", `#007fff`);
        e.target.setAttribute("stroke-width", thick.current + 3);
        if (
          e.target
            .getAttribute("data-value")
            .split(" ")
            .map((e) => +e).length == 4 &&
          !vectordrag.current&&!bend.current
        ) {
          centercirclearr.current = [
            e.target.getPointAtLength(e.target.getTotalLength() / 2).x,
            e.target.getPointAtLength(e.target.getTotalLength() / 2).y,
          ];
          vage.current = e.target
            .getAttribute("data-value")
            .split(" ")
            .map((e) => +e)
            .slice(0, 2);
          vage.current.push(
            e.target.getPointAtLength(e.target.getTotalLength() / 2).x
          );
          vage.current.push(
            e.target.getPointAtLength(e.target.getTotalLength() / 2).y
          );
        }
        setRender((r) => r + 1);
      }
        if (e.target.getAttribute("name")?.includes("centercircleart$")) {
         mouseon.current=true
    
        }
        else{
                mouseon.current = false;
                  
        }
    };
    window.onwheel = (e) => {
      let x =
        (e.clientX - vg.current.getBoundingClientRect().x) *
          (cwidth.current / vg.current.clientWidth) +
        vx.current;
      let y =
        (e.clientY - vg.current.getBoundingClientRect().y) *
          (cheight.current / vg.current.clientHeight) +
        vy.current;
      if (pen.current) {
        vgpath.current.splice(
          vgpath.current.length - 1,
          1,
          downconst.current + `L${x} ${y}`
        );
        movepen.current = `${x} ${y}`;
      }
      if (
        pen.current &&
        pencirclearr.current
          .map((m) => {
            if (m.includes(`${x}`) || m.includes(`${y}`)) {
              alignedline.current.push(`${x} ${y} ${m}`);
              return m.includes(`${x}`) || m.includes(`${y}`);
            }
          })
          .filter((f) => f == true)[0]
      ) {
      } else {
        alignedline.current = [];
        vgcolor.current.splice(
          vgcolor.current.length - 1,
          1,
          straightcolor.current[vgcolor.current.length - 1]
        );
      }

      vx.current = vx.current + e.deltaX;
      vy.current = vy.current + e.deltaY;
      setRender((r) => r + 1);
    };

    window.onpointerout = (e) => {
      if (
        !e.target.getAttribute("name")?.includes("art$") &&
        e.target.localName != "html"
      ) {
        //&& e.target !== target.current[0]
        edit.current &&
          e.target.setAttribute("stroke", vgcolor.current[hovercolor.current]);
        if (
          Array.from(e.target.attributes)
            .map((m) => m.name)
            .filter((f) => f === "fill")[0] === "fill"
        ) {
        } else {
          e.target.classList.remove("fill");
        }
        edit.current && e.target.setAttribute("stroke-width", thick.current);
        hovercolor.current = -1;
      }
      if (e.target.getAttribute("name")?.includes("cloneart$")&&!mouseon.current) {
        e.target.setAttribute("stroke-width", thick.current+1);
        e.target.setAttribute(
          "stroke",
          vgcolor.current[Object.keys(targetObject.current)[0]]
        );
        centercirclearr.current = [];
        setRender((r) => r + 1);
      }
    };
    //https://www.reddit.com/r/bestsquirt/comments/1880sn2/sexy_ebony_baddie_queen_tahshaar_makes_a_big_wet/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
  }, []);

  return <></>;
}
export default WindowFx;
