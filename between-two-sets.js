// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array

function getTotalX(a, b) {
    let count = 0;

    for (let i = 0; i <= 100; i++) {
        if (a.every(int => (i % int == 0))) {
            if (b.every(int => (int % i == 0))) {
                count++;
            }
        }
    }

    return count;
}