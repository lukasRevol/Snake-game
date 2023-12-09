const snakeHead = document.querySelector('.snake-head');
const food = document.querySelector('.food');

let x = 10;
let y = 20;

let foodX, foodY

let speed = 300

let upInterval, downInterval, leftInterval, rightInterval

xAxisAllowed = true;
yAxisAllowed = true;

const generateFood = () => {
    foodX = parseInt(Math.random()*20+1)
    foodY = parseInt(Math.random()*20+1)
    food.style.cssText = `grid-row: ${foodY}; grid-column: ${foodX};`;
}

generateFood();



const moveUp = () => {
    clearInterval(leftInterval);
    clearInterval(rightInterval);
    if (yAxisAllowed) {
        yAxisAllowed = false
        xAxisAllowed = true
        upInterval = setInterval(() => {
            (y <= 1)? y = 20 : y--;
            console.log(y);
            snakeHead.style.cssText = `grid-row: ${y}; grid-column: ${x};`;
        }, speed);
    } 
}

const moveDown = () => {
    clearInterval(leftInterval);
    clearInterval(rightInterval);
    if (yAxisAllowed) {
        yAxisAllowed = false
        xAxisAllowed = true
        downInterval = setInterval(() => {
            (y >=20)? y = 1 : y++;
            console.log(y);
            snakeHead.style.cssText = `grid-row: ${y}; grid-column: ${x};`;
        }, speed);
    } 
}

const moveRight = () => {
    clearInterval(upInterval);
    clearInterval(downInterval);
    if (xAxisAllowed) {
        xAxisAllowed = false
        yAxisAllowed = true
        rightInterval = setInterval(() => {
            (x >=20)? x = 1 : x++;
            console.log(x);
            snakeHead.style.cssText = `grid-row: ${y}; grid-column: ${x};`;
        }, speed);
    } 
}

const moveLeft = () => {
    clearInterval(upInterval);
    clearInterval(downInterval);
    if (xAxisAllowed) {
        xAxisAllowed = false
        yAxisAllowed = true
        leftInterval = setInterval(() => {
            (x <= 1)? x = 20 : x--;
            console.log(x);
            snakeHead.style.cssText = `grid-row: ${y}; grid-column: ${x};`;
        }, speed);
    } 
}

setInterval(() => {
    if (x === foodX && y === foodY){
        generateFood();
    }
}, speed);



const movement = (e) => {
	if (e.key == 'ArrowUp') {
        console.log(e.key);
		moveUp();
	}
	if (e.key == 'ArrowDown') {
        console.log(e.key);
		moveDown();
	}
	if (e.key == 'ArrowLeft') {
        console.log(e.key);
		moveLeft();
	}
	if (e.key == 'ArrowRight') {
        console.log(e.key);
		moveRight();
	}
    
    
};

window.addEventListener('keydown', movement);
