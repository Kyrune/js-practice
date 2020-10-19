// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. 
// There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be 
// able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.

function hurdleRace(k, height) {
    return Math.max(0, Math.max(...height) - k);
}

function hurdleRace(k, height) {
    const numOfPotions = height.reduce((acc, cur) => Math.max(acc, cur), height[0]) - k;
    return Math.max(0, numOfPotions);
}