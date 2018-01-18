// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str.split('').reduce((rev, char) => char + rev, '') === str;
}

module.exports = palindrome;

/* Using reduce() and reversestring logic with ternary operator to one line solve it.
function palindrome(str) {
	return str.split('').reduce((rev, char) => char + rev, '') === str;
}
*/

/* Using every() helper to check the current value (char) against the opposite end of the array (-1 to stay 0 indexed)
function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}
*/

/* Simple, condensed with reverse()
function palindrome(str) {
	return str.split('').reverse().join('') === str;
}
*/