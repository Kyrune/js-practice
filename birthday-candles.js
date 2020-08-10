//  Determine the number of candles that are blown out.

function birthdayCandles(n, ar) {
    let max = Math.max(...ar);
    let result = ar.filter(candle => candle === max);
    return result.length;
}