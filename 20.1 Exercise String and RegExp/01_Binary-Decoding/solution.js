function solve() {
	const calculatorWeight = (string) => String(string).split('').map(Number).reduce((a, b) => a + b, 0);
	const convertBinToDec = (bstr) => parseInt(bstr, 2);

	let binaryText = document.getElementById('input').value;
	let weight = calculatorWeight(binaryText);
	let resultText = [];

	while (weight > 9) {
		weight = calculatorWeight(weight);
	}

	binaryText = binaryText.substr(weight, binaryText.length - 2 * weight);

	while (binaryText.length) {
		resultText.push(binaryText.substr(0, 8));
		binaryText = binaryText.substr(8);
	}

	resultText = resultText.filter(bin => {
		const dec = convertBinToDec(bin);
		return (dec >= 65 && dec <= 90 || dec >= 97 && dec <= 122 || dec === 32) ? true : false;
	}).map(dec => String.fromCharCode(convertBinToDec(dec))).join('');

	document.getElementById('resultOutput').textContent = resultText;
}