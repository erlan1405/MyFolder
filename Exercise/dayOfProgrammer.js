function dayOfProgrammer(year) {
    if (year < 1918) { // Julian calendar
        if (year % 4 === 0) {
            // Leap year
            return `12.09.${year}`;
        } else {
            // Common year
            return `13.09.${year}`;
        }
    } else if (year > 1918) { // Gregorian calendar
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            // Leap year
            return `12.09.${year}`;
        } else {
            // Common year
            return `13.09.${year}`;
        }
    } else { // year === 1918 (Transition year)
        return `26.09.${year}`;
    }
}
