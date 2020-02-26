function getDollarFormatter(formatter) {
    function dollarFormatter(value) {
    return formatter(',', '$', true, value);
    };
    return dollarFormatter;
    }
function formated(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

const dollarFormatter = getDollarFormatter(formated);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); //