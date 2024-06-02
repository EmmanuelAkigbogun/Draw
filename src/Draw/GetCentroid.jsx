export let GetC=(context)=>{
   let targetObject = context.targetObject;
   let dragd = context.dragd;
   let draga = context.draga;
   let dataxc=0
   let datayc=0
   let number=0
   Object.keys(targetObject.current).map((a, i) => {
     let oddfactor = 0;
     for (let index = 0; index < dragd.current[i].length; index++) {
       let xval = +dragd.current[i][index]
       let yval = +dragd.current[i][index] 
      
       //////////////////////////////////////open////////////////////////////////
       if (
         (draga.current[i][index] == "M" ||
           draga.current[i][index] == "C" ||
           draga.current[i][index] == "L") &&
         (index - oddfactor) % 2 !== 0
       ) {
         oddfactor = oddfactor + 1;
       } else if (
         draga.current[i][index] == "V" &&
         (index - oddfactor) % 2 === 0
       ) {
         oddfactor = oddfactor + 1;
       } else if (
         draga.current[i][index] == "H" &&
         (index - oddfactor) % 2 != 0
       ) {
         oddfactor = oddfactor + 1;
       }
       ////////////////////////////////////close///////////////////////////////////////
       if ((index - oddfactor) % 2 == 0) {
        if (dragd.current[i][index]!=="") {
        dataxc = +dragd.current[i][index] + dataxc;
        number=number+1
        }
        console.log(dragd.current[i][index]);
         ///////////////////////////////////////open/////////////////////////////////////////////
         if (draga.current[i][index] == "H") {
           oddfactor = oddfactor + 1;
         }
         ////////////////////////////////////close////////////////////////////////////////////////
       } else {
        if (dragd.current[i][index]!=="") {
        datayc = +dragd.current[i][index] + datayc;
        }
        console.log(dragd.current[i][index]);
       }
     } 
      console.log(number,"num");
   });
   return [dataxc/number,datayc/number]
 };
