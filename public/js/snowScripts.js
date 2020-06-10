const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
const maxSnow = 600;
const snowArray = [];
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
	return min + Math.random() * (max - min + 1);
}

function clientResize(ev) {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', clientResize);

function createSnowFlakes() {
	for (let i = 0; i < maxSnow; i++) {
		snowArray.push({
			x: Math.random() * width,
			y: Math.random() * height,
			opacity: Math.random(),
			speedX: random(-11, 11),
			speedY: random(7, 15),
			radius: random(0.5, 4.2),
		});
	}
}

function drawSnowFlakes() {
	for (let i = 0; i < snowArray.length; i++) {
		const gradient = ctx.createRadialGradient(
			snowArray[i].x,
			snowArray[i].y,
			0,
			snowArray[i].x,
			snowArray[i].y,
			snowArray[i].radius
		);

		gradient.addColorStop(
			0,
			'rgba(255, 255, 255,' + snowArray[i].opacity + ')'
		);
		gradient.addColorStop(
			0.8,
			'rgba(210, 236, 242,' + snowArray[i].opacity + ')'
		);
		gradient.addColorStop(
			1,
			'rgba(237, 247, 249,' + snowArray[i].opacity + ')'
		);

		ctx.beginPath();
		ctx.arc(
			snowArray[i].x,
			snowArray[i].y,
			snowArray[i].radius,
			0,
			Math.PI * 2,
			false
		);

		ctx.fillStyle = gradient;
		ctx.fill();
	}
}

function moveSnowFlakes() {
	for (var i = 0; i < snowArray.length; i++) {
		snowArray[i].x += snowArray[i].speedX;
		snowArray[i].y += snowArray[i].speedY;

		if (snowArray[i].y > height) {
			snowArray[i].x = Math.random() * width * 1.5;
			snowArray[i].y = -50;
		}
	}
}

function updateSnowFall() {
	ctx.clearRect(0, 0, width, height);
	drawSnowFlakes();
	moveSnowFlakes();
}

let intervalSetting = null;
createSnowFlakes();

const snowBTN = document.querySelector('.btn-test');

snowBTN.addEventListener('click', function (e) {
	e.preventDefault();

	if (snowBTN.innerHTML === 'Pause') {
		snowBTN.innerHTML = 'Play';
		clearInterval(intervalSetting);
		intervalSetting = 0;
	} else if (snowBTN.innerHTML === 'Play') {
		snowBTN.innerHTML = 'Pause';
		intervalSetting = setInterval(updateSnowFall, 50);
	} else snowBTN.innerHTML = 'Error';
});
