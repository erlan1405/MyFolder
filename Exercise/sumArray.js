arr = [1, 2, 3];

function sumArray() {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num;
}

console.log(sumArray(arr));
