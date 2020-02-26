function addItem() {
    const newItemTextElement = document.getElementById('newItemText');
    const newItemValueElement = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');
    const newItemText = newItemTextElement.value;
    const newItemValue = newItemValueElement.value;

    const newOptionElement = document.createElement('option');
    newOptionElement.value = newItemValue;
    newOptionElement.textContent = newItemText;
    selectElement.appendChild(newOptionElement);
    newItemTextElement.value='';
    newItemValueElement.value='';
}