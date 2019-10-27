const c = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cw = c.width = window.innerWidth;
const ch = c.height = window.innerHeight;

window.onresize = () => {
  cw = c.width = window.innerWidth;
  ch = c.height = window.innerHeight;
}

player.width = 46;
player.height = 46;

let ship_image;
let bullet_image;
let bomb_image;

loadResources();

function loadResources() {
  ship_image = new Image();
  ship_image.src = './Hunter1.png';

  bullet_image = new Image();
  bullet_image.src = './bullets.png';

  bomb_image = new Image();
  bomb_image.src = './bomb.png';
}

function drawPlayer() {
  
}
