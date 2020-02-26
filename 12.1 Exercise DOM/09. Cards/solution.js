function solve() {
   function getCard1(e1) {
      e1.target.setAttribute('src', 'images/whiteCard.jpg')
      document.getElementById('result').getElementsByTagName('span')[0].textContent = e1.target.name;
      if (document.getElementById('result').getElementsByTagName('span')[2].textContent !== '') { compareCards() };
   }

   function getCard2(e2) {
      e2.target.setAttribute('src', 'images/whiteCard.jpg')
      document.getElementById('result').getElementsByTagName('span')[2].textContent = e2.target.name;
      if (document.getElementById('result').getElementsByTagName('span')[0].textContent !== '') { compareCards() };
   }

   changeBorder = (input, currentCard, newBorder) => {
      input.map(card => {
         if (card.getAttribute('name') === currentCard)
            card.style.border = `${newBorder}`;
      });
   }

   function compareCards() {
      const card1 = document.getElementById('result').getElementsByTagName('span')[0].textContent.trim();
      const card2 = document.getElementById('result').getElementsByTagName('span')[2].textContent.trim();
      if (Number(card1) > Number(card2)) {
         changeBorder(Array.from(document.getElementById('player1Div').getElementsByTagName('img')), card1, '2px solid green')
         changeBorder(Array.from(document.getElementById('player2Div').getElementsByTagName('img')), card2, '2px solid red')
      } else if (Number(card2) > Number(card1)) {
         changeBorder(Array.from(document.getElementById('player2Div').getElementsByTagName('img')), card2, '2px solid green')
         changeBorder(Array.from(document.getElementById('player1Div').getElementsByTagName('img')), card1, '2px solid red')
      }
      let outputDivElem = document.getElementById('history');
      outputDivElem.innerHTML += `[${card1} vs ${card2}] `;
      document.getElementById('result').getElementsByTagName('span')[0].textContent = '';
      document.getElementById('result').getElementsByTagName('span')[2].textContent = '';
   }
   Array.from(document.getElementById('player1Div').getElementsByTagName('img')).map(card => card.addEventListener('click', getCard1));
   Array.from(document.getElementById('player2Div').getElementsByTagName('img')).map(card => card.addEventListener('click', getCard2));
}