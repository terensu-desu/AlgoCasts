// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Even better than below, uses same logical flow. 
// Reduce takes initial value of empty string '' as rev, which will change as the function works through the array
// char represents the value of the current index. So first time through this reducer rev = '' and char = 'a'
// returns 'a' + '', which is just 'a', which becomes the value rev, and char becomes 'p', where 'p' will get prepended to the previous rev value
function reverse(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}

/* More complex, logic is pretty easy to pick up
function reverse(str) {
	let reversed = '';
	for (let character of str) {
		reversed = character + reversed;
	}
	return reversed;
}
*/

/* Simple, probably not allowed due to .reverse()
function reverse(str) {
	return str.split('').reverse().join('');
}*/

module.exports = reverse;