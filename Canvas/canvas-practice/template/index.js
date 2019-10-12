const c = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cw = c.width = window.innerWidth;
const ch = c.height = window.innerHeight;

window.onresize = () => {
  cw = c.width = window.innerWidth;
  ch = c.height = window.innerHeight;
}
