a = [1, 3, 5];
b = [2, 3, 2];


function compareArray(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice += 1;  
        }
        else if (a[i] < b[i]) {
            bob += 1
        }   
    }
    return [alice, bob];
} 

console.log(compareArray(a, b));
