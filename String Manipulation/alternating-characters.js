// Calculate the minimum number of deletions required to convert a string into a string
// in which consecutive characters are different.

// You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching 
// adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

function alternatingCharacters(s) {
    const multiples = s.match(/(.)+?(?!\1)/g);
    return multiples.reduce((a, c) => a + c.length - 1, 0);
}