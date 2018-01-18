// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;

/* Cleaned solution after realizing that parseInt will automatically drop the sign (+ or -) and can be multiplied by Math.sign(n) result
function reverseInt(n) {
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
*/

/* First solution
function reverseInt(n) {
	const numArr = n.toString().split('');
	if(Math.sign(n) === -1) {
	return parseInt(-numArr.splice(1).reverse.join(''));
	}
	return parseInt(numArr.reverse.join(''));
}
*/