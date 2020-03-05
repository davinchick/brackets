module.exports = function check(str, bracketsConfig) {
    let bracketsArr = bracketsConfig.map(el => el.join(''));

    function reduceBrackets(string)  {
        let pattern = string;
        bracketsArr.forEach((el) => {
                pattern = pattern.replace(el, '');
            });
        if (pattern.length === 0) {return true;}
        if (string.length === pattern.length) {return false;}
        return reduceBrackets(pattern, bracketsArr);
    }
    return reduceBrackets(str, bracketsArr);
}

// --well, previous one solution is good enought, and operates with come in handy stacks, but only for brackets :/
// --exactly this one is works also with numbers
