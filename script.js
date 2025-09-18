function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // check if first occurrence is at i and no more occurrences after i
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null; // no non-repeated character
}

const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));