// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let diag1 = 0;
    let diag2 = 0;
    const len = arr.length;
    arr.forEach((element, index, arr) => {
        diag1 += element[index];
        diag2 += element[len - 1 - index];
    })
    return Math.abs(diag1 - diag2);
}
