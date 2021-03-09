// Given two strings, you find a common substring of non-zero length.
// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// O(n)
function twoStrings(s1, s2) {
    let map = {};
    for (let i of s1) {
        map[i] = 1;
    }
    for (let i of s2) {
        if (map[i]) {
            return "YES";
        }
    }
    return "NO";
}