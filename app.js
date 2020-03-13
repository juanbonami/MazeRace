let LEFT_KEY = 37;
let UP_KEY = 38;
let RIGHT_KEY = 39;
let DOWN_KEY = 40;

let canvas = document.querySelector('canvas');
console.log(canvas);

let c = canvas.getContext('2d');
// c.fillRect(100, 100, 100, 100);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'blue';
c.stroke();
