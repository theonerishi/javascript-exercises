function isAlpha(char) {
    return /^[\w]$/.test(char);
}

const palindromes = function (word) {
    let str = '';
    for (let i = 0; i < word.length; i++) {
        if(isAlpha(word[i])) {
            str += word[i];
        }
    }
    for (let i = 0, mid = Math.floor(str.length); i < mid; i++) {
        if (str[i].toLowerCase() != str[str.length-i-1].toLowerCase() && isAlpha(str[i]) && isAlpha(str[str.length-i-1])) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
