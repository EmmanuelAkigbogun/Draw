import { useContext, useRef } from "react";
import { Context } from "./Color";
import { fileinput } from "./Functions/Function";
import UploadImg from "./UploadImg";
function Form() {
  let context = useContext(Context);
  let file=useRef(null)
  let c = context.c;
  let cv=context.cv
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <button
        className="color-display"
        style={{
          background: `${context.renderValue[0]}`,
          color:
            context?.renderValue[0]
              ?.replace("rgb(", "")
              .replace(")", "")
              .split(",")
              .map((e) => +e)
              .reduce((e, i) => e + i) > 350
              ? "black"
              : "white",
        }}
      >
        {context.renderValue[0]}
      </button>
      <button
        className="color-display"
        style={{
          background: `${context.renderValue[1]}`,
          color:
            context?.renderValue[0]
              ?.replace("rgb(", "")
              .replace(")", "")
              .split(",")
              .map((e) => +e)
              .reduce((e, i) => e + i) > 350
              ? "black"
              : "white",
        }}
      >
        {context.renderValue[1]}
      </button>
      <button
        className="color-display"
        onClick={() => {
          file.current.showPicker();
        }}
      >
        Upload
        <UploadImg />
      </button>
      <input
        type="file"
        onInput={(e) => {
          fileinput(e, c, cv);
        }}
        ref={file}
        className="none"
      />
    </form>
  );
}
export default Form;
