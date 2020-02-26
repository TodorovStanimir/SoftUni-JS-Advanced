function solve() {
    const converter = {
        'binary': function (number) { return number.toString(2) },
        'hexadecimal': function (number) { return number.toString(16).toUpperCase() }
    }

    let selectElement = document.getElementById('selectMenuTo');
    selectElement.appendChild(document.createElement('option'));
    selectElement.children[0].value = 'binary';
    selectElement.children[1].value = 'hexadecimal';
    selectElement.children[0].textContent = 'Binary';
    selectElement.children[1].textContent = 'Hexadecimal';

    function handler() {
        if (document.getElementById('input').value) {
            let number = Number(document.getElementById('input').value);
            let selectedOption = document.getElementById('selectMenuTo').value;
            document.getElementById('result').value = converter[selectedOption](number);
        }
    }
    document.querySelector('button').addEventListener('click', handler);
}