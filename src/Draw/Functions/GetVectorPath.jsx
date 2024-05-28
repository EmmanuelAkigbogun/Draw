export let vectorPathData=(context)=>{
  let targetObject = context.targetObject;
  let vectord = context.vectord;
  let vectora = context.vectora;
  Object.keys(targetObject.current).map((e) => {

    if (targetObject.current[e][0].localName == "path") {
      vectord.current.push(
        targetObject.current[e][0]
          .getAttribute("d")
          .replace(/[A-Z]|[a-z]/g, " $&")
          .trim()
          .replace(/[A-Z]|[a-z]/g, "")
          .split(" ")
      );
      vectora.current.push(
        targetObject.current[e][0]
          .getAttribute("d")
          .replace(/[A-Z]|[a-z]/g, " $&")
          .trim()
          .replace(/(\.*|-)\d/g, "")
          .split(" ")
      );
    } 
  });

};
