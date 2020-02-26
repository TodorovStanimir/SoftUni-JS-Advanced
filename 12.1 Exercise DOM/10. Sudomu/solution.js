function solve() {
    const [checkButton, clearButton] = document.getElementsByTagName('button');

    const getInput = () => { return [...document.getElementsByTagName('input')].map(el => Number(el.value) || 0) }

    const findSudomuNumber = (length) => {
        let sudomuNumber = 0;
        while (length > 0) { sudomuNumber += length; length-- };
        return sudomuNumber;
    }

    const findSumRows = (userInput, lengthRow) => {
        return userInput.reduce((reducer, el, ind) => {
            if ((ind + 1) % lengthRow !== 0) {
                reducer[1] += el;
            } else {
                reducer[1] += el;
                reducer[0].push(reducer[1]);
                reducer[1] = 0;
            }
            return reducer;
        }, [[], 0]).slice(0, 1);
    }

    const findSumColumns = (userInput, lengthRow) => {
        let newUserInput = []
        for (let i = 0; i < lengthRow; i++) {
            let row = []
            for (let y = 0; y < userInput.length; y += lengthRow) {
                row.push(userInput[i + y])
            }
            newUserInput = newUserInput.concat(row);
        }
        return newUserInput.reduce((reducer, el, ind) => {
            if ((ind + 1) % lengthRow !== 0) {
                reducer[1] += el;
            } else {
                reducer[1] += el;
                reducer[0].push(reducer[1]);
                reducer[1] = 0;
            }
            return reducer;
        }, [[], 0]).slice(0, 1);
    }

    changeTableBorder = (styleBorder) => { document.getElementsByTagName('table')[0].style.border = `${styleBorder}`; }

    clearTableBorder = () => { document.getElementsByTagName('table')[0].removeAttribute('style', 'border'); }

    clearResult = () => {
        document.getElementById('check').querySelector('p').innerHTML = '';
        document.getElementById('check').querySelector('p').removeAttribute('style', 'color');
    }

    printResult = (textResult, color) => {
        document.getElementById('check').querySelector('p').innerHTML = textResult;
        document.getElementById('check').querySelector('p').style.color = color;
    }

    const clearContestTable = () => { [...document.getElementsByTagName('input')].map(el => el.value = '') }

    const checkTable = () => {
        const userInput = getInput();
        const lengthRow = Math.sqrt(userInput.length);
        const sudomuNumber = findSudomuNumber(lengthRow);
        let arrSumsRows = findSumRows(userInput, lengthRow);
        let arrSumsColums = findSumColumns(userInput, lengthRow);
        if (!arrSumsRows.concat(arrSumsColums).flat()
            .map(el => el === sudomuNumber).includes(false)) {
            changeTableBorder('2px solid green');
            printResult('You solve it! Congratulations!', 'green')
        } else {
            changeTableBorder('2px solid red');
            printResult('NOP! You are not done yet...', 'red')
        }
    }

    const clearTable = () => {
        clearTableBorder();
        clearResult();
        clearContestTable();
    }

    checkButton.addEventListener('click', checkTable);
    clearButton.addEventListener('click', clearTable);
}