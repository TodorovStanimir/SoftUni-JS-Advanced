function solve() {
    let [bookEl, yearEl, priceEl] = Array.from(document.querySelectorAll('input'));
    let addBut = document.querySelector('button')
    let [oldBookEl, newBookEl] = Array.from(document.getElementsByClassName('bookShelf'))
    let totalPriceEl = document.querySelectorAll('h1')[1];
    let totalPrice = 0;

    addBut.addEventListener('click', function (even) {
        even.preventDefault()
        let book = String(bookEl.value);
        let year = Number(yearEl.value);
        let price = Number(priceEl.value);
        let textPar = `${book} [${year}]`;
        if (book !== '' && year > 0 && price > 0) {
            (year < 2000)
                ? createNewEl(false, textPar, 0.85 * price, oldBookEl)
                : createNewEl(true, textPar, price, newBookEl);
        }
    })

    function createNewEl(isNewBook, textPar, price, section) {

        let newDivEl = document.createElement('div');
        let newPEl = document.createElement('p');
        let newButEl = document.createElement('button');

        newDivEl.setAttribute('class', 'book');
        newPEl.textContent = textPar;
        newButEl.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
        newButEl.addEventListener('click', buy)

        newDivEl.appendChild(newPEl);
        newDivEl.appendChild(newButEl);

        if (isNewBook) {
            let newBut2 = document.createElement('button');
            newBut2.textContent = 'Move to old section';
            newBut2.addEventListener('click', moveToOldSection)
            newDivEl.appendChild(newBut2);
        }

        section.appendChild(newDivEl);

        function buy(even) {
            even.preventDefault();
            totalPrice += price;
            totalPriceEl.textContent = `Total Store Profit: ${totalPrice.toFixed(2)} BGN`;
            even.target.parentElement.parentElement.removeChild(even.target.parentElement);
        }

        function moveToOldSection(even) {
            even.preventDefault();
            price = 0.85 * price;
            even.target.previousElementSibling.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            oldBookEl.appendChild(even.target.parentElement);
            even.target.parentElement.removeChild(even.target);
        }
    }
}