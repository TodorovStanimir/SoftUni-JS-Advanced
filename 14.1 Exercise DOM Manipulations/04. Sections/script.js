function create(words) {
   const contentElement = document.getElementById('content');
   words.forEach(el => {
      const newDivElement = document.createElement('div');
      const newPElement = document.createElement('p');
      newPElement.textContent = el;
      newPElement.style.display = 'none';
      newDivElement.appendChild(newPElement);
      newDivElement.addEventListener('click', () => { newPElement.style.display = 'block' });
      contentElement.appendChild(newDivElement);
   });
}