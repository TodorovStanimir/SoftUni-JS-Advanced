function solve() {
  let text = document.getElementById('input').textContent;
  let arr = text.split('.').filter(el => el).map(el => el.trim()).map(el => ' ' + el + '.');
  for (let index = 0; index < arr.length; index += 3) {
    let newParagraph = arr.slice(index, index + 3).join(' ');
    let newParagraphsList = document.getElementById('output');
    let p = document.createElement('p');
    p.textContent = newParagraph;
    newParagraphsList.appendChild(p);
  }
}