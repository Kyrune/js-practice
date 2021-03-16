// Return the count of triplets that form a geometric progression.

// You are given an array and you need to find the number of tripets of indices (i, j, k)  
// such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

function countTriplets (arr, r) {
    let len = arr.length; // 1, 1, 3, 9
    let count = 0;
    let m2 = new Map();
    let m3 = new Map();

    arr.forEach((ele) => {
        if (m3.get(ele)) {
            count = count + m3.get(ele);
        }
        if (m2.get(ele)) {
            m3.set(ele * r, m3.get(ele * r) ? m3.get(ele * r) + m2.get(ele) : m2.get(ele));
        }

        m2.set(ele * r, m2.get(ele * r) ? m2.get(ele * r) + 1 : 1);
    })
    return count;
}