// How many pages does Brie need to turn to get to page p?

// Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.
// n = number of pages in the book
// p = the page number to turn to

function pageCount(n, p) {
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* 
        Returns the total number of page turns it takes to get to 
        a page or how many it requires if starting from the back.
    */
    return Math.min(pageTurns, totalTurns - pageTurns);
}