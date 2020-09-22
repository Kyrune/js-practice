// Determine the most expensive Keyboard and USB drive combinations one can purchase within their budget.

// Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to 
// buy both items, return -1.

function getMoneySpent(keyboards, drives, b) {
    return keyboards.reduce((acc, curr) =>
        Math.max(acc, ...drives.map(usb => usb + curr).filter(ku => b >= ku)), -1);
}