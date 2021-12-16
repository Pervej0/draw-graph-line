const height = window.innerHeight;
const width = window.innerWidth;
const canvas = document.getElementById("canvas");

window.addEventListener("load", () => {
  const ctx = canvas.getContext("2d");
  // const stockRateX = [210, 220, 226, 230, 238, 240, 247, 255, ];
  canvas.height = height;
  canvas.width = width;

  const stockRateX = [200];
  const stockRateY = [400];
  let i = 0;

  const incX = [5, 10, 7, 3];
  const incY = [10, 5, 15, 25, 20, 30, 40, -10, -5, -15, -25, -20, -30, -40];

  ctx.beginPath();
  ctx.moveTo(200, 400);
  ctx.lineTo(60, 400);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.beginPath();

  const createLine = () => {
    const randomIncX = incX[Math.floor(Math.random() * incX.length)];
    const randomIncY = incY[Math.floor(Math.random() * incY.length)];
    // const randomSymbol = ["-", "+"][Math.floor(Math.random() * 2)];

    const addX = stockRateX[i] + randomIncX;
    const addY = stockRateY[i] + randomIncY;
    stockRateX.push(addX);
    stockRateY.push(addY);
    console.log(stockRateX, stockRateY);

    ctx.moveTo(stockRateX[i], stockRateY[i]);
    ctx.lineTo(stockRateX[i + 1], stockRateY[i + 1]);
    i++;
    ctx.strokeStyle = "white";
    ctx.stroke();

    if (stockRateX.length === 15 && stockRateY.length === 15) {
      alert("ok");
      clearInterval(interval);
    }
  };

  const interval = setInterval(createLine, 2000);
  /* console.log(interval);
  ctx.strokeStyle = "white";
  ctx.stroke(); */
});

window.addEventListener("resize", () => {
  canvas.height = height;
  canvas.width = width;
});
