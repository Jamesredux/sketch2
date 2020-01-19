// when dom is loaded this function is called to create squares
// not sure why there is a false, copied it from stackoverflow

document.addEventListener('DOMContentLoaded', () => {
	drawGrid(32);
}, false);



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

function changeColor() {
  this.style.backgroundColor = "#006868";
}

function revertColor() {
	this.style.backgroundColor = '#f97800';
}