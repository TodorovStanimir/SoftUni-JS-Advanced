function focus() {
    let inputSections = [...document.getElementsByTagName('input')];
    inputSections.forEach(element => {
        element.addEventListener('focus', addClassFocused);
        element.addEventListener('blur', removeClassFocused);
    });

    function addClassFocused(e) {
        e.currentTarget.parentElement.classList.add('focused');
    }

    function removeClassFocused(e) {
        e.currentTarget.parentElement.classList.remove('focused');
    }
}