const snakeHead = document.querySelector('.snake-head');
const food = document.querySelector('.food');

let x = 10;
let y = 10;

let foodX, foodY;

let speed = 300;

let moveUp, moveDown, moveLeft, moveRight;

xAxisAllowed = true;
yAxisAllowed = true;

const generateFood = () => {
	foodX = parseInt(Math.random() * 20 + 1);
	foodY = parseInt(Math.random() * 20 + 1);
	food.style.cssText = `grid-row: ${foodY}; grid-column: ${foodX};`;
	speed = speed - 5;
};
generateFood();

let xWall, xOtherWall, yWall, yOtherWall, xDirection, yDirection;
yDirection = 0;
xDirection = 0;


setInterval(() => {
	x == xWall ? (x = xOtherWall) : (x = x + 1 * xDirection);
	y == yWall ? (y = yOtherWall) : (y = y + 1 * yDirection);
	console.log(`x:${x} y:${y}`);
    if (x === foodX && y === foodY) {
		generateFood();
	}
	snakeHead.style.cssText = `grid-row: ${y}; grid-column: ${x};`;
}, speed);

const movement = (e) => {
	if (e.key == 'ArrowUp' && yDirection == 0) {
		console.log(e.key);
		yWall = 1;
		yOtherWall = 20;
		xDirection = 0;
		yDirection = -1;
		moveSnake();
	}
	if (e.key == 'ArrowDown' && yDirection == 0) {
		console.log(e.key);
		yWall = 20;
		yOtherWall = 1;
		xDirection = 0;
		yDirection = 1;
		moveSnake();
	}
	if (e.key == 'ArrowLeft' && xDirection == 0) {
		console.log(e.key);
		xWall = 1;
		xOtherWall = 20;
		xDirection = -1;
		yDirection = 0;
		moveSnake();
	}
	if (e.key == 'ArrowRight' && xDirection == 0) {
		console.log(e.key);
		xWall = 20;
		xOtherWall = 1;
		xDirection = 1;
		yDirection = 0;
		moveSnake();
	}
};

window.addEventListener('keydown', movement);
