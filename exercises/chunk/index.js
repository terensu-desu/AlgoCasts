// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	// create an empty array to hold processed data
	let chunked = [];
	// helper variable to handle iteration
	let index = 0;
	/
	while(index < array.length) {
		// push to chunked a slice of array that begins at index and stops before index+size
		chunked.push(array.slice(index, index + size));
		// iterate index up the length of size
		index += size;
	}
	return chunked;
}

module.exports = chunk;

/*
Second, slice based solution
function chunk(array, size) {
	// create an empty array to hold processed data
	let chunked = [];
	// helper variable to handle iteration
	let index = 0;
	while(index < array.length) {
		// push to chunked a slice of array that begins at index and stops before index+size
		chunked.push(array.slice(index, index + size));
		// iterate index up the length of size
		index += size;
	}
	return chunked;
}
*/

/*
Unable to do without solution

function chunk(array, size) {
	// create an empty array to hold processed data
	let chunked = [];
	// for each element
	for(let elem of array) {
		// set up a variable to check the last element in the new array
		const last = chunked[chunked.length - 1];
		// check if the last variable is undefined or full
		if(!last || last.length === size) {
			// if true, push an array containing the element we're on
			chunked.push([elem]);
		} else {
			// otherwise, push the element to the subarray last is defined as
			last.push(elem);
		}
	}
	return chunked;
}
*/