export let Wheel=(context,e)=>{
        let cwidth = context.cwidth;
        let cheight = context.cheight;
        let setRender = context.setRender;
        let vg = context.vg;
        let straightcolor = context.straightcolor;
        let vgcolor = context.vgcolor;
        let vgpath = context.vgpath;
        let vx = context.vx;
        let vy = context.vy;
        let movepen = context.movepen;
        let downconst = context.downconst;
        let alignedline = context.alignedline;
        let pencirclearr = context.pencirclearr;
        let pen = context.pen;    
        let zoomvalue = context.zoomvalue;
        console.log(e.ctrlKey ? "zoom" : "roll");
        console.log("dy",e.deltaY);
        console.log(e.deltaY<0&&"zoom in");
           console.log(e.deltaY > 0 && "zoom out");
          // console.log(e.wheelDeltaX, "wdx wdy","wd", e.wheelDeltaY, e.wheelDelta);
          if (e.ctrlKey) {
            if (e.deltaY<0) {
                zoomvalue.current=zoomvalue.current-15     
                        if (zoomvalue.current < -99) {
                          zoomvalue.current = 1;
                        }        
            }
            else{
          
                    zoomvalue.current = zoomvalue.current +15;
         
                  
            }
                     cwidth.current = window.innerWidth *((100+ zoomvalue.current) / 100);
                     cheight.current =
                       (window.innerWidth * ((100 + zoomvalue.current) / 100)) /
                       (window.innerHeight /
                       window.innerWidth);
                
                
          } else {
            let x =
              (e.clientX - vg.current.getBoundingClientRect().x) *
                (cwidth.current / vg.current.clientWidth) +
              vx.current;
            let y =
              (e.clientY - vg.current.getBoundingClientRect().y) *
                (cheight.current / vg.current.clientHeight) +
              vy.current;
            if (pen.current) {
              vgpath.current.splice(
                vgpath.current.length - 1,
                1,
                downconst.current + `L${x} ${y}`
              );
              movepen.current = `${x} ${y}`;
            }
            if (
              pen.current &&
              pencirclearr.current
                .map((m) => {
                  if (m.includes(`${x}`) || m.includes(`${y}`)) {
                    alignedline.current.push(`${x} ${y} ${m}`);
                    return m.includes(`${x}`) || m.includes(`${y}`);
                  }
                })
                .filter((f) => f == true)[0]
            ) {
            } else {
              alignedline.current = [];
              vgcolor.current.splice(
                vgcolor.current.length - 1,
                1,
                straightcolor.current[vgcolor.current.length - 1]
              );
            }

            vx.current = vx.current + e.deltaX;
            vy.current = vy.current + e.deltaY;
          }
          setRender((r) => r + 1);
}