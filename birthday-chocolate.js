// Lily has a chocolate bar that she wants to share it with Ron for his birthday. 
// Each of the squares has an integer on it. She decides to share a contiguous segment of the bar 
// selected such that the length of the segment matches Ron's birth month and the sum of the integers on the 
// squares is equal to his birth day. You must determine how many ways she can divide the chocolate.

// Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

// birthday has the following parameter(s):

// s = an array of integers, the numbers on each of the squares of chocolate
// d = an integer, Ron's birth day
// m = an integer, Ron's birth month

function birthday(s, d, m) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < m; i++) {
        sum += s[i];
    }

    for (let i = m; i < s.length; i++) {
        if (sum == d) {
            count++;
        }

        sum -= s[i - m];
        sum += s[i];
    }

    if (sum == d) {
        count++;
    }

    return count;
}