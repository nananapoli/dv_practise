function Arrow () {
  this.x = 0;
  this.y = 0;
  this.color = '#ff0';
  this.rotation = 0;
  this.scale = 1;
}

Arrow.prototype.draw = function (ctx) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rotation);
  ctx.scale(this.scale, this.scale);

  ctx.lineWidth = 2;
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(-50, -25);
  ctx.lineTo(0, -25);
  ctx.lineTo(0, -50);
  ctx.lineTo(50, 0);
  ctx.lineTo(0, 50);
  ctx.lineTo(0, 25);
  ctx.lineTo(-50, 25);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}