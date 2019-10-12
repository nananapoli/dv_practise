const c = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cw = c.width = window.innerWidth;
const ch = c.height = window.innerHeight;

window.onresize = () => {
  cw = c.width = window.innerWidth;
  ch = c.height = window.innerHeight;
}

ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(400, 200);
// ctx.lineTo(400, 400);
// ctx.lineTo(200, 400);
// ctx.lineTo(200, 200);
ctx.rect(200, 200, 200, 200);
ctx.closePath(); // 有自动闭合线路的功能，即连接终点和起点

ctx.lineWidth = 10;
ctx.strokeStyle = '#000';
ctx.fillStyle = '#f40';

ctx.fill();
ctx.stroke();
