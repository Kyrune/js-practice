// Remove some characters from the string such that the new string's characters have the same frequency.

// Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
// It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur 
// the same number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

function isValid(s) {
    let counter = {};
    let freq = {};

    // Count of occurrences of characters
    // For example aaabbcc => {a: 3, b: 2, c: 2}
    Array.from(s).forEach(char => {
        counter[char] = counter[char] || 0;
        counter[char]++;
    })

    // Count the frequency of those occurence counts,
    // For example {a: 3, b: 2, c: 2} => {3: 1, 2: 2}
    Object.keys(counter).forEach(k => {
        freq[counter[k]] = freq[counter[k]] || 0;
        freq[counter[k]]++;
    })

    // All our frequencies. e.g. [3, 2]
    let freqArr = Object.keys(freq).map(Number);

    // Simplest case: if there is only one frequency, it's valid
    if (freqArr.length === 1) {
        return 'YES'
    }

    // If not a single frequency string, check next simplest case

    // There are exactly two frequencies
    // e.g. [3, 2]
    let twoFrequencies = freqArr.length === 2;
    let [a, b] = freqArr;

    // Frequency occurs only once
    let oneOccurence = freq[a] === 1 || freq[b] === 1;

    // Rhe difference is a singleton character
    // e.g. abbcc
    let singleton = (freq[a] === 1 && a === 1) || (freq[b] === 1 && b === 1);

    // Differing frequency is exactly 1 more than others
    // e.g. true if aaabbcc, false if abbcc
    let diffOfOne = (freq[a] === 1 ? a - b : b - a) === 1;

    // If single character or frequencies differ by one
    // and there are exactly two frequencies
    // and there is only one occurence of the singleton or differing frequency
    if ((singleton || diffOfOne) && twoFrequencies && oneOccurence) {
        return 'YES';
    }
    return 'NO';
}