function addRow() {
    if (document.getElementById('male').checked) {
        alert('You checked Male sex!!!')
    } else if (document.getElementById('female').checked) {
        alert('You checked Female sex!!!')
    } else {
        alert('Please check male or female sex!')
    }
}

function delRow() {
    alert('hoho')
}

function printYear() {
    let optionElements = document.getElementsByTagName('option');
    for (let line in optionElements) {
        if (optionElements[line].selected) { alert(`You choose ${optionElements[line].textContent} year!`) }
    }
}