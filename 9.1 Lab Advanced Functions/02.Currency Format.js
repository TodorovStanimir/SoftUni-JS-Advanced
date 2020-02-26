function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2)
    if (symbolFirst) {
        return symbol + ' ' + result;
    }
    else {
        return result + ' ' + symbol;
    };
}

//using command bind
function result(currencyFormatter) {
    return currencyFormatter.bind(undefined, ',', '$', true);
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));
console.log('1---------------------')

//using handMadeFunction
function result1(formatter) {
    function dollarFormatter(value) {
        return formatter(',', '$', true, value);
    };
    return dollarFormatter;
}

let dollarFormatter1 = result1(currencyFormatter);
console.log(dollarFormatter1(5345));   // $ 5345,00
console.log(dollarFormatter1(3.1429)); // $ 3,14
console.log(dollarFormatter1(2.709));
console.log('2---------------------')


function result2(abv) {
    function abc(value) {
        return abv(',', '$', true, value);
    }
    return abc
}

let dollarFormatter2 = result2(currencyFormatter);
console.log(dollarFormatter2(5345));   // $ 5345,00
console.log(dollarFormatter2(3.1429)); // $ 3,14
console.log(dollarFormatter2(2.709));


