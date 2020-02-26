function solve() {
    let stringForDividing = document.getElementById('text').value;
    let lengthOfDividing = Number(document.getElementById('number').value);
    let output = ''

    if (stringForDividing.length % lengthOfDividing !== 0) {
        (stringForDividing.length < lengthOfDividing)
            ? stringForDividing += stringForDividing.substr(0, lengthOfDividing - stringForDividing.length)
            : stringForDividing += stringForDividing.substr(0, lengthOfDividing - stringForDividing.length % lengthOfDividing);
    }

    for (let i = 0; i < stringForDividing.length; i += lengthOfDividing) {
        output += stringForDividing.substr(i, lengthOfDividing) + ' ';
    }

    document.getElementById('result').textContent = output.trim();
}