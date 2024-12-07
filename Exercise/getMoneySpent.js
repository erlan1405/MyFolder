function getMoneySpent(b) {
    let keyboards = [40, 50, 60];
    let drives = [5, 8, 2];
    let maxSpent = -1;

    for (let i = 0; i < keyboards.length; i++) {

        for (let j = 0; j < drives.length; j++) {

            let total = keyboards[i] + drives[j];

            if (total <= b && total > maxSpent) {
                maxSpent = total;
            }
        }
    }
    return maxSpent;
}

console.log(getMoneySpent(5));
