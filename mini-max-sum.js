// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let sum1 = String(arr.slice(0, 4).reduce((a, b) => a + b));
    let sum2 = String(arr.slice(1, 5).reduce((a, b) => a + b))
    let sumTotal = sum1 + ' ' + sum2;
    console.log(sumTotal);
}