let arr = [1, 1, 2, 2, 3];

function migratoryBirds(arr) {
    let countMap = {};

    // Count occurrences of each bird type
    for (let element of arr) {
        if (countMap[element]) {
            countMap[element]++;
        } else {
            countMap[element] = 1;
        }
    }

    // Find the bird type with the maximum count
    let maxCount = 0;
    let birdWithMaxCount = -1;

    for (let bird in countMap) {
        if (countMap[bird] > maxCount) {
            maxCount = countMap[bird];
            birdWithMaxCount = bird;
        } else if (countMap[bird] === maxCount) {
            // If two birds have the same frequency, pick the smaller bird ID
            birdWithMaxCount = Math.min(birdWithMaxCount, bird);
        }
    }

    // Return the bird with the maximum frequency
    return birdWithMaxCount;
}

console.log(migratoryBirds(arr));
