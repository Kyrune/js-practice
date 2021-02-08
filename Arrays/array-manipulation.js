// Perform m operations on an array and print the maximum of the values.

// Starting with a 1-indexed array of zeros and a list of operations, for each operation, add a value to each array element between two given indices, 
// inclusive. Once all operations have been performed, return the maximum value in the array.

// Using perfect sum algorithm with the only difference being
// that we need to compute perfect sum algorithm on array ranges, and not on all indexes. Use a 
// trick and just compute the bounds of the range, and "capping off" the end of the range with "-element" that we are adding.

// This is something like [0, 0, 0, 0, 0] and trying to perfect sum only the indexes 1, 3, 
// we're summing the start range arr[1] += k and the end of the array + 1 (remember we need to have the bounds inclusive) with -k, arr[3 + 1] -= k;

// With this, perfect summing the range will yield the correct response. This is why some suggest having the negative exclusive border, 
// to indicate that the perfect sum range should stop with the given index.

// Another optimization can be made on finding the max, and that is we can compute the max at the same time 
// we're computing the perfect sum for the resulted array. JS Es6 version:

function arrayManipulation(n, queries) {
    let arr = new Array(n + 1).fill(0); // Edge case for the last element + 1
    let max = 0;
  
    queries.forEach((item) => {
      arr[item[0]] += item[2];
      arr[item[1] + 1] -= item[2];
    });
  
    // This is the max optimization -> when computing the perfect sum, compute the max as well
    arr.reduce((prev, curr) => {
      const sum = prev + curr;
      max = sum > max ? sum : max;
      return sum;
    });
  
    return max;
}