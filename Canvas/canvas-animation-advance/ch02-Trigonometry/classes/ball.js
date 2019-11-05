function Ball (radius, color, hasShadow) {
  if(!radius) radius = 50;
  if(!color) color = '#000';
  this.x = 0;
  this.y = 0;
  this.radius = radius;
  this.color =  color;
  this.lineWidth = 1;

  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
}

Ball.prototype.draw = function (ctx) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.rotation);
  ctx.scale(this.scaleX, this.scaleY);

  ctx.lineWidth = this.lineWidth;
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(0,0,this.radius,0,Math.PI * 2,false);
  ctx.closePath();
  ctx.fill();
  if(this.lineWidth > 0) {
    ctx.stroke();
  }

  ctx.restore();
}