// Find the respective number of apples and oranges that fall on Sam's house.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let totalApples = apples.filter(value => value + a >= s && value + a <= t).length;
    let totalOranges = oranges.filter(value => value + b >= s && value + b <= t).length;

    console.log(totalApples);
    console.log(totalOranges);
}