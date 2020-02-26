function solve() {
  let siteDocuments = document.getElementsByClassName('link-1');
  addClicked(siteDocuments[0]);
  addClicked(siteDocuments[1]);
  addClicked(siteDocuments[2]);
  addClicked(siteDocuments[3]);
  addClicked(siteDocuments[4]);
  addClicked(siteDocuments[5]);
  function addClicked(item) {
    item.addEventListener('click', (e) => {
      let paragraphElement = e.currentTarget.getElementsByTagName('p')[0];
      let text = paragraphElement.textContent;
      let clicks = Number(text.split(' ')[1]);
      let newText = text.replace(clicks, clicks + 1)
      paragraphElement.textContent = newText;
    });
  }
}