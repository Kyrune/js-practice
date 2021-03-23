// Find the minimum number of conditional checks taking place in Bubble Sort

// Consider the following version of Bubble Sort:

for (let i = 0; i < n; i++) {
    
    for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
    
}
// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// 1. Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// 2. First Element: firstElement, where  is the first element in the sorted array.
// 3. Last Element: lastElement, where  is the last element in the sorted array.

function countSwap(a) {
    let swaps = 0;
    const n = a.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swaps++;
            }
        }
    }
    
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`) 
    console.log(`Last Element: ${a[n - 1]}`)
}
