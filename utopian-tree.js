// Predict the height of the tree after N growth cycles.

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?

function utopianTree(n) {
    let meters = 1;
    if (n != 0) {
        for (let j = 1; j <= n; j++) {
            j % 2 == 0 ? meters++ : meters *= 2;
        }
    }
    return meters
}