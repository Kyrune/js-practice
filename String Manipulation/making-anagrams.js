// How many characters should one delete to make two given strings anagrams of each other?

// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of 
// each other if the first string's letters can be rearranged to form the second string. In other words, both strings 
// must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the 
// minimum number of character deletions required to make the two strings anagrams. Determine this number.

function makeAnagram(a, b) {
    let counter = {};
    let total = 0;

    Array.from(a).forEach(char => {
        counter[char] = counter[char] || 0;
        counter[char]++;
    })
    Array.from(b).forEach(char => {
        counter[char] = counter[char] || 0;
        counter[char]--;
    })
    Object.keys(counter).forEach(k => {
        if (counter[k] !== 0) {
            total += Math.abs(counter[k]);
        }
    })
    return total;
}