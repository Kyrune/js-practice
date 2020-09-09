// How many pages does Brie need to turn to get to page p?

// Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

function pageCount(n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    return Math.min(pageTurns, totalTurns - pageTurns);
}