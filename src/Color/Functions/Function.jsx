export let pixelCoordinate = (e, c, cv, renderValue, setrenderValue) => {
  let array = cv.current.getImageData(
    (e.clientX - c.current.getBoundingClientRect().x) *
      (c.current.width / c.current.offsetWidth),
    (e.clientY - c.current.getBoundingClientRect().y) *
      (c.current.width / c.current.offsetWidth),
    1,
    1
  );
  let color = `${array.data[0]},${array.data[1]},${array.data[2]},${(
    array.data[3] / 255
  ).toPrecision(3)}`;
  setrenderValue((renderValue = [`rgb(${color})`, converter(color)]));
  cv.current.putImageData(
    array,
    (e.clientX - c.current.getBoundingClientRect().x) *
      (c.current.width / c.current.offsetWidth),
    (e.clientY - c.current.getBoundingClientRect().y) *
      (c.current.width / c.current.offsetWidth)
  );
};
export let lines = (c, cv) => {
  cv.current.strokeStyle = "white";
  cv.current.moveTo(0, c.current.height - c.current.height / 2);
  cv.current.lineTo(c.current.width, c.current.height - c.current.height / 2);
  cv.current.moveTo(c.current.width / 2, 0);
  cv.current.lineTo(c.current.width / 2, c.current.height);
  cv.current.stroke();
};
export let gradientCard = (cv, gradient) => {
  gradient.current = cv.current.createLinearGradient(0, 30, 0, 60);
  gradient.current.addColorStop(0.1, "red");
  gradient.current.addColorStop(0.2, "white");
  cv.current.fillStyle = gradient.current;
  cv.current.fillRect(30, 30, 30, 30);
  cv.current.fill();
};
export let colorWheel = (cv) => {
  for (let index = 0; index <= 720; index++) {
    cv.current.save();
    cv.current.beginPath();
    cv.current.lineWidth = 100;
    cv.current.strokeStyle = `hsl(${index},100%,50%)`;
    cv.current.arc(
      150,
      150,
      50,
      index * (Math.PI / 180),
      (index + 1) * (Math.PI / 180)
    );
    cv.current.stroke();
  }
};
export let converter = (rgb) => {
  let array = ["A", "B", "C", "D", "E", "F"];
  let value = "#";
  let element = 0;
  rgb.split(",").map((e, i) => {
    //alpha
    if (i == 3 && (e <= 1 || e >= 0)) {
      element = +e * 255;
      element = Math.round(element);
      value +=
        parseInt(element / 16) >= 10
          ? array[parseInt(element / 16) - 10]
          : parseInt(element / 16);
      value += element % 16 >= 10 ? array[(element % 16) - 10] : element % 16;
    } 
    //rgb
    else {
      value +=
        parseInt(+e / 16) >= 10
          ? array[parseInt(+e / 16) - 10]
          : parseInt(+e / 16);
      value += +e % 16 >= 10 ? array[(+e % 16) - 10] : +e % 16;
    }
  });
  return value;
};
export let fileinput = (e,c,cv) => {
          let img = new Image();
          let r = new FileReader();
          r.readAsDataURL(e.target.files[0]);
          r.onload = (e) => {
            img.src = e.target.result;
            img.onload = (e) => {
            c.current.width = img.width;
            c.current.height = img.width;
            cv.current.drawImage(
              e.target,
              0,
              0,
              c.current.width,
              c.current.height
            );
              img.remove();
            };
          };
};