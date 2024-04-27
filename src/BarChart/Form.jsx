import { useContext } from "react";
import { Context } from "./BarChart";
function Form() {
    let context=useContext(Context)
    let setState = context.setState;
    let state = context.state;
    return (
      <form onSubmit={(e)=>{
        e.preventDefault()
        e.stopPropagation()
        console.log(e);

      }}>
        <select
          name=""
          id=""
          onInput={(e) => {
            setState(state = e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="monthly">monthly</option>
          <option value="weekly">weekly</option>
          <option value="yearly">yearly</option>
        </select>
      </form>
    );
}
export default Form