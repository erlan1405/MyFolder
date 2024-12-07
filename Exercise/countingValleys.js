function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            altitude += 1;
        }
        else if (path[i] === "D") {
            altitude -= 1;
        }

        if (altitude === 0 && path[i] === "U") {
            valleys += 1;
        }
    }
    return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
