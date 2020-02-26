function solve() {
   document.querySelector('button').addEventListener('click', findElements = () => {
      let inputElement = document.getElementById('searchField');
      let searchedText = inputElement.value;
      inputElement.value = null;
      let bodyElements = document.querySelectorAll('tbody tr');
      [...bodyElements].map(el => el.removeAttribute('class'));
      if (searchedText !== '') {
         [...bodyElements].map(row => {
            [...row.querySelectorAll('td')].map(cell => { if (cell.textContent.includes(searchedText)) { cell.parentElement.setAttribute('class', 'select') } })
         });;
      }
   })
}