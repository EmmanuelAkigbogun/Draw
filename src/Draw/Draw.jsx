import { createContext, useRef, useState } from "react";
import Form from "./Form";
import OnLoad from "./OnLoad";
import Svg from "./Svg";
import Rect from "./Rect";
import PenHoverCircle from "./PenHoverCircle";
import AlignedLine from "./AlignedLine";
import Canvas from "./Canvas";
import WindowFx from "./WindowFx";
import RectP from "./RectP";
import PenClickCircle from "./PenClickCircle";
import VCirclesP from "./VCirclesP";
import VLinesP from "./VLinesp";
import Vcontrols from "./Vcontrols";
import VCntrlLine from "./VCntrlLine";
import VectorClone from "./VectorClone";
import CenterCircle from "./CenterCircle";
export let Context = createContext();
function Draw() {
  let thick = useRef(1);
  let [render, setRender] = useState(0);
  let vgpathxy = useRef({});
  let vgcolor = useRef([
    //`yellow`
    //`red`, `white`, `purple`, `yellow`, `bisque`,`orange`
    
  ]);
  let straightcolor = useRef([
    //`yellow`
  //  `red`,`white`,`purple`,`yellow`,`bisque`,`orange`
  ]);
  let vgpath = useRef([
    
    //`M42.50100200400806 163.125040743785C70.50100200400806 183.125040743785 69.50100200400806 183.125040743785 87.50100200400806 212.125040743785C108 227 138 189 162.50100200400806 179.125040743785L173.50100200400806 147.125040743785L214.50100200400806 157.125040743785L187.50100200400806 207.125040743785C209.50100200400806 261.125040743785 161.50100200400806 290.125040743785 125.50100200400806 253.125040743785C106.50100200400806 268.125040743785 104.50100200400806 269.125040743785 91.50100200400806 273.125040743785C64.50100200400806 271.125040743785 64.50100200400806 271.125040743785 42.50100200400806 263.125040743785L23.501002004008058 307.125040743785L-20.498997995991942 305.125040743785C5.501002004008058 255.125040743785 -112 238 -45.49899799599194 166.125040743785C-6 152 -5 153 42.50100200400806 163.125040743785Z`,
    //`M656.2800729927008 234.06676673865095C466.2800729927008 259.0667667386509 723.2800729927008 319.066766738651 614.2800729927008 332.066766738651ZM659 640C620 650 448 589 533 518C513 611 422.2800729927008 369.0667667386509 339.2800729927008 496.0667667386509C419.2800729927008 606.0667667386509 387 208 473 230C537 367 684 591 702 281Z`,
    // `M234 465L467 698L234 465Z`
    //`M317.01 0.01C127.01 25.01 384.01 85.01 275.01 98.01ZM267.01 350.01 235.01 263.01C161.01 331.01 83.01 135.01 0.01 262.01C80.01 372.01 151.01 101.01 237.01 123.01Z`,
    /*
    `M195 279C259 312 270 329 250 365C206 396 183 396 139 365C131 318 143 301 195 279Z`,
  
    `M100 50C100 63 95 76 86 85C77 94 64 100 51 100C38 100 25 95 16 86C6 77 1 65 0 52C0 39 4 26 13 17C22 7 34 1 47 0C60 -1 73 4 83 12C93 21 99 33 100 50Z`,
        `M926 199C736 224 993 284 884 297ZM876 549 844 462ZC770 530 692 334 609 461C689 571 760 300 846 322Z`,
    `M565 323C360 262 638 178 488 276`,
    `M307 239 245 270C327 344 112 286 165 338C210 371 31 361 107 37`,
    `M428 324C292 382 290 202 430 264`,
    `M163 391C43 315 197 413 42 513C0 396 112 500 97 551C164 475 321 577 328 502C349 517 360 524 382 538`,
    `M273 550L260 670L297 699L368 743L492 682Z`,
    */
  ]);
  let vg = useRef(null);
  let ctx = useRef(null);
  let link = useRef(null);
  let vgidentity = useRef({});
  let cwidth = useRef(window.innerWidth);
  let cheight = useRef(window.innerHeight);
  let vx = useRef(0);
  let vy = useRef(0);
  let mooveboolean = useRef(false);
  let focusbool = useRef([]);
  let hovercolor = useRef(-1);
  let target = useRef([0, 0, 0, 0, 0, 0, 0, 0]);
  let targetObject = useRef({});
  let edit = useRef(true);
  let horizontal = useRef(false);
  let vertical = useRef(false);
  let line = useRef(false);
  let pen = useRef(false);
  let pencircle = useRef(0);
  let circlerad = useRef([`.4%`, `.2%`,`.1`,`.6%`]);
  let lineeditwidth = useRef(`.3%`);
  let pencirclearr = useRef([]);
  let movepen = useRef(``);
  let downconst = useRef(``);
  let editdrag = useRef(false);
  let dragx = useRef(0);
  let dragy = useRef(0);
  let dragd = useRef([]);
  let draga = useRef([]);
  let dragbool = useRef(false);
  let dragrect = useRef([]);
  let dragrectr = useRef([]);
  let drag = useRef(false);
  let bBoxColor = useRef("#434343");
  let ashen = useRef("#848484");
  let alignedline = useRef([]);
  let pick = useRef([]);
  let pickclone = useRef([]);
  let highlight = useRef(false);
  let gendragorclick = useRef(false);
  let shapes = useRef(false);
  let rbox = useRef(false);
  let circle = useRef(false);
  let ellipse = useRef(false);
  let polyelip = useRef([]);
  let shapebool = useRef(false);
  let shapedown = useRef(false);
  let cursor = useRef(``);
  let eliele = useRef(null);
  let duplicate = useRef(false);
  let lockdrag = useRef(null);
  let rcursor = useRef(``);
  let vpoly = useRef(true);
  let vectoredit = useRef(false);
  let vectorindex = useRef([]);
  let vectorCi=useRef([]);
  let vectorCj=useRef([]);
  let vectorCp=useRef([]);
  let vectorCL = useRef([]);
  let vectorGp = useRef([]);
  let vectorBtwP = useRef([]);
  let vectorP = useRef([]);
  let vDragpointsArr = useRef([]);
  let velement = useRef([null,null]);
  let vectordrag=useRef(false);
  let vectord = useRef([]);
  let vectora = useRef([]);
  let vectorctrmixed = useRef([]);
  let vctrline = useRef([]);
  let centercirclearr=useRef([]);
  let vage = useRef([]);
  let bend = useRef(false);
  let vmz = useRef([]);
  let rotatedown = useRef(false);
  let anglevalue=useRef([]);
  let rotatewheel = useRef(false);
  let rotatetype = useRef(``);
  let rotatepoint = useRef([]);
  let contextData = {
    render: render,
    edit: edit,
    setRender: setRender,
    vgpathxy: vgpathxy,
    thick: thick,
    vg: vg,
    bBoxColor: bBoxColor,
    ashen: ashen,
    ctx: ctx,
    link: link,
    vgpath: vgpath,
    vgidentity: vgidentity,
    vgcolor: vgcolor,
    cwidth: cwidth,
    cheight: cheight,
    mooveboolean: mooveboolean,
    focusbool: focusbool,
    hovercolor: hovercolor,
    straightcolor: straightcolor,
    target: target,
    targetObject: targetObject,
    horizontal: horizontal,
    vertical: vertical,
    line: line,
    pen: pen,
    pencircle: pencircle,
    circlerad: circlerad,
    lineeditwidth: lineeditwidth,
    pencirclearr: pencirclearr,
    movepen: movepen,
    downconst: downconst,
    vx: vx,
    vy: vy,
    editdrag: editdrag,
    dragx: dragx,
    dragy: dragy,
    dragd: dragd,
    draga: draga,
    dragbool: dragbool,
    dragrect: dragrect,
    dragrectr: dragrectr,
    drag: drag,
    alignedline: alignedline,
    pick: pick,
    highlight: highlight,
    gendragorclick: gendragorclick,
    shapes: shapes,
    rbox: rbox,
    circle: circle,
    ellipse: ellipse,
    polyelip: polyelip,
    shapebool: shapebool,
    cursor: cursor,
    shapedown: shapedown,
    eliele: eliele,
    duplicate: duplicate,
    lockdrag: lockdrag,
    rcursor: rcursor,
    vpoly: vpoly,
    vectoredit: vectoredit,
    vectorindex: vectorindex,
    vectorCi: vectorCi,
    vectorCj: vectorCj,
    vectorCp: vectorCp,
    vectorCL: vectorCL,
    vectorBtwP: vectorBtwP,
    vectorP: vectorP,
    vectorGp: vectorGp,
    vDragpointsArr: vDragpointsArr,
    velement: velement,
    vectordrag: vectordrag,
    vectord: vectord,
    vectora: vectora,
    vectorctrmixed: vectorctrmixed,
    vctrline: vctrline,
    centercirclearr: centercirclearr,
    vage: vage,
    bend: bend,
    vmz: vmz,
    rotatedown: rotatedown,
    anglevalue: anglevalue,
    rotatewheel: rotatewheel,
    rotatetype: rotatetype,
    rotatepoint: rotatepoint,
  };
  return (
    <>
      <Context.Provider value={contextData}>
        <Form />
        <OnLoad />
        <WindowFx />
        <svg
          viewBox={`${vx.current} ${vy.current} ${cwidth.current} ${cheight.current}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          ref={vg}
          id="vg"
          name="svgart$"
          cursor={cursor.current}
        >
          <>
            {vgpath.current.map((e, i) => {
              return e.includes("M") && !e.includes("POLYGON:") ? (
                <path
                  key={`val${i}`}
                  d={e}
                  stroke={vgcolor.current[i]}
                  strokeWidth={thick.current}
                  strokeLinecap="round"
                  strokeDasharray={0}
                  fillRule="nonzero"
                />
              ) : e.includes("CIRCLE") ? (
                <circle
                  key={`cir${i}`}
                  r={e.replace("CIRCLE:", "").split(" ")[2]}
                  cx={e.replace("CIRCLE:", "").split(" ")[0]}
                  cy={e.replace("CIRCLE:", "").split(" ")[1]}
                  fill="#00000000"
                  stroke={vgcolor.current[i]}
                  strokeWidth={thick.current}
                />
              ) : e.includes("ELLIPSE:") ? (
                <ellipse
                  key={`eli${i}`}
                  rx={e.replace("ELLIPSE:", "").split(" ")[2]}
                  ry={e.replace("ELLIPSE:", "").split(" ")[3]}
                  cx={e.replace("ELLIPSE:", "").split(" ")[0]}
                  cy={e.replace("ELLIPSE:", "").split(" ")[1]}
                  fill="#00000000"
                  stroke={vgcolor.current[i]}
                  strokeWidth={thick.current}
                />
              ) : e.includes("RECT:") ? (
                <rect
                  key={`rec${i}`}
                  width={e.replace("RECT:", "").split(" ")[2]}
                  height={e.replace("RECT:", "").split(" ")[3]}
                  x={e.replace("RECT:", "").split(" ")[0]}
                  y={e.replace("RECT:", "").split(" ")[1]}
                  fill="#00000000"
                  stroke={vgcolor.current[i]}
                  strokeWidth={thick.current}
                />
              ) : e.includes("POLYGON:") ? (
                <path
                  key={`pol${i}`}
                  d={e}
                  stroke={vgcolor.current[i]}
                  strokeWidth={thick.current}
                  strokeLinecap="round"
                  strokeDasharray={0}
                  fill="#00000000"
                />
              ) : (
                ""
              );
            })}
          </>
          {<VectorClone />}
          {<CenterCircle />}
          {<VCntrlLine />}
          {<AlignedLine />}
          {<VCirclesP />}
          {<VLinesP />}
          {<Vcontrols />}
          {<Rect />}
          {<PenHoverCircle />}
          {<PenClickCircle />}
          {<RectP />}
        </svg>
        <a href="" ref={link}></a>
        <Canvas />
      </Context.Provider>
    </>
  );
}
export default Draw;
