// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	// loop from 0 to n, these are the 'steps' or height of the stairs
	for(let i = 0; i < n; i++) {
		// declare variable for answer
		let stair = '';
		// loop from 0 to n, this is the width controller of the stairs
		for(let j = 0; j < n; j++) {
			// first check if j is less than or equal to i, if so, set stair to the pound symbol. for example n=1, i=0, j=0, so stair="#".
			if(j <= i) {
				stair += '#';
			} 
			// else will add spaces until j is no longer less than n
			else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

module.exports = steps;

/* Recursion based
// add row argument and set to 0, add stair arg and set to empty string
function steps(n, row = 0, stair = "") {
	// set base case to close function if requirements are met
	if(n === row) {
		return;
	}

	// check if n equals stair.length. if so, the last column has been reached
	// return with recursive function, adding 1 to the row. it will be checked by base case before continuing.
	if(n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	// in the case that stair is "" and row is 0, add # to stair
	if(stair.length <= row) {
		stair += "#";
	} 
	// if greater than row, add a space
	else {
		stair += " ";
	}
	
	// and call recursive function with current values of row and stair
	steps(n, row, stair);
}
*/

/* With some explanation but without solution
function steps(n) {
	// loop from 0 to n, these are the 'steps' or height of the stairs
	for(let i = 0; i < n; i++) {
		// declare variable for answer
		let stair = '';
		// loop from 0 to n, this is the width controller of the stairs
		for(let j = 0; j < n; j++) {
			// first check if j is less than or equal to i, if so, set stair to the pound symbol. for example n=1, i=0, j=0, so stair="#".
			if(j <= i) {
				stair += '#';
			} 
			// else will add spaces until j is no longer less than n
			else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}
*/