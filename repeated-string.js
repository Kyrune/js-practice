// Find and print the number of letter a's in the first n letters of an infinitely large periodic string.

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