// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
    return [...new Set(a)].reduce((c, v) => {
        return Math.max(c,
            a.reduce((c1, v1) => c1 += (v1 === v || v1 === v + 1),
            0));
    }, 0);
}
