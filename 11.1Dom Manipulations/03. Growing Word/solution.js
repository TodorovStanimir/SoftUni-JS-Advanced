function growingWord() {
  let pElement = document.querySelector('#exercise p');
  let colorElements = document.getElementById('colors').getElementsByTagName('div')

  if (pElement === null || colorElements === null) {
    throw new Error('Missing pElement!!');
  }

  const colors = [...colorElements].map(el => el.textContent.toLowerCase());

  let newColor = colors[colors.indexOf(pElement.style.color) + 1] || colors[0]
  let sizeFont = pElement.style.fontSize.slice(0, -2) * 2 || 2;

  pElement.style.fontSize = `${sizeFont}px`;
  pElement.style.color = newColor;
}