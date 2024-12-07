function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    // Count apples that land on the house
    for (let i = 0; i < apples.length; i++) {
        let appleLanding = a + apples[i];
        if (appleLanding >= s && appleLanding <= t) {
            appleCount++;
        }
    }

    // Count oranges that land on the house
    for (let i = 0; i < oranges.length; i++) {
        let orangeLanding = b + oranges[i];
        if (orangeLanding >= s && orangeLanding <= t) {
            orangeCount++;
        }
    }

    // Print the results
    console.log(appleCount);
    console.log(orangeCount);
}
