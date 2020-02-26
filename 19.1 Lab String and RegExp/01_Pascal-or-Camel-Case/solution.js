function solve() {
  let inputText = document.getElementById('text').value.split(' ');
  let typeConverting = document.getElementById('naming-convention').value;
  let outputText = 'Error!';

  if (typeConverting === 'Camel Case') {
    outputText = inputText.map((word, index) => { return index === 0 ? `${word.toLowerCase()}` : `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}` })
      .join('');
  } else if (typeConverting === 'Pascal Case') {
    outputText = inputText.map(word => `${word[0].toUpperCase()}${word.substr(1).toLowerCase()}`)
      .join('');
  }

  document.getElementById('result').textContent = outputText;
}