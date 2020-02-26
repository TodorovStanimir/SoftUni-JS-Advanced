function solve() {
   const authorEl = document.getElementById('creator');
   const titleEl = document.getElementById('title');
   const categoryEl = document.getElementById('category');
   const contentEl = document.getElementById('content');
   const createBtn = document.getElementsByClassName('btn create')[0];
   const sectionEl = document.getElementsByTagName('section')[1];

   createBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const articleEl = document.createElement('article');
      const h1El = document.createElement('h1');
      h1El.textContent = titleEl.value;
      const p1El = document.createElement('p');
      const p2El = document.createElement('p');
      const str1El = document.createElement('strong');
      const str2El = document.createElement('strong');
      p1El.textContent = "Category:";
      p2El.textContent = "Creator:";
      str1El.textContent = categoryEl.value;
      str2El.textContent = authorEl.value;
      p1El.appendChild(str1El);
      p2El.appendChild(str2El);
      const p3El = document.createElement('p');
      p3El.textContent = contentEl.value;
      const divEl = document.createElement('div');
      divEl.setAttribute('class', 'buttons');
      const delBtn = document.createElement('button');
      const arhBtn = document.createElement('button');
      delBtn.setAttribute('class', 'btn delete');
      delBtn.textContent = "Delete";
      delBtn.addEventListener('click', delfunc);
      arhBtn.setAttribute('class', 'btn archive');
      arhBtn.textContent = "Archive";
      arhBtn.addEventListener('click', arhfunc);
      divEl.appendChild(delBtn);
      divEl.appendChild(arhBtn);
      articleEl.appendChild(h1El);
      articleEl.appendChild(p1El);
      articleEl.appendChild(p2El);
      articleEl.appendChild(p3El);
      articleEl.appendChild(divEl);
      sectionEl.appendChild(articleEl);
      authorEl.value = '';
      titleEl.value = '';
      categoryEl.value = '';
      contentEl.value = '';

      function delfunc(ev) {
         sectionEl.removeChild(ev.target.parentElement.parentElement);
      }

      function arhfunc(ev) {
         const ulEl = document.getElementsByTagName('ul')[0];
         const title = h1El.textContent;
         const liEl = document.createElement('li');
         liEl.textContent = title;
         ulEl.appendChild(liEl);
         const liElements = Array.from(ulEl.getElementsByTagName('li')).sort((a, b) => a.textContent.localeCompare(b.textContent));
         ulEl.innerHTML = '';
         liElements.forEach(el => ulEl.appendChild(el));
         sectionEl.removeChild(ev.target.parentElement.parentElement);
      }

   })
}
