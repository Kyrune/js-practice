// Find and print the number of letter a's in the first n letters of an infinitely large periodic string.

// 'aCount' is the remaining 'a' characters, while 'total' is the total amount of characters in the given string without the remaining. 
// The 'remaining' variable is the remaining that doesn't fit into the 'n', so ((n - r) / s.length * c) is the amount of characters without the remainings of 'a' characters. 
// The remaining must be counted only if it's not greater than the index (i < r). Thus the total amount without the remaining + the remaining 'aCount' is the result.

function repeatedString(s, n) {
    let total = 0;
    let aCount = 0;
    let remaining = n % s.length;

    for (let i = s.length; i-- > 0;) {
        if (s.charAt(i) == 'a') {
            ++total;

            if (i < remaining) {
                ++aCount;
            }
        }
    }

    return ((n - remaining) / s.length * total) + aCount;
}