// Find Special sub-strings in a string

// A string is said to be a special string if either of two conditions is met:

// All of the characters are the same, e.g. aaa.
// All characters except the middle one are the same, e.g. aadaa.
// A special substring is any substring of a string which meets one of those criteria. Given a string, 
// determine how many special substrings can be formed from it.

// substrCount has the following parameter(s):

// n: the length of string s
// string s: a string
// Returns
// - the number of special substrings



function substrCount(n, s) {
    // Initially set the count to the string length to account for all single letter substrings.
    let count = n;
    let currentSequence = s[0];

    // Loop over string keeping track of the current sequence of letters that are the same.
    for (let i = 1; i < n; i++) {
        // If the current letter matches the previous then increment 
        // the count by the length of the sequence not including the current 
        // letter so we include all new combinations of substrings. 
        // E.G if the sequence was 'aa' and now becomes 'aaa', there 
        // are 2 new combinations as a result of the third a (1 more 'aa' and 'aaa'). 
        // After this, add the current letter to the sequence and move on to the next iteration.
        if (s[i] === s[i - 1]) {
            count += currentSequence.length;
            currentSequence = currentSequence + s[i];
        } else {
            // If the current letter breaks the sequence, then it could be a middle letter. 
            // Check the next sequence.length number of letters for matches. 
            // If a letter does not match, then break the loop as there can be 
            // no more possible matches. Move on to the next iteration.
            for (let j = 0; j < currentSequence.length; j++) {
                if (s[i + 1 + j] === currentSequence[0]) {
                    count++;
                } else {
                    break;
                }
            }
            currentSequence = s[i];
        }
    }
    return count;
}