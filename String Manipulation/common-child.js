// Given two strings a and b of equal length, what's the longest string(s) that can be constructed such that s is a child to both a and b?

// A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. 
// Letters cannot be rearranged. Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?

// commonChild has the following parameter(s):

// string s1: a string
// string s2: another string
// Returns the length of the longest string which is a common child of the input strings

function commonChild(s1, s2) {
    /* Initialize an array to hold a results matrix. */
    var matrix = []; 

    /* Loop through the indexes of the first string */
    for (let i = 0; i <= s1.length; i++){
        /* Create the inner arrays here. So at i = 0, matrix = [[]], and at i = 1, matrix = [[0, 0...,],[]]. 
        Note that <= s1.length is used, rather than the more common < s1.length. This is to populate the first column 
        and first row of the matrix with 0s. This is because each iteration of the algorithm references the previous 
        cells on both the x and y axis. Populating a column and row of zeroes allows the use of the same code s1[0] and s2[0], 
        instead of having to write separate logic for those positions. */
        matrix[i] = [];
        /* Loops through the indexes of the second string. Since the problem dictates strings of equal length, use s1.length here again. */
        for (let j = 0; j <= s1.length; j++) {
            /* This next line populates the column and row of zeroes.*/
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
            }
            /* Now it compares s1[i-1] with s2[j-1]. Since j is the inner loop, this will compare the first character of s1 to 
            every character of s2 (populating the first non-zero row). The next i loop will do the same for the second character of s1, and so on. 
            Uses i-1 and j-1 instead of i to account for the column and row of 0s. 
            If the characters match, then we set matrix[i][j] = matrix[i-1][j-1] + 1. This prevents counting any 
            character in either string multiple times, because it increments the total from before either character was checked.
            
            At i = 1 or j = 1, the matrix[i-1][j-1] will always return 0 because of the row and column of zeroes.*/ 
            else if (s1[i - 1] === s2[j - 1]) {
                matrix[i][j] = matrix[i-1][j-1] + 1;
            } /* If the characters don't match, set the current cell to the larger previous total between the current row and the current column. */
            
            else {
                matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
            }
        }
    }
    /* When both loops have been completed, the last value of the last inner array is the answer. */ 
    return matrix[s1.length][s1.length];
}