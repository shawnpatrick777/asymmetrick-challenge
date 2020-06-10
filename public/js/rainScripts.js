const canvas = document.getElementById('rainCanvas');
const rainCtx = canvas.getContext('2d');
let rainArray = [];
let init = [];
let maxRain = 800;
const w = (canvas.width = window.innerWidth);
const h = (canvas.height = window.innerHeight);

rainCtx.strokeStyle = 'rgba(167, 174, 184,0.5)';
rainCtx.lineWidth = 1;
rainCtx.lineCap = 'round';

// loop
for (var i = 0; i < maxRain; i++) {
	init.push({
		x: Math.random() * w,
		y: Math.random() * h,
		l: Math.random() * 1.5,
		xs: -4 + Math.random() * 4 + 2,
		ys: Math.random() * 10 + 10,
	});
}

for (var b = 0; b < maxRain; b++) {
	rainArray[b] = init[b];
}

function move() {
	for (var q = 0; q < rainArray.length; q++) {
		var p = rainArray[q];
		p.x += p.xs;
		p.y += p.ys;
		if (p.x > w || p.y > h) {
			p.x = Math.random() * w;
			p.y = -20;
		}
	}
}

function createTheRain() {
	rainCtx.clearRect(0, 0, w, h);
	for (var b = 0; b < rainArray.length; b++) {
		var p = rainArray[b];
		rainCtx.beginPath();
		rainCtx.moveTo(p.x, p.y);
		rainCtx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
		rainCtx.stroke();
	}

	move();
}

let rainInterval = null;

const rainBTN = document.querySelector('.btn-rain');

rainBTN.addEventListener('click', function (e) {
	e.preventDefault();

	if (rainBTN.innerHTML === 'Pause') {
		rainBTN.innerHTML = 'Play';
		clearInterval(rainInterval);
		rainInterval = 0;
	} else if (rainBTN.innerHTML === 'Play') {
		rainBTN.innerHTML = 'Pause';
		rainInterval = setInterval(createTheRain, 30);
	} else rainBTN.innerHTML = 'Error';
});
