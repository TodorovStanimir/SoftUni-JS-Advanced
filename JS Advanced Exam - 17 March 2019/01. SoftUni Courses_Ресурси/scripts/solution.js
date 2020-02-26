function solve() {
   let prices = {
      'JS-Fundamentals': 170,
      'JS-Advanced': 180,
      'JS-Applications': 190,
      'JS-Web': 490,
   }
   let names = {
      'js-fundamentals': 'JS-Fundamentals',
      'js-advanced': 'JS-Advanced',
      'js-applications': 'JS-Applications',
      'js-web': 'JS-Web',
      'HTML and CSS': 'HTML and CSS',
   }

   document.querySelector('button').addEventListener('click', (el) => {
      let choisedCoursies = [...document.querySelectorAll("[type='checkbox']")]
         .filter(el => el.checked === true)
         .map(el => names[el.value]);

      let price = choisedCoursies.reduce((totPrice, course) => totPrice + prices[course], 0)

      if (choisedCoursies.includes("JS-Advanced") && choisedCoursies.includes("JS-Fundamentals")) {
         prices['JS-Advanced'] = 0.90 * prices['JS-Advanced'];
      }

      if (choisedCoursies.includes("JS-Fundamentals") && choisedCoursies.includes("JS-Advanced") && choisedCoursies.includes("JS-Applications")) {
         prices['JS-Advanced'] = 0.94 * prices['JS-Advanced'];
         prices['JS-Fundamentals'] = 0.94 * prices['JS-Fundamentals'];
         prices['JS-Applications'] = 0.94 * prices['JS-Applications']
      }

      if (document.querySelectorAll('input[type=radio]')[1].checked) {
         choisedCoursies.forEach(course => prices[course] = prices[course] - 0.06 * prices[course])
      }

      price = choisedCoursies.reduce((totPrice, course) => (totPrice + prices[course]), 0);
      price = Math.floor(price)

      if (choisedCoursies.includes("JS-Fundamentals") && choisedCoursies.includes("JS-Advanced") &&
         choisedCoursies.includes("JS-Applications") && choisedCoursies.includes("JS-Web")) {
         choisedCoursies.push('HTML and CSS')
      }

      choisedCoursies.forEach(el => {
         let ulElement = document.getElementsByClassName('courseBody')[1].querySelector('ul');
         let liElement = document.createElement('li');
         liElement.innerHTML = el;
         ulElement.appendChild(liElement);
      })
      document.getElementsByClassName('courseFoot')[1].getElementsByTagName('p')[0].textContent = `Cost: ${price.toFixed(2)} BGN`
   })
}

solve();