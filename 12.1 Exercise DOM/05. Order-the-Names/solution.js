function solve() {
    document.querySelector('button').addEventListener('click', function handler() {
        let inputElement = document.querySelector('input');
        if (inputElement.value !== '') {
            let name = inputElement.value.split('').map((el, ind) => ind === 0 ? el.toUpperCase() : el.toLowerCase()).join('');
            let indexFirstChar = name.toUpperCase().charCodeAt(0) - 65;
            let olElem = document.getElementsByTagName('ol')[0].children[indexFirstChar];
            (olElem.textContent === '') ? olElem.textContent += name : olElem.textContent += ', ' + name;
            inputElement.value = null;
        }
    });
}