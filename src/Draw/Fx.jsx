export let ShowLineCtrl=(context,e)=>{
    let vectorctrmixed = context.vectorctrmixed;
    let vctrline = context.vctrline;
                vectorctrmixed.current = e.target
                  .getAttribute("data-value")
                  .split(" ")
                  .map((e) => +e)
                  .slice(2, 6);

                let arrayp1 = e.target
                  .getAttribute("data-value")
                  .split(" ")
                  .map((e) => +e)
                  .slice(0, 2);
                let arrayc1 = e.target
                  .getAttribute("data-value")
                  .split(" ")
                  .map((e) => +e)
                  .slice(2, 4);
                let arrayc2 = e.target
                  .getAttribute("data-value")
                  .split(" ")
                  .map((e) => +e)
                  .slice(4, 6);
                let arrayp2 = e.target
                  .getAttribute("data-value")
                  .split(" ")
                  .map((e) => +e)
                  .slice(6, 8);
                vctrline.current = [];

                vctrline.current.push(
                  arrayc1.join(" ") + " " + arrayp1.join(" ") + " "
                );
                vctrline.current.push(
                  arrayc2.join(" ") + " " + arrayp2.join(" ") + " "
                );
}
export let bendCntrlDragLine=(context,ndx)=>{
      let vectorctrmixed = context.vectorctrmixed;
      let vctrline = context.vctrline;
      let vDragpointsArr = context.vDragpointsArr;
               vDragpointsArr.current = [
                 ndx[0] + 2,
                 ndx[0] + 3,
                 ndx[0] + 4,
                 ndx[0] + 5,
               ];
               vectorctrmixed.current = [
                 ndx[0] + 2,
                 ndx[0] + 3,
                 ndx[0] + 4,
                 ndx[0] + 5,
               ];
               vctrline.current.push(
                 `${ndx[0] + 2} ${ndx[0] + 3}` +
                   ` ` +
                   `${ndx[0]} ${ndx[0] + 1}` +
                   ` `
               );
               vctrline.current.push(
                 `${ndx[0] + 4} ${ndx[0] + 5}` +
                   ` ` +
                   `${ndx[0] + 6} ${ndx[0] + 7}` +
                   ` `
               );
}
export let cntrlFromPoint=(context,pointx)=>{
  let vectorCj=context.vectorCj
  let vectorCi = context.vectorCi;
  let cntrl1=[]
  let cntrl2 = [];
         if (
                vectorCj.current.includes(
                  pointx - 1
                )
              ) {
                cntrl1 = [
                  pointx - 2,
                  pointx - 1,
                ];
              }
              if (
                vectorCi.current.includes(
                  pointx + 2
                )
              ) {
                cntrl2 = [
                  pointx + 2,
                  pointx + 3,
                ];
              }
              return [...cntrl1,...cntrl2]
}

