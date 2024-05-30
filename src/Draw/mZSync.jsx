import { cntrlFromPoint } from "./Fx";
import { multiLineFx } from "./Fx";
export let syncMZOnZ = (context, pointx) => {
  let vg = context.vg;
  let vectord = context.vectord;
  let mzvalArr = [];
  Array.from(vg.current.children).map((m) => {
    mzvalArr.push(m.getAttribute("data-qz"));
  });
  //get mz from qz
  mzvalArr = mzvalArr
    .filter((e) => e !== null && e !== "")
    .join(" ")
    .split(" ")
    .map((e) => +e)
    .map((e) => e);
  //console.log(mzvalArr, pointx);
  // initial and final equality check
  let equalArr = [];
  mzvalArr
    .map((e, i) => {
      if (i % 2 == 0) {
        if (
          vectord.current[0][mzvalArr[i]] ===
            vectord.current[0][mzvalArr[i + 1]] &&
          vectord.current[0][mzvalArr[i] + 1] ===
            vectord.current[0][mzvalArr[i + 1] + 1]
        ) {
          equalArr.push(mzvalArr[i]);
          equalArr.push(mzvalArr[i + 1]);
        }
      }
    })
    .filter((e) => e !== undefined);
  // check if m or z in line
  let passedArray = [];
  let failedArray = [];
 // console.log(equalArr, "equal");
  if (equalArr.length !== 0) {
    passedArray = equalArr
      .map((e, i) => {
        if (pointx.includes(e)) {
          return i;
        }
      })
      .filter((e) => e !== undefined);
  }
  /*
  console.log(
    passedArray,
    "passed worked",
    passedArray.length !== 0,
    failedArray
  );
  */
  if (passedArray.length !== 0) {
    if (passedArray[0] % 2 == 0) {
      // console.log([equalArr[passedArray[0]], equalArr[passedArray[0] + 1]]);
      return [equalArr[passedArray[0] + 1]];
    } else {
      //console.log([equalArr[passedArray[0]], equalArr[passedArray[0] - 1]]);
      return [equalArr[passedArray[0] - 1]];
    }
  }
};
export let MZOnZDrag = (context, a, b) => {
  let vDragpointsArr = context.vDragpointsArr;
  let vectorctrmixed = context.vectorctrmixed;
  let ctrlz1 = cntrlFromPoint(context, a);
  vDragpointsArr.current.push(a, b, ...ctrlz1);
  vectorctrmixed.current.push(...ctrlz1);
  multiLineFx(context, ctrlz1, a);
};
