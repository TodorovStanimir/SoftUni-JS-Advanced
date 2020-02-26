function solve() {
    const calculatorKeys = document.querySelector('.keys');
    let expressionElement = document.getElementById('expressionOutput');
    let resultElement = document.getElementById('resultOutput');
    const clearButton = document.querySelector('.clear');

    const buttons = {
        pressedButton: function (button) {
            let output = '';
            if (Number(button) >= 0 && Number(button) <= 9 || button === '.') {
                output += button;
            } else if (button === '+' || button === '-' || button === '/' || button === '*') {
                output += ` ${button} `;
            } else if (button === '=') {
                output = true;
            } else {
                output += '';
            }
            return output
        },
        calculate: function (el) {
            let operations = el.match(/[/*\-+]/g);
            let numbers = el.match(/\d+/g);
            let output = 'NaN';

            if (numbers.length - operations.length === 1) {
                output = numbers.reduce((reducer, el, ind) => {
                    let currentReducer = 0;
                    if (ind !== 0) {
                        currentReducer = eval(`${reducer}${operations[ind - 1]}${el}`);
                    } else {
                        currentReducer = el;
                    }
                    reducer = currentReducer;
                    return reducer;
                }, 0);
            } 
                return output;
        }
    }

    function press(ev) {
        if (ev.target.value !== '=') {
            expressionElement.textContent += buttons.pressedButton(ev.target.value);
        } else {
            resultElement.textContent = buttons.calculate(expressionElement.textContent);
        }
    }

    function clear() {
        expressionElement.textContent = '';
        resultElement.textContent = '';
    }

    clearButton.addEventListener('click', clear)
    calculatorKeys.addEventListener('click', press)
}

// function solve() {
//     let calculatorKeys = document.querySelector('.keys');
//     let expressionElement = document.getElementById('expressionOutput');
//     let resultElement = document.getElementById('resultOutput');
//     let clearButton = document.querySelector('.clear');

//     let buttons = {
//         pressedButton: function (button) {
//             let output = ''
//             if (Number(button) >= 0 && Number(button) <= 9 || button === '.') {
//                 output += button;
//             } else if (button === '+' || button === '-' || button === '/' || button === '*') {
//                 output += ` ${button} `
//             } else if (button === '=') {
//                 output = true;
//             } else {
//                 output += ''
//             }
//             return output
//         },
//         calculate: function (el) {
//             let [num1, operation, num2] = el.split(' ').filter(el => el !== '');
//             if (num2 !== undefined) {
//                 return eval(`${Number(num1)}${operation}${Number(num2)}`)
//             } else {
//                 return 'NaN'
//             }
//         }
//     }

//     function handler(ev) {
//         if (ev.target.value !== '=') {
//             expressionElement.textContent += buttons.pressedButton(ev.target.value);
//         } else {
//             resultElement.textContent = buttons.calculate(expressionElement.textContent);
//         }
//     }

//     function clear() {
//         expressionElement.textContent = '';
//         resultElement.textContent = '';
//     }

//     clearButton.addEventListener('click', clear)
//     calculatorKeys.addEventListener('click', handler)
// }