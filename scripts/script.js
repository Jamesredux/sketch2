// when dom is loaded this function is called to create squares
// not sure why there is a false, copied it from stackoverflow

document.addEventListener('DOMContentLoaded', () => {
	drawGrid(32);
	init();
}, false);






function init() {
	const resetButton = document.getElementById('resetButton');
	const randomButton = document.getElementById('randomButton');
	const jazzyButton = document.getElementById('jazzyButton');
	const resizeButton = document.getElementById('resizeButton');
	

	resetButton.addEventListener('click', resetGrid);
	randomButton.addEventListener('click', randomColors);
	jazzyButton.addEventListener('click', jazzyStyle);
	resizeButton.addEventListener('click', resizeGrid);
}


function drawGrid(numSquare) {
	//clearContainer
	
	let squareSize = 600/numSquare + 'px';
  const container = document.querySelector('.container');

  	for (i = 1; i <= numSquare * numSquare; i++)  {
  		let newSquare = document.createElement('div');
  		newSquare.className = 'square';
  		newSquare.style.height = squareSize;
  		newSquare.style.width = squareSize;
  		newSquare.addEventListener('mouseenter', changeColor);

  		container.appendChild(newSquare);
			}
	}





function changeColor(newColor) {

  this.style.backgroundColor = "#DC7877";
}


// resize function

function resizeGrid() {
	let requestNumber = prompt("How many squares do you want? Choose from 1-64", "32");
	numSquare = requestNumber;
	if (isNaN(numSquare)) {
		alert("Please input a real number.");
		resetGrid();
	}
	else if (numSquare <1 || numSquare > 64) {
		alert("I SAID CHOOSE A NUMBER BETWEEN  1-64")
		resetGrid();
	}
	else {
		clearGrid();
		drawGrid(numSquare);
	}
	
}

function clearGrid() {
	const oldSquares = document.querySelectorAll('.square').forEach(sq => {
		sq.parentNode.removeChild(sq);
	});
}

//random colors function

function randomColors() {
		resizeGrid();
	
	const squares = document.querySelectorAll('.square').forEach(sq => {
		sq.removeEventListener("mouseenter", changeColor);
		sq.addEventListener('mouseenter', changeColorRandom);
		
	});
}

function changeColorRandom() {
	let ranColor = getRandomColor();
	this.style.backgroundColor = ranColor;
	
}

function getRandomColor() {
	let digits = ['0','1','2','3','4','5','6','7','8',
	'9','A', 'B', 'C', 'D', 'E', 'F'],
	 ranColor = '#', i;
	for (i=0; i < 6; i++)  {
		ranColor = ranColor += digits[Math.floor(Math.random() * 16)];
	}
	return ranColor;
}

// end of random


// transparent

function jazzyStyle() {
	clearGrid();
	drawGrid(32);
	let box = document.querySelector('.container');
	box.className += " jazz";
	const squares = document.querySelectorAll('.square').forEach(sq => {
		sq.removeEventListener("mouseenter", changeColor);
		sq.addEventListener('mouseenter', changeTransparent);
		
});
}


function changeTransparent()  {
	this.style.backgroundColor = "transparent";
}

//reset 

function resetGrid() {
	clearGrid();
	drawGrid(32);
}