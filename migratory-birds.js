// Determine which type of bird in a flock occurs at the highest frequency

// You have been asked to help study the population of birds migrating across the continent. 
// Each type of bird you are interested in will be identified by an integer value. Each time a particular 
// kind of bird is spotted, its id number will be added to your array of sightings. 
// You would like to be able to find out which type of bird is most common given a list of sightings. 
// Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

function migratoryBirds(arr) {
    arr.sort(function (a, b) {
        return a - b
    });

    const numMap = {};
    let maxNum = 0;
    let maxChar = 0;

    for (let num of arr) {
        if ( numMap[num]) {
            numMap[num]++;
        } else {
             numMap[num] = 1;
        }
    }

    for (let num in numMap) {
        if (numMap[num] > maxNum) {
            maxNum = numMap[num];
            maxChar = num;
        }
    }
    return maxChar;
}