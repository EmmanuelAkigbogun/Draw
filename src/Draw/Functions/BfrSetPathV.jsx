export let BfrSetPathV=(context)=>{
  let vDragpointsArr = context.vDragpointsArr;
  let targetObject = context.targetObject;
  let dragd = context.dragd;
  let draga = context.draga;
  let dragx = context.dragx;
  let dragy = context.dragy;
  let vgpath = context.vgpath;
  let vectorCi = context.vectorCi;
  let vectorCj = context.vectorCj;
  let vectorCp = context.vectorCp;
  let vectorGp = context.vectorGp;
  let vectorP = context.vectorP;
  let alignedline=context.alignedline
  let vectord=context.vectord
  
  let pnut = vDragpointsArr.current
    .filter((e) => !vectorCi.current.includes(e))
    .filter((e) => !vectorCj.current.includes(e));
  //console.log(pnut, "dpoi");
  //console.log(vectorGp.current.filter((m) => !pnut.includes(m)),"ndp");
  ///*
      alignedline.current = [];
      let newx = 0;
      let newy = 0;
      let movepoint =pnut;
      let pointzz=vectorGp.current.filter(m=>!pnut.includes(m))
      pointzz
    .map((e,i) => {
    if (i % 2 === 0 && pointzz[i + 1]!==undefined) {
        //  /*
      const digital = 1;
      let evnum = [vectord.current[0][pointzz[i]],vectord.current[0][pointzz[i+1]]];
      let evring=evnum.join(" ")
      let evamax = evnum.map((m) => +m + digital);
      let evamin = evnum.map((n) => +n - digital);
      //console.log(evnum);
     movepoint.map((k, j) => {
       if (j % 2 == 0) {
         let lmove = [
           vectord.current[0][movepoint[j]],
           vectord.current[0][movepoint[j + 1]],
         ];
         let x = lmove[0];
         let y = lmove[1];

         if (
           (+x <= evamax[0] && +x >= evamin[0]) ||
           (+y <= evamax[1] && +y >= evamin[1])
         ) {
           if (y - evnum[1] <= digital && y - evnum[1] >= -digital) {
             newy = evnum[1];
           }
           if (x - evnum[0] <= digital && x - evnum[0] >= -digital) {
             newx = evnum[0];
           }
           if (newx == 0) {
             newx = x;
           }
           if (newy == 0) {
             newy = y;
           }
           alignedline.current.push(`${newx} ${newy} ${evring}`);
           return (
             (+x <= evamax[0] && +x >= evamin[0]) ||
             (+y <= evamax[1] && +y >= evamin[1])
           );
         }
       }
     });

      //*/
        }
    })
    .filter((e) => e == true)[0];
  //  */
}