import { createContext, useRef, useState } from "react";
import OnLoad from "./OnLoad";
import Form from "./Form";
export let Context = createContext();
function Color() {
  let c = useRef(null);
  let cv = useRef(c?.current?.getContext("2d"));
  let gradient=useRef("")
  let [renderValue,setrenderValue]=useState([])
  let contextData = {
    c: c,
    cv: cv,
    gradient: gradient,
    renderValue: renderValue,
    setrenderValue: setrenderValue,
  };
  return (
    <>
      <Context.Provider value={contextData}>
        <OnLoad />
        <Form />
      </Context.Provider>
      <canvas
        ref={c}
        id="c"
        width="300"
        height="300"
      ></canvas>
    </>
  );
}
export default Color;
