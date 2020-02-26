function solve() {
  let inputText = document.getElementById('text').value.split(' ').filter(el => el !== '');
  let resultElement = document.getElementById('result');
  let output = [];
  let lastWord = '';

  for (let word of inputText) {
    (Number(word))
      ? lastWord += String.fromCharCode(word)
      : output.push(word.split('').map(char => char.charCodeAt()).join(' '))
  }
  output.push(lastWord);

  output.forEach(row => {
    let newPElement = document.createElement('p');
    newPElement.innerHTML = row;
    resultElement.appendChild(newPElement);
  });
}