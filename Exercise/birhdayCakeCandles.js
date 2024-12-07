candles = [4, 4, 1, 3]

function birhdayCakeCandles(candles) {
    let tallCandle = candles[0];
    let count = 0;

    //Recieve tallest candle in array
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > tallCandle) {
            tallCandle = candles[i];
        }
    }

    // Count how many times the tallest candle appears
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === tallCandle) {
            count++;
        }
    }

    return count;
}

console.log(birhdayCakeCandles(candles));
