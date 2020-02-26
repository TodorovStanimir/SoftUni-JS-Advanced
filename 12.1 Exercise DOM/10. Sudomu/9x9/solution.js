function solve() {
    let [checkButton, clearButton] = document.getElementsByTagName('button');

    checkButton.addEventListener('click', () => {
        let result = [];
        let controlNumber = 0;
        let rows = document.querySelector('tbody').getElementsByTagName('tr');
        for (let row = 0; row < rows.length; row++) {
            controlNumber += 1 + row;
            let cols = rows[row].getElementsByTagName('td');
            let sumRow = 0;
            for (let col = 0; col < cols.length; col++) {
                sumRow += Number(cols[col].querySelector('input').value);
            }
            result.push(sumRow);
        }

        for (let col = 0; col < rows.length; col++) {
            let sumCol = 0;
            for (let row = 0; row < rows.length; row++) {
                sumCol += Number(rows[row].getElementsByTagName('td')[col].querySelector('input').value);
            }
            result.push(sumCol);
        }
        result = result.filter(el => el !== controlNumber);
        if (result.length === 0) {
            document.querySelector('table').setAttribute('style', 'border:2px solid green');
            document.getElementById('check').querySelector('p').textContent = 'You solve it! Congratulations!';
            document.getElementById('check').querySelector('p').setAttribute('style', 'color:green');
        } else {
            document.querySelector('table').setAttribute('style', 'border:2px solid red');
            document.getElementById('check').querySelector('p').textContent = 'NOP! You are not done yet...';
            document.getElementById('check').querySelector('p').setAttribute('style', 'color:red');
        }
    });

    clearButton.addEventListener('click', () => {
        let rows = document.querySelector('tbody').getElementsByTagName('tr');
        for (let row = 0; row < rows.length; row++) {
            let cols = rows[row].getElementsByTagName('td');
            for (let col = 0; col < cols.length; col++) {
                cols[col].querySelector('input').value = '';
            }
        }
        document.querySelector('table').removeAttribute('style');
        document.getElementById('check').querySelector('p').textContent = '';
        document.getElementById('check').querySelector('p').removeAttribute('style');
    })
}