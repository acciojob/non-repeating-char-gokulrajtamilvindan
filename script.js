function firstNonRepeatedChar(str) {
    // Write your code here
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexof(char) === i && str.indexof(char, i + 1) === -1) {
            return char;
        }
    }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 