function validate() {
    let inputElement = document.getElementById('email');
    inputElement.addEventListener('change', validateEmail, false);

    function validateEmail(e) {
        let pattern = /[a-z]+@[a-z]+[.]{1}[a-z]{2,}/g;
        if (e.target.value.match(pattern)) {
           e.target.classList.remove('error');
        } else {
            e.preventDefault();
            e.target.classList.add('error');
            // e.preventDefault();
        }
    }
}