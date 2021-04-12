// HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. 
// If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending for a trailing 
// number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications 
// until they have at least that trailing number of prior days' transaction data.

// Given the number of trailing days d and a client's total daily expenditures for a period of  days, determine the number of 
// times the client will receive a notification over all n days.

function activityNotifications(expenditure, d) { 
    // Number of notifications
    let n = 0;

    // Set midpoints for median calculation
    let [ i1, i2] = [ Math.floor((d-1)/2), Math.ceil((d-1)/2) ];
    let m1, m2, m;

    // Initialize count sorted subarray
    let cs = new Array(201).fill(0);
    for (let i = d-1; i >= 0; i--) cs [expenditure[i]]++;

    // Iterate through expenditures
    for (let i = d, l = expenditure.length; i < l; i++) {
        
        // Find median
        for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
        for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
        let m = (m1 + m2) / 2;

        // Check if notification is given
        if (expenditure[i] >= m * 2) n++;

        //  Replace subarray elements
        cs[expenditure[i-d]]--
        cs[expenditure[i]]++
    }

    return n;
}