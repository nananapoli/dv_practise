const c = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cw = c.width = window.innerWidth;
const ch = c.height = window.innerHeight;

window.onresize = () => {
  cw = c.width = window.innerWidth;
  ch = c.height = window.innerHeight;
}

ctx.beginPath();
ctx.strokeStyle = '#000';
ctx.fillStyle = '#f40';
ctx.lineWidth = 10;
// ctx.globalAlpha = 0.5;
ctx.fillRect(200,200,200,200);
ctx.strokeRect(200, 200, 200, 200);

ctx.closePath(); // 有自动闭合线路的功能，即连接终点和起点

ctx.beginPath();
ctx.rect(500,200,200,200)
ctx.lineWidth = 10;
ctx.strokeStyle = '#000';
ctx.fillStyle = '#f40';

ctx.stroke();
ctx.fill();

// 200, 500, 400*400
for (var i = 0; i < 20 ; i++ ) {
  console.log(i)
  drawRect(ctx, 200 + 10 * i, 500 + 10 * i, 400 - 20 * i, 400 - 20 * i, '#000');
  drawRect(ctx, 205 + 10 * i, 505 + 10 * i, 390 - 20 * i, 390 - 20 * i, '#fff');
}

function drawRect(ctx, x, y, width, height, fillColor) {
  ctx.beginPath();

  ctx.fillStyle = fillColor || '#fff';

  ctx.fillRect(x, y, width, height);

}
