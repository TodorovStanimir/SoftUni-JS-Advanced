function functionalCalculator(num1, num2, operator) {
    let result;
    function sumirane(num1, num2) {
        return num1 + num2
    }
    function izvazhdane(num1, num2) {
        return num1 - num2
    }
    function delene(num1, num2) {
        return num1 / num2
    }
    function umnozhenie(num1, num2) {
        return num1 * num2
    }
    switch (operator) {
        case '+': 
        result = sumirane(num1, num2);
        break;
        case '-': 
        result = izvazhdane(num1, num2);
        break;
        case '/': 
        result = delene(num1, num2);
        break;
        case '*': 
        result = umnozhenie(num1, num2);
        break;
    }
    console.log(result)
}
functionalCalculator(2, 4, '+');
functionalCalculator(1, -1, '-');
functionalCalculator(3, 3, '/');