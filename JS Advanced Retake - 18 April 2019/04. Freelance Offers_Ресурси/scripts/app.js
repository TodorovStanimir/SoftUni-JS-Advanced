function solve() {
    let formForCreatingOffers = document.getElementById('create-offers');
    formForCreatingOffers.style.display = 'none';
    let loginBut = document.getElementById('loginBtn');
    let createOfferBut = document.getElementById('create-offer-Btn');
    let inputElement = document.getElementById('username');
    let notificationElement = document.getElementById('notification');
    let offerNameElem = document.getElementById('offerName');
    let companyNameElem = document.getElementById('company');
    let descriptionElem = document.getElementById('description');
    let activeOffers = document.getElementById('offers');

    loginBut.addEventListener('click', function (even) {
        even.preventDefault();
        const userName = inputElement.value;
        if (loginBut.textContent === 'Login' && userName.length >= 4 && userName.length <= 10) {
            formForCreatingOffers.style.display = 'block';
            inputElement.value = `Hello, ${userName}!`
            inputElement.classList.add('border-0', 'bg-light');
            inputElement.disabled = true;
            loginBut.textContent = 'Logout'
        } else if (loginBut.textContent === 'Logout') {
            formForCreatingOffers.style.display = 'none';
            inputElement.value = ''
            inputElement.classList.remove('bg-light', 'border-0');
            inputElement.disabled = false;
            loginBut.textContent = 'Login'
        } else {
            notificationElement.textContent = 'The username length should be between 4 and 10 characters.'
        }
    })

    createOfferBut.addEventListener('click', function (e) {
        e.preventDefault();
        const offerName = offerNameElem.value;
        const companyName = companyNameElem.value;
        const descript = descriptionElem.value;

        if (offerName && companyName && descript) {
            let newDivElem = activeOffers.lastElementChild.lastElementChild.cloneNode(true);
            newDivElem.getElementsByClassName('card-header')[0].textContent = offerName;
            newDivElem.getElementsByTagName('h5')[0].textContent = companyName;
            newDivElem.getElementsByTagName('p')[0].textContent = descript;
            activeOffers.appendChild(newDivElem)
        }
        offerNameElem.value = '';
        companyNameElem.value = '';
        descriptionElem.value = '';
    })
}
solve()