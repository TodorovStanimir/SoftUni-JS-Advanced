function mathOperation(num1, num2, operation) {
    return  eval(`${num1}${operation}${num2}`);
}


console.log(mathOperation(5, 6, '+'));