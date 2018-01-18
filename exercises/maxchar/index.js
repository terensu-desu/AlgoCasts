// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charMap = {};
	for(let char of str) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	let topChar = '';
	let count = 0;
	for(property in charMap) {
		if(charMap[property] > count) {
			count = charMap[property];
			topChar = property;
		}
	}
	return topChar;
}

module.exports = maxChar;


/* First solution, first time trying to work with for-of and for-in. after for-of loop, code done without solution given
		personal note: for-of for strings and arrays. for-in for objects.
function maxChar(str) {
	const charMap = {};
	for(let char of str) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	let topChar = '';
	let count = 0;
	for(property in charMap) {
		if(charMap[property] > count) {
			count = charMap[property];
			topChar = property;
		}
	}
	return topChar;
}
*/