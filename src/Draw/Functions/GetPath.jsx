export let getPathData=(context)=>{
  let targetObject = context.targetObject;
  let dragd = context.dragd;
  let draga = context.draga;
    let lockdrag = context.lockdrag;
        Object.keys(targetObject.current).map((e) => {
          if (targetObject.current[e][0].localName == "path") {
            dragd.current.push(
              targetObject.current[e][0]
                .getAttribute("d")
                .replace(/ [A-Z]|[a-z]/g, /[A-Z]|[a-z]/g)
                .replace(/[A-Z]|[a-z]/g, " $&")
                .trim()
                .replace(/[A-Z]|[a-z]/g, "")
                .split(" ")
            );
            draga.current.push(
              targetObject.current[e][0]
                .getAttribute("d")
                .replace(/ [A-Z]|[a-z]/g, /[A-Z]|[a-z]/g)
                .replace(/[A-Z]|[a-z]/g, " $&")
                .trim()
                .replace(/(\.*|-)\d/g, "")
                .split(" ")
            );
            console.log(draga.current.length,dragd.current.length);
          } else if (targetObject.current[e][0].localName == "rect") {
            lockdrag.current &&
              dragd.current.push([
                targetObject.current[e][0].getAttribute("x"),
                targetObject.current[e][0].getAttribute("y"),
                targetObject.current[e][0].getAttribute("width"),
                targetObject.current[e][0].getAttribute("height"),
              ]);
            !lockdrag.current &&
                 dragd.current.push([
                   targetObject.current[e][0].getAttribute("x"),
                   targetObject.current[e][0].getAttribute("y"),
            ]);
            draga.current.push([``, ``]);
          } else if (targetObject.current[e][0].localName == "circle") {
            lockdrag.current &&
              dragd.current.push([
                targetObject.current[e][0].getAttribute("cx"),
                targetObject.current[e][0].getAttribute("cy"),
                targetObject.current[e][0].getAttribute("r"),
                targetObject.current[e][0].getAttribute("r"),
              ]);
            !lockdrag.current&&dragd.current.push([
                     targetObject.current[e][0].getAttribute("cx"),
                     targetObject.current[e][0].getAttribute("cy"),
                   ]);

            draga.current.push([``, ``]);
          } else if (targetObject.current[e][0].localName == "ellipse") {
                   lockdrag.current &&
                     dragd.current.push([
                       targetObject.current[e][0].getAttribute("cx"),
                       targetObject.current[e][0].getAttribute("cy"),
                       targetObject.current[e][0].getAttribute("rx"),
                       targetObject.current[e][0].getAttribute("ry"),
                     ]);
                   !lockdrag.current &&
                     dragd.current.push([
                       targetObject.current[e][0].getAttribute("cx"),
                       targetObject.current[e][0].getAttribute("cy"),
                     ]);


            draga.current.push([``, ``]);
          } else if (targetObject.current[e][0].localName == "line") {
            dragd.current.push([
              targetObject.current[e][0].getAttribute("x1"),
              targetObject.current[e][0].getAttribute("y1"),
              targetObject.current[e][0].getAttribute("x2"),
              targetObject.current[e][0].getAttribute("y2"),
            ]);

            draga.current.push([``, ``, ``, ``]);
          }
        });
    
    
}
