function factorial(n) {
    let num = 1;

    for (let i = 2; i <= n; i++) {
        num *= i;
    }
    return num;
}

console.log(factorial(2));
