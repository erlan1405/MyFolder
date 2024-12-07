function splitBill(bill, k, b) {
    // Calculate the total cost of items that Anna eats (excluding the item at index k)
    const totalSharedCost = bill.reduce((sum, cost, index) => {
        if (index !== k) {
            return sum + cost;
        }
        return sum;
    }, 0);

    // Calculate the fair share for Anna (half of the total shared cost)
    const annaShare = totalSharedCost / 2;

    // Check if Brian charged her correctly
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare); // How much Brian owes Anna
    }
}
