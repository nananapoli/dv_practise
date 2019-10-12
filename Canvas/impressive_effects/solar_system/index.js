const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#000';
ctx.moveTo(10, 10);
ctx.lineTo(50, 59);
ctx.stroke();

ctx.fillRect(0,0,200,200);

ctx.clearRect(0,0,1200,800);
let offsetY = 0;
let long

function down () {
  offsetY = ++offsetY;

  ctx.clearRect(0,0,1200,800);
  ctx.fillRect(0,offsetY,200,200);
  

  if(offsetY < 300) {
    long = window.requestAnimationFrame(down);
    console.log(long)

    if(long > 150) window.cancelAnimationFrame(down);
  }
  
}

window.requestAnimationFrame(down);

var sun = new Image();
var moon = new Image();
var earth = new Image();

const loadedArr = [false, false, false];
const imgArr = [sun, moon, earth];

imgArr.forEach((img, index) => {
  img.onload = () => {
    loadedArr[index] = true;

    if(loadedArr.every(bool => !!bool)) {
      init();
    }
  }
})

sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';

function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
  draw();
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,600,600); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)'; //用于画阴影
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';//用于画轨道 orbit
  ctx.save();
  ctx.translate(150,150);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.rotate(0);
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.rotate(0);
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}

init();

