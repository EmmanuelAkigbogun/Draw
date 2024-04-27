import { createContext, useRef, useState } from "react";
import Form from "./Form";
import OnLoad from "./OnLoad";
export let Context = createContext();
function Draw() {
  let thick = useRef(window.outerWidth / 300000);
  let [render, setRender] = useState(0);
  let vgpathxy = useRef({});
  let vgcolor = useRef([]);
  let vg=useRef(null)
  let canvas = useRef(null);
  let link = useRef(null);
  let vgpath = useRef([]);
  let vgidentity = useRef({});
  let cwidth = useRef(window.outerWidth/100);
  let cheight = useRef(window.outerHeight/100);
  let mooveboolean = useRef(false);
  let contextData = {
    render: render,
    setRender: setRender,
    vgpathxy: vgpathxy,
    thick: thick,
    vg:vg,
    vgpath: vgpath,
    vgidentity: vgidentity,
    vgcolor: vgcolor,
    cwidth: cwidth,
    link:link,
    cheight: cheight,
    mooveboolean: mooveboolean,
  };
window.onkeydown=((e)=>{
  console.log(e)
  console.log(e.key);
   if (e.key === "D" || e.key === "d") {
     link.current.href =
       "data:image/svg+xml;base64," + btoa(vg.current.outerHTML);
     link.current.download = "draw";
     link.current.click();
   }
   if (e.key === "p" || e.key === "P" || e.key === "j" || e.key === "J") {
     let ctx = canvas.current.getContext("2d");
     let img = new Image();
     img.src = "data:image/svg+xml;base64," + btoa(vg.current.outerHTML);
     img.onload = () => {
       //document.body.appendChild(img)
       ctx.drawImage(img, 0, 0);
       link.current.href =
         e.key === "j" || e.key === "J"
           ? canvas.current.toDataURL("image/jpeg", 1)
           : canvas.current.toDataURL("image/png",1);
       link.current.download = "draw";
       link.current.click();
     };
     img.remove();
   }
})
  return (
    <>
      <Context.Provider value={contextData}>
        <Form />
        <OnLoad/>
      </Context.Provider>
      <svg
        viewBox={`0 0 ${cwidth.current} ${cheight.current}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        ref={vg}
        id="vg"
      >
        {
          vgpath.current.map((e, i) => {
            return (
              <path
                key={`val${i}`}
                d={e}
                stroke={vgcolor.current[i]}
                strokeWidth={thick.current}
                strokeLinecap="round"
                strokeDasharray={0}
              />
            );
          })
        }
      </svg>
      <a href="" ref={link}></a>
      <canvas ref={canvas} className="none" width={7000} height={7000}></canvas>
    </>
  );
}
export default Draw;
