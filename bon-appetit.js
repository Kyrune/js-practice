// Determine whether or not Brian overcharged Anna for their split bill

// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. 
// Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. 
// Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

function bonAppetit(bill, k, b) {
    bill[k] = 0;

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let expectedBill = bill.reduce(reducer)/2;

    if (b == expectedBill) {
        console.log("Bon Appetit");
    } else {
        console.log(b - expectedBill);
    }
}