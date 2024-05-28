import { useContext, useEffect, useRef } from "react";
import { Context } from "./Draw";
function Button() {
  let context = useContext(Context);
  let but = context.but;
  let b = useRef(null);
  useEffect(() => {
    but.current = b.current;
  }, []);
  return (
    <>
      <button ref={b} onClick={()=>{
        alert("i am a button")
      }}>lover</button>
    </>
  );
}
export default Button;
