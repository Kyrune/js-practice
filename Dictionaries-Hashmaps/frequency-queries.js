// Process the insert/delete queries and report if any integer is there with a particular frequency.

// It receives params queries, which is a 2d array. Each element has an index 0 and index 1, where element[0] is 
// an operation with 3 different cases, and element[1] is the data to be used.
// When it receives [[1, 2], [1, 2], [2, 2] [1, 2], [3, 2]] as queries, it translates to:
[1, 4] // add 4 => [4] 
[1, 4] // add 4 => [4, 4]
[2, 4] // remove 4 => [4]
[1, 4] // add 4 [4, 4]
[3, 2] // now index[1] serves as a frequency, does any number have the frequency of 2? 

function freqQuery(queries) {
    let index = 0;
    let item;
    let operation;  // Queries[i][0] three diff operations:
    // Case 1 : Insert ${num} in your data structure. 
    // Case 2 : Delete one occurrence of ${num} from your data structure, if present. 
    // Case 3 : Check if any integer is present whose frequency is exact. If yes, print 1 else 0.
    let num; // Queries[i][1] element supposed to store in map
    const numsFreq = []; // Storing all ${num} frequency
    const freqMap = {};
    const result = [];
    
    do {
        item = queries[index];
        operation = item[0];
        num = item[1];

        // Initialize frequency and frequency count if it doesn't exist
        numsFreq[num] = numsFreq[num] || 0;
        freqMap[numsFreq[num]] = freqMap[numsFreq[num]] || 0;
        freqMap[numsFreq[num] - 1] = freqMap[numsFreq[num] - 1] || 0;
        freqMap[numsFreq[num] + 1] = freqMap[numsFreq[num] + 1] || 0;
        switch (operation) {
            case 1:
                // Increase the frequency of this number
                numsFreq[num]++;
                // Update this frequency count
                freqMap[numsFreq[num]]++;
                // Reduce previous frequency count
                freqMap[numsFreq[num]-1]--;
                break;
            case 2:
                // Decrease the frequency of this number
                numsFreq[num]--;
                // Update this frequency count
                freqMap[numsFreq[num]]++;
                // Reduce previous frequency count
                freqMap[numsFreq[num]+1]--;
                if (numsFreq[num] < 0) { numsFreq[num] = 0; }
                break;
            case 3:
                // Where ${num} serves as frequency, find in ${freqMap}
                if (freqMap[num] > 0) {  // Check if this frequency does exist in the map
                    result.push(1);
                } else {
                    result.push(0)
                }
                break;
        }
        index++;
    } while (index < queries.length);
    return result;
}