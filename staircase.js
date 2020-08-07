function staircase(n) {
    for (let x = 1; x <= n; x++) {
        let stair = " ".repeat(n - x) + "#".repeat(x);
        console.log(stair);
    }
}