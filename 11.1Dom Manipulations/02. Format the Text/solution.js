function solve() {
  let text = document.getElementById('input').textContent
    .split('.')
    .filter(el => el !== '')
    .reduce((agregator, el, ind, arr) => {
      agregator.push(el.concat('.'));
      if ((ind + 1) % 3 === 0 || ind + 1 === arr.length) {
        let newPElement = document.createElement('p');
        newPElement.innerHTML = agregator.join(' ');
        document.getElementById('output').appendChild(newPElement);
        agregator = [];
      }
      return agregator;
    }, []);
}