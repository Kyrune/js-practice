// How many pairs of socks can John sell?

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

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