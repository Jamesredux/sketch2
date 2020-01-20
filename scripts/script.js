// when dom is loaded this function is called to create squares
// not sure why there is a false, copied it from stackoverflow

document.addEventListener('DOMContentLoaded', () => {
	drawGrid(32);
}, false);




window.onload = init;

function init() {
	const resetButton = document.getElementById('resetButton');
	const randomButton = document.getElementById('randomButton');
	const jazzyButton = document.getElementById('jazzyButton');
	
	console.log(resetButton)
resetButton.addEventListener('click', resetGrid);
randomButton.addEventListener('click', randomColors);

//jazzyButton.addEventListener('click', jazzyStyle);
}


function drawGrid(numSquare) {
	clearContainer
	
	let squareSize = 600/numSquare + 'px';
	console.log(squareSize);
  const container = document.querySelector('.container');


  	for (i = 1; i <= numSquare * numSquare; i++)  {
  		let newSquare = document.createElement('div');
  		newSquare.className = 'square';
  		//newSquare.setAttribute('style', 'height: squareSize; width: 18px');
  		newSquare.style.height = squareSize;
  		newSquare.style.width = squareSize;
  		newSquare.addEventListener('mouseenter', changeColor);
  		//newSquare.addEventListener('mouseleave', revertColor)
  		//add above as option for snake	
  		container.appendChild(newSquare);
			}
	}


function clearContainer() {
	const divGroup = document.querySelectorAll('.square');

	divGroup.forEach(div => {
		div.classList.remove('.square');
	} );

}

function defaultSketch(color) {
	let drawColor = color
	const square = document.querySelectorAll('.square')
	square.addEventListener('mouseenter', () => {
		square.style.backgroundColor = "#fff";
	})
	// add event listener to square class
	// change color on mouse enter and remove on mouse leaeve
	// body...
}

function changeColor(newColor) {

  this.style.backgroundColor = "#006868";
}

function revertColor() {
	this.style.backgroundColor = '#f97800';
}

// reset function

function resetGrid() {
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
	console.log("randomColors")
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

