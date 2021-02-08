// Perform m operations on an array and print the maximum of the values.

// Starting with a 1-indexed array of zeros and a list of operations, for each operation, add a value to each array element between two given indices, 
// inclusive. Once all operations have been performed, return the maximum value in the array.

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