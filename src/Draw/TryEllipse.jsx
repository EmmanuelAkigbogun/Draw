export let  getBezierPoints=(center, width, height)=>{
  const x0 = center[0];
  const y0 = center[1];
  const a = width / 2;
  const b = height / 2;

  let points = [];
  let n=0
  for (let t = 0; t <= 8; t += 1
  ) {
    const x = x0 + a * (3 * t ** 3 - 6 * t ** 2 + 3 * t - 1);
    const y = y0 + b * (3 * t ** 2 - 2 * t ** 3 - t + 0.5);
 
    if (n==0) {
        
            points.push("M"+x, " "+y);
    }
    else if ((n-1)%3==0){
      
        points.push("C" + x, " "+y);
    }
    else{
       points.push(" " + x, " "+y );
    }
    n++
  }
  return points.join("");
}

