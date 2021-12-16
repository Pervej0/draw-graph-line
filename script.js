const height = window.innerHeight;
const width = window.innerWidth;
const canvas = document.getElementById("canvas");

window.addEventListener("load", () => {
  const ctx = canvas.getContext("2d");
  // const stockRateX = [210, 220, 226, 230, 238, 240, 247, 255, ];
  canvas.height = height;
  canvas.width = width;

  const stockRateX = [210];
  const stockRateY = [390];
  const i = 0;

  const incX = [5, 10, 7, 3];
  const incY = [10, 5, 15, 25, 20, 30, 40];

  ctx.beginPath();
  ctx.moveTo(200, 400);
  ctx.lineTo(60, 400);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(200, 400);

  const createLine = () => {
    const randomIncX = incX[Math.floor(Math.random() * incX.length)];
    const randomIncY = incY[Math.floor(Math.random() * incY.length)];

    const addX = stockRateX[i] + randomIncX;
    const addY = stockRateY[i] + randomIncY;
    stockRateX.push(addX);
    stockRateY.push(addY);

    return [addX, addY];
  };

  const interval = setInterval(() => {
    // console.log(stockRateX, stockRateY);
    // return createLine();
  }, 2000);

  if (stockRateX.length === 5 && stockRateY.length === 5) {
    clearInterval(interval);
  }

  ctx.lineTo(200, 300);
  ctx.lineTo(210, 280);
  ctx.lineTo(218, 270);
  ctx.lineTo(225, 320);
  ctx.lineTo(235, 220);
  ctx.lineTo(246, 290);
  ctx.lineTo(256, 190);
  ctx.lineTo(265, 300);
  ctx.strokeStyle = "white";
  ctx.stroke();
});

window.addEventListener("resize", () => {
  canvas.height = height;
  canvas.width = width;
});
