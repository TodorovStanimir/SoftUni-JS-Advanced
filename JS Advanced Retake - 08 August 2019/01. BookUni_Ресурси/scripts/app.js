function solve() {
    let [bookEl, yearEl, priceEl] = Array.from(document.querySelectorAll('input'));
    let butAdd = document.querySelector('button');
    let totalProfitEl = Array.from(document.querySelectorAll('h1'))[1];
    let totalProfit = 0;
    let [oldBooksEl, newBooksEl] = Array.from(document.querySelectorAll('div[class=bookShelf]'));

    butAdd.addEventListener('click', function (e) {
        e.preventDefault();
        const title = bookEl.value;
        const year = Number(yearEl.value);
        const price = Number(priceEl.value);
        if (title !== '' && year > 0 && price > 0) {
            if (Number(yearEl.value) >= 2000) {
                createBook(true, title, year, price, newBooksEl)
            } else {
                createBook(false, title, year, price, oldBooksEl)
            }
        }
    })

    function createBook(isNew, title, year, price, shelf) {
        price = isNew ? price : 0.85 * price;
        let newDivEl = document.createElement('div');
        let newPEl = document.createElement('p');
        newByuBut = document.createElement('button');
        newDivEl.setAttribute('class', 'book')
        newPEl.textContent = `${title} [${year}]`;
        newByuBut.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
        newByuBut.addEventListener('click', function (e) {
            totalProfit += price;
            this.parentElement.parentElement.removeChild(this.parentElement)
            totalProfitEl.textContent = `Total Store Profit: ${totalProfit.toFixed(2)} BGN`
        })
        newDivEl.appendChild(newPEl);
        newDivEl.appendChild(newByuBut);
        if (isNew) {
            newMoveBut = document.createElement('button');
            newMoveBut.textContent = `Move to old section`;
            newMoveBut.addEventListener('click', function (e) {
                this.parentElement.parentElement.removeChild(this.parentElement);
                createBook(false, title, year, price, oldBooksEl)
            });
            newDivEl.appendChild(newMoveBut);
        }
        shelf.appendChild(newDivEl)
    }
}