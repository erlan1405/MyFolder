function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' '.repeat(n - i) + '#'.repeat(i);
        console.log(row);
    }
}

staircase(4);
