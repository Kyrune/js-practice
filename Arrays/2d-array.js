// Access 2D arrays

// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g
// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.

function hourglassSum(arr) {
    // -63 is the lowest number value possible (if all number are -9).
    let max = -63;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i + 1][j + 1];
            for (let k = 0; k < 3; k++) {
                sum += arr[i][j + k];
                sum += arr[i + 2][j + k];
            }
            if (sum > max) max = sum;
        }
    }
    return max;
}