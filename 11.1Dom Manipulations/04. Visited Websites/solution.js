function solve() {
  let divElements = document.getElementsByClassName('middled')[0].getElementsByTagName('div');
  for (let element of divElements) {
    element.addEventListener('click', () => {
      let pElement = element.querySelector('p');
      let textPElement = pElement.textContent;
      let timesVisit = Number(textPElement.split(' ')[1]);
      pElement.textContent = textPElement.replace(timesVisit, timesVisit+1);
    })
  }
}

