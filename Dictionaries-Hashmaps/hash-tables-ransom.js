// Given two sets of dictionaries, tell if one of them is a subset of the other.

function checkMagazine(magazine, note) {
    let map = { };
    let replicable = true;

    for (var i of magazine) {
        map[i] = (map[i] || 0) + 1;
    }

    for (var i of note) {
        map[i] =  (map[i] || 0) - 1;
    }

    for (var i in map) {
        if (map[i] < 0) {
            replicable = false;
            break;
        }
    }
    console.log(replicable ? 'Yes' : 'No');
}

// The code goes through each of the elements in magazine, one by one, storing each element in the variable i as it iterates through the array:

for (var i of magazine) {
	map[i] = (map[i] || 0) + 1;
}

// Breaking down the part that is probably confusing: 
(map[i] || 0) + 1

// What happens is: if map[i] has not been initialized, it defaults to 0 and then 1 is added. 
// If it has been initialized, it simply adds 1 to its current value. How? Because something || other is 
// a short way of saying if something is defined[*] use it, otherwise use other.

// So in short and plain English, what this loop does is it goes through all the words in magazine 
// and keeps count of how many of them there were using the object called map.

// After that, the code loops through the note and subtracts 1 for each element, again 
// initiating at 0 if needed:

for (var i of note) {
	map[i] = (map[i] || 0) - 1;
}

// Finally, it checks all the values in map to make sure that the note loop didn't remove words from map to the 
// point where we end up below 0. If it's below 0, it means note had more occurrences of some word than magazine did.

for (var i in map) {
	if (map[i] < 0) {
		replicable = false;
		break;
	}
}

// [*] It's actually a bit more complex than this, what it really looks for is if a value is "truthy," which will 
// be anything that isn't one of the following: false, 0, "" (empty string), null, undefined, NaN (Not A Number). 