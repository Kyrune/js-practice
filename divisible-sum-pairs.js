// Count the number of pairs in an array having sums that are evenly divisible by a given number.

// if(ar[i] + ar[j] % k === 0)
// inner loop starts from j = i + 1, so j is always greater than i
function divisibleSumPairs(n, ar, k) {
    let count = 0;

    for (let i = 0 ; i < n; i++) {
        for (let j = (i + 1); j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}