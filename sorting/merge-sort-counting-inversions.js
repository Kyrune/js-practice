// Write a Comparator for sorting elements in an array.

// Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. 
// The Player class is provided in the editor below. It has two fields:

// 1. name: a string
// 2. score: an integer

// Given an array of n Player objects, write a comparator that sorts them in order of decreasing score. If 2 or more players have
// the same score, sort those players alphabetically ascending by name.

function countInversions(arr) {
    let count = 0;
    function swap(arr1, arr2) {
        let i = 0;
        let j = 0;
        let mergedArr = [];
        let remainder;

        while (i !== arr1.length && j !== arr2.length) {
            if (arr1[i] < arr2[j] || arr1[i] === arr2[j]) {
                mergedArr.push(arr1[i]);
                i++;
            } else {
                mergedArr.push(arr2[j]);
                count += (arr1.length - i);
                j++;
            }
        }
        remainder = i >= j ? arr2.slice(j) : arr1.slice(i);
        return mergedArr.concat(remainder);
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let middle = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, middle));
        let right = mergeSort(arr.slice(middle, arr.length));

        return swap(left, right);
    }
    mergeSort(arr);
    return count;
}