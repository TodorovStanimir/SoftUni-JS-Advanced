function subtract() {
    const firstElement = document.getElementById('firstNumber');
    firstElement.disabled = false;
    const secondElement = document.getElementById('secondNumber');
    secondElement.disabled = false;
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const resultOperation = Number(firstNumber) - Number(secondNumber);
    document.getElementById('result').textContent = resultOperation;

}