// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildMap(str) {
	const charMap = {};
	for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
}

function anagrams(stringA, stringB) {
	const mapA = buildMap(stringA);
	const mapB = buildMap(stringB);
	if(Object.keys(mapA).length !== Object.keys(mapB).length) {
		return false;
	}
	for(let prop in mapA) {
		if(mapA[prop] !== mapB[prop]) {
			return false;
		}
	}
	return true;
}

module.exports = anagrams;

/* Improved solution
function buildMap(str) {
	const charMap = {};
	for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
}

function anagrams(stringA, stringB) {
	const mapA = buildMap(stringA);
	const mapB = buildMap(stringB);
	if(Object.keys(mapA).length !== Object.keys(mapB).length) {
		return false;
	}
	for(let prop in mapA) {
		if(mapA[prop] !== mapB[prop]) {
			return false;
		}
	}
	return true;
}
*/

/* First solution
function anagrams(stringA, stringB) {
	const fixedA = stringA.replace(/[^\w]/g, "").toLowerCase();
	const fixedB = stringB.replace(/[^\w]/g, "").toLowerCase();

	if(fixedA.length === fixedB.length) {
		const mapA = {};
		const mapB = {};
		for(let char of fixedA) {
			if(mapA[char]) {
				mapA[char]++;
			} else {
				mapA[char] = 1;
			}
		}
		for(let char of fixedB) {
			if(mapB[char]) {
				mapB[char]++;
			} else {
				mapB[char] = 1;
			}
		}
		for(let prop in mapA) {
			if(!mapB.hasOwnProperty(prop) || mapB.prop != mapA.prop) {
				return false;
			}
		}
		return true;
	} else { return false; }
}
*/