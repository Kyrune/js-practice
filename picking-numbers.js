// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
    return [...new Set(a)].reduce((c, v) => {
        return Math.max(c,
            a.reduce((c1, v1) => c1 += (v1 === v || v1 === v + 1),
            0));
    }, 0);
}

function pickingNumbers(a) {
    let maxcount = 0;
    [...new Set(a)].forEach(x => {
        maxcount = Math.max(maxcount,
            a.reduce((c, v) => c += (v === x || v === x + 1), 0));
    })
    return maxcount;
}

// 1. Start with a unique list of values that appear in the array.
// 2. For each value in turn, count how many members of the original array are either equal to that value or value + 1.
// 3. Track the highest count in maxcount.
// 4. Return the maxcount at the end.
