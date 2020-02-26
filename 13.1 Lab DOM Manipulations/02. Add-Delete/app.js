function addItem() {
    const inputElem = document.getElementById('newText');
    const ulElements = document.getElementById('items');

    if (inputElem === undefined || ulElements === undefined) {
        throw new Error('Missing input element!!!');
    }

    const newListLabel = inputElem.value;

    if (newListLabel !== '') {
        let newListEl = document.createElement('li');
        let newAElement = document.createElement('a');
        newListEl.innerHTML = newListLabel;
        newAElement.setAttribute('href', '#');
        newAElement.innerHTML = '[Delete]'
        newListEl.appendChild(newAElement);
        ulElements.appendChild(newListEl);
        inputElem.value = '';
        ulElements.addEventListener('click', deleteLiElement)
    }

    function deleteLiElement(e) {
        e.target.parentNode.remove()
    }
}