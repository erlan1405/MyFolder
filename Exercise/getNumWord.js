function getNumWord(str) {
    let char_str = {};

    for (let char of str) {
        char_str[char] = (char_str[char] || 0) + 1;
    }
    return char_str;
}

console.log(getNumWord('Erlan'));
