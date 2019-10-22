const c = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cw = c.width = window.innerWidth;
const ch = c.height = window.innerHeight;
ctx.translate(cw / 2, ch / 2);
ctx.scale(0.5,0.5);
// ctx.rotate(90 * Math.PI / 180);

ctx.strokeStyle = '#000';
ctx.fillStyle = '#000';
ctx.lineWidth = 5;
ctx.strokeRect(-100, -100, 50, 50);
ctx.arc(0,0,5,0,Math.PI*2,false);
ctx.stroke();
ctx.fill();

// 绘制坐标系
ctx.beginPath();
ctx.moveTo(0,-ch);
ctx.lineTo(0, ch);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(cw,0);
ctx.lineTo(-cw, 0);
ctx.stroke();


window.onresize = () => {
  cw = c.width = window.innerWidth;
  ch = c.height = window.innerHeight;
  // draw();
}

ctx.beginPath();
ctx.moveTo(100,280);
ctx.lineTo(300,300);
ctx.lineTo(100,320);
ctx.lineWidth = 10;
ctx.strokeStyle = '#f40';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';  //转角为尖头，角度越小，尖头越长，需要miterLimit限制
ctx.miterLimit = 20;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500,100);
ctx.lineTo(700,300);
ctx.lineTo(500,500);
ctx.lineWidth = 10;
ctx.strokeStyle = '#000';
ctx.lineCap = 'round';
ctx.lineJoin = 'round'; //转角为圆头
ctx.stroke();

ctx.beginPath();
ctx.moveTo(900,100);
ctx.lineTo(1100,300);
ctx.lineTo(900,500);
ctx.lineWidth = 10;
ctx.strokeStyle = 'violet';
ctx.lineCap = 'square';
ctx.lineJoin = 'bevel'; //转角为平头
ctx.stroke();
