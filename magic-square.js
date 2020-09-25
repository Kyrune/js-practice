// Find the minimum cost of converting a 3 by 3 matrix into a magic square.

// We define a magic square to be an nxn matrix of distinct positive integers from 1 to n^2 where the sum of any row, 
// column, or diagonal of length n is always equal to the same number: the magic constant.

// You will be given a 3x3 matrix s of integers in the inclusive range [1, 9]. We can convert any digit a to any other digit b in the 
// range [1, 9] at cost of |a - b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

// Note: The resulting magic square must contain distinct integers in the inclusive range [1, 9].

function formingMagicSquare(s) {
    let n = 8;
    let costs = Array(n).fill(0);
    let magic = [[4, 3, 8], [9, 5, 1], [2, 7, 6]];

    for (let i = 0; i < n; i++) {
        const isEven = i % 2 === 0;

        magic.forEach(([a, b, c], j) => {
            costs[i] += Math.abs(s[isEven ? 0 : 2][j] - a);
            costs[i] += Math.abs(s[1][j] - b);
            costs[i] += Math.abs(s[isEven ? 2 : 0][j] - c);
        });
        if (isEven) {
            s = [0, 1, 2].map(j => [s[2][j], s[1][j], s[0][j]]);
        }
    }
    return Math.min(...costs);
}

// [[4, 3, 8], [9, 5, 1], [2, 7, 6]] is one of the possible cases of the magic square. 
// There are 8 cases in total, where one 1 case with 3 rotations from anywhere is the same, but in a flipped state. 
// "isEven" defines a flipped case of the square. Next are simple rotations. 
// It finds n = 8 ways for the square forming. Square forming is a sum of a positive diff between 
// given values and desired. Smallest way is exactly what is needed.