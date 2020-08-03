// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    var count = 0;
    for (var i = 0; i < ar.length; i++) {
      count += ar[i];
    }
    return count;
}

function simpleArraySum(ar) {
	return ar.reduce((a, b) => a + b);
}
