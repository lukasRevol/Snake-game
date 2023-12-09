const snakeHead = document.querySelector('.snake');

let x = 10;
let y = 20;

let upInterval, downInterval, leftInterval, rightInterval

xAxisAllowed = true;
yAxisAllowed = true;

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
        }, 500);
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
        }, 500);
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
        }, 500);
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
            snakeHead.style.cssText = `grid-column: ${x}; grid-row: ${y};`;
        }, 500);
    } 
}

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
