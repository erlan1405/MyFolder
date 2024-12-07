let str = "mississippi";
let char_str = {};


for (let char of str) {
   char_str[char] = (char_str[char] || 0) + 1;
}

console.log(char_str);
