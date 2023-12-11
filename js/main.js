const snakeHead = document.querySelector('.snake-head');
const food = document.querySelector('.food');
let x = 2;
let y = 2;
let foodX, foodY;
let speed = 200;
let xDirection, yDirection;
const startWall = 1;
const endWall = 20;
yDirection = 0;
xDirection = 0;


setInterval(() => {
	x = x + 1 * xDirection;
	y = y + 1 * yDirection;
	
	if (x > endWall) {
		x = startWall;
	}
	if (x < startWall) {
		x = endWall;
	}
	if (y > endWall) {
		y = startWall;
	}
	if (y < startWall) {
		y = endWall;
	}
	snakeHead.style.cssText = `grid-row: ${y}; grid-column: ${x};`;

	if (x === foodX && y === foodY) {
		generateFood();
	}
}, speed);

const generateFood = () => {
	foodX = parseInt(Math.random() * 20 + 1);
	foodY = parseInt(Math.random() * 20 + 1);
	food.style.cssText = `grid-row: ${foodY}; grid-column: ${foodX};`;
	speed = speed - 5;
};
generateFood();

const movement = (e) => {
	if (e.key == 'ArrowUp' && yDirection == 0) {
		xDirection = 0;
		yDirection = -1;
	}
	if (e.key == 'ArrowDown' && yDirection == 0) {
		xDirection = 0;
		yDirection = 1;
	}
	if (e.key == 'ArrowLeft' && xDirection == 0) {
		xDirection = -1;
		yDirection = 0;
	}
	if (e.key == 'ArrowRight' && xDirection == 0) {
		xDirection = 1;
		yDirection = 0;
	}
};

window.addEventListener('keydown', movement);
