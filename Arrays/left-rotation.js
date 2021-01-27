// Given an array and a number, d, perform d left rotations on the array.

// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], 
// then the array would become [3, 4, 4, 1, 2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array a of n integers and a number, d , perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// O(d) time complexity and constant space
function rotLeft(a, d) {
    while (d--) {
        a.push(a.shift());
    }
    return a;
}

// The array "push" method pushes an element to the end of the array. The array "shift" method removes the first element of the array and returns it. 
// You do that "d" times, as each loop decreases "d" by 1 until 0, which would cut the while-loop and return the "d" times shifted array.