// Find the number of unordered anagramic pairs of substring of a string.

// Two strings are anagrams of each other if the letters of one string can be 
// rearranged to form the other string. Given a string, find the number of pairs of 
// substrings of the string that are anagrams of each other.

// Note: PALINDROMES are not ANAGRAMS.

function sherlockAndAnagrams(s) {
    let count = 0;

    // Size of the sliding window
    for (let i = 1; i < s.length; i++) {
        let found = {};

        // Starting index of the sliding window
        for (let j = 0; j + i <= s.length; j++) {
            let substr = s.substr(j, i);
            substr = substr.split('').sort().join('');
            if (found[substr]) {
                count += found[substr];
                found[substr]++;
            } else {
                found[substr] = 1;
            }
        }
    }
    return count;
}