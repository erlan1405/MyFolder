function timeConversion(s) {
    const period = s.slice(-2);
    let hour = parseInt(s.slice(0, 2), 10);
    const minute = s.slice(3, 5);            
    const second = s.slice(6, 8);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else if (period === "PM") {
        if (hour !== 12) {
            hour += 12;
        }
    }
    const hourFormatted = hour.toString().padStart(2, '0');
    return `${hourFormatted}:${minute}:${second}`;
}

console.log(timeConversion('03:00:00PM'));
