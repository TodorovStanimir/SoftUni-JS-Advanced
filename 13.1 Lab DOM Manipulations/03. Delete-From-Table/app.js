function deleteByEmail() {
    const inputElem = document.querySelector('input');
    const outputElem = document.getElementById('result');
    const searchedEmail = inputElem.value;
    let isNotFoundEmail = true;

    if (searchedEmail.match(/\w+@\w+.[\w]+/gi)) {
        [...document.getElementsByTagName('tr')].map(row => {
            [...row.getElementsByTagName('td')].map(el => {
                if (el.textContent === searchedEmail) {
                    row.remove();
                    isNotFoundEmail = false;
                }
            })
        })
    }

    (isNotFoundEmail) ? outputElem.innerHTML = 'Not found.' : outputElem.innerHTML = 'Deleted.';
}