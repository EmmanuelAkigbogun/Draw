export let keydownfx = (e, vg, canvas, link) => {
  let array = ["<foreignObject", "</foreignObject>"];
  let value = btoa(
    vg.current.outerHTML
      .replace(
        bounded(vg.current.outerHTML, ...array).reduce((e, i) => e + i),
        ""
      )
      .replace(array[0], "")
      .replace(array[1], "")
  );
  if (e.key === "D" || e.key === "d") {
    link.current.href = "data:image/svg+xml;base64," + value;
    link.current.download = "draw";
    link.current.click();
  }
  if (e.key === "p" || e.key === "P" || e.key === "j" || e.key === "J") {
    let ctx = canvas.current.getContext("2d");
    let img = new Image();
    img.src = "data:image/svg+xml;base64," + value;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      link.current.href =
        e.key === "j" || e.key === "J"
          ? canvas.current.toDataURL("image/jpeg", 1)
          : canvas.current.toDataURL("image/png", 1);
      link.current.download = "draw";
      link.current.click();
    };
    img.remove();
  }
};
export let bounded = (string, a, z) => {
  return string
    .split(a)
    .join(z)
    .split(z)
    .filter((e, i) => i % 2 !== 0);
};
