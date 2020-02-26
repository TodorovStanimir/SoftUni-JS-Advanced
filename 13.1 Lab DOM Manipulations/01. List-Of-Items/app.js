function addItem() {
    const inputElem = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    if (inputElem === undefined) {
        throw new Error('Missing input element!!!');
    }

    const newListLabel = inputElem.value;
    let newListEl = document.createElement('li');
    newListEl.innerHTML = newListLabel;
    ulElement.appendChild(newListEl);
    inputElem.value = '';
}