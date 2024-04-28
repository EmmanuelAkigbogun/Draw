import { createContext, useRef, useState } from "react";
import Form from "./Form";
import OnLoad from "./OnLoad";
import Svg from "./Svg";
export let Context = createContext();
function Draw() {
  let thick = useRef((window.innerHeight+window.innerHeight)/2000);
  let [render, setRender] = useState(0);
  let vgpathxy = useRef({});
  let vgcolor = useRef([]);
  let vg=useRef(null)
  let canvas = useRef(null);
  let link = useRef(null);
  let vgpath = useRef([]);
  let vgidentity = useRef({});
  let cwidth = useRef(window.innerWidth);
  let cheight = useRef(window.innerHeight);
  let mooveboolean = useRef(false);
  let contextData = {
    render: render,
    setRender: setRender,
    vgpathxy: vgpathxy,
    thick: thick,
    vg:vg,
    canvas:canvas,
    link:link,
    vgpath: vgpath,
    vgidentity: vgidentity,
    vgcolor: vgcolor,
    cwidth: cwidth,
    link:link,
    cheight: cheight,
    mooveboolean: mooveboolean,
  };
  return (
    <>
      <Context.Provider value={contextData}>
        <Form />
        <OnLoad />
        <svg
          viewBox={`0 0 ${cwidth.current} ${cheight.current}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          ref={vg}
          id="vg"
        >
          <Svg  />
          {vgpath.current.map((e, i) => {
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
          })}
        </svg>
        <a href="" ref={link}></a>
        <canvas
          ref={canvas}
          className="none"
          width={7000}
          height={7000}
        ></canvas>
      </Context.Provider>
    </>
  );
}
export default Draw;
