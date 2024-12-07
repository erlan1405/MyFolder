arr = [1, 2, 3];

function findMax(arr) {

    let maxNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return `max number is ${maxNum}`
}

console.log(findMax(arr));
