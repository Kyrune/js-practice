// How many pairs of socks can John sell?

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
    let result = 0;
    
    ar.sort();

    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            i++;
            result++;
        }
    }
    return result;
}