const snakeHead = document.querySelector('.snake-head');
const board = document.querySelector('.box');
const food = document.querySelector('.food');

// live collection
const tailBox = document.getElementsByClassName('tail');

let foodX, foodY;
let speed = 300;
let xDirection, yDirection;
const startWall = 1;
const endWall = 20;
yDirection = 0;
xDirection = 0;

let x = [2];
let y = [2];

setInterval(() => {
	if (x[0] === foodX && y[0] === foodY) {
		generateFood();
		generatTail();
	}
	console.log(tailBox);
	for (let i = 0; i < tailBox.length; i++) {
		x[i] = x[i] + 1 * xDirection;

		y[i] = y[i] + 1 * yDirection;

		if (x[i] > endWall) {
			x[i] = startWall;
		}
		if (x[i] < startWall) {
			x[i] = endWall;
		}
		if (y[i] > endWall) {
			y[i] = startWall;
		}
		if (y[i] < startWall) {
			y[i] = endWall;
		}
	if (tailBox.length > 0){
		tailBox[i].style.cssText = `grid-row: ${y[i]}; grid-column: ${x[i]};`;}
	}
		snakeHead.style.cssText = `grid-row: ${y[0]}; grid-column: ${x[0]};`;
	
	
}, speed);

const generatTail = () => {
	const tail = document.createElement('div');
	tail.classList.add('tail');
	board.appendChild(tail);
	x.unshift(x[0]);
	y.unshift(y[0]);
};

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
