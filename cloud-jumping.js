// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. 
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. 
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

function jumpingonClouds(c) {
    let cloudJumps = 0;
    for (let i = 0; i < c.length - 1; cloudJumps++) {
        i += (c[i + 2] === 0) ? 2 : 1;
    }

    return cloudJumps;
}