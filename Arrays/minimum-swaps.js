// Return the minimum number of swaps to sort the given array.

// You are given an unordered array consisting of consecutive integers [1, 2, 3, ..., n] without any duplicates. 
// You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(arr) {
    let swaps = 0;
    let l = arr.length;
    // Copy array
    const arr2 = [...arr];
    // Sorting the new array
    // It will be used to know what's the next value in the array
    // and swap if needed
    arr2.sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      return 0;
    });
  
    // Create an object with values of our array as keys
    // and position in array as values
    const map = arr.reduce((acc, cur, i) => {
      acc[cur] = i;
      return acc;
    }, {});
  
  
    // Now we loop through the array
    for (let i = 0; i < l; i += 1) {
      const v1 = arr[i];
      const v2 = arr2[i];
      if (v2 != v1) {
        swaps += 1;
        // Use the map to avoid computing the position each time
        const index = map[v2];
        // Swap value
        arr[index] = v1;
        arr[i] = v2;
        // Update map
        map[v1] = index;
      };
    }
    return swaps;
}