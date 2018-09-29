module.exports = function check(str, bracketsConfig) {

    let brackets = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    let result = true;
    let index = -1;

    while (str.length !== 0 && result === true) {
        result = false;

        for (let i = 0; i < brackets.length; i++) {
            index = str.indexOf(brackets[i]);
            if (index !== -1) {
                str = str.substring(0, index) + str.substring(index + 2, str.length);
                result = true;
            }
        }
    }
    return str.length === 0;
}
