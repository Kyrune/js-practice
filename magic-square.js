// Find the minimum cost of converting a 3 by 3 matrix into a magic square.

function formingMagicSquare(s) {
    let n = 8;
    let costs = Array(n).fill(0);
    let magic = [[4, 3, 8], [9, 5, 1], [2, 7, 6]];

}

// [[4, 3, 8], [9, 5, 1], [2, 7, 6]] is one of the possible cases of the magic square. 
// There are 8 cases in total, where one 1 case with 3 rotations from anywhere is the same, but in a flipped state. 
// "isEven" defines a flipped case of the square. Next are simple rotations. 
// It finds n = 8 ways for the square forming. Square forming is a sum of a positive diff between 
// given values and desired. Smallest way is exactly what is needed.