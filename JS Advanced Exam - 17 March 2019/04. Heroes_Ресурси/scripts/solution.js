function solve() {
   const stat = { 'MAGESA': 70, 'MAGESD': 30, 'FIGHTERSA': 50, 'FIGHTERSD': 50, 'TANKSA': 20, 'TANKSD': 80 }
   const kingdomNames = ["castle", "dungeon", "fortress", "inferno", "necropolis", "rampart", "stronghold", "tower", "conflux"]
   const [rebuiltBut, joinBut, attackBut] = document.querySelectorAll('button');
   const pattern = new RegExp('[A-Za-z]{2,}', 'g');

   isKingNameOrCharsCorect = (king, kingElem, pattern) => {
      if (king.match(pattern)) {
         return true;
      } else {
         kingElem.value = '';
         return false;
      }
   }

   isKingdomCorrect = (kingdom, kingdomElem) => {
      if (kingdomNames.includes(kingdom)) {
         return true;
      } else {
         kingdomElem.value = '';
         return false;
      }
   }

   isKingomRebuild = (kingdom, bool) => {
      if (bool) {
         const kingomRebuildElement = document.getElementById(`${kingdom}`);
         if (kingomRebuildElement.getAttribute('style').split(': ')[1] === 'inline-block;') {
            return true;
         } else {
            return false;
         }
      } return false;
   }


   rebuiltBut.addEventListener('click', () => {
      const [kingdomElem, kingElem] = [...document.querySelectorAll('#kingdom input[type=text]')];
      let [kingdom, king] = [kingdomElem, kingElem].map(el => el.value);
      kingdom = kingdom.toLowerCase();

      if (isKingNameOrCharsCorect(king, kingElem, pattern) && isKingdomCorrect(kingdom, kingdomElem)) {
         const kingomElement = document.getElementById(`${kingdom}`);

         let h1Elem = document.createElement('h1');
         h1Elem.textContent = kingdom.toUpperCase();
         let divElem = document.createElement('div');
         divElem.setAttribute('class', 'castle');
         let h2Elem = document.createElement('h2');
         h2Elem.textContent = king.toUpperCase();
         let fieldSetElem = document.createElement('fieldset');
         let legElem = document.createElement('legent');
         legElem.textContent = 'Army';
         let p1Elem = document.createElement('p');
         p1Elem.textContent = 'TANKS - 0';
         let p2Elem = document.createElement('p');
         p2Elem.textContent = 'FIGHTERS - 0';
         let p3Elem = document.createElement('p');
         p3Elem.textContent = 'MAGES - 0';
         let divElemArmyOutput = document.createElement('div');
         divElemArmyOutput.setAttribute('class', 'armyOutput');
         fieldSetElem.appendChild(legElem)
         fieldSetElem.appendChild(p1Elem);
         fieldSetElem.appendChild(p2Elem);
         fieldSetElem.appendChild(p3Elem);
         fieldSetElem.appendChild(divElemArmyOutput);
         kingomElement.appendChild(h1Elem);
         kingomElement.appendChild(divElem);
         kingomElement.appendChild(h2Elem);
         kingomElement.appendChild(fieldSetElem);
         kingomElement.style.display = 'inline-block';
      };
   });

   joinBut.addEventListener('click', () => {
      const [characterElem, kingdomElem] = [...document.querySelectorAll('#characters input[type=text]')];
      let [chars, kingdom] = [characterElem, kingdomElem].map(el => el.value);
      kingdom = kingdom.toLowerCase();
      const army = [...document.querySelectorAll('#characters input[type=radio]')].filter(el => el.checked === true).map(el => el.value.toUpperCase())[0];

      if (isKingNameOrCharsCorect(chars, characterElem, pattern) && isKingomRebuild(kingdom, isKingdomCorrect(kingdom, kingdomElem)) && army) {
         const kingomRebuildElement = document.getElementById(`${kingdom}`);
         let pElement = [...kingomRebuildElement.querySelectorAll('fieldset p')].filter(p => p.textContent.split(' - ')[0] === army + 'S')[0];
         let [textpElement, count] = pElement.textContent.split(' - ');
         pElement.textContent = `${textpElement} - ${++count}`;
         let divElemArmyOutput = kingomRebuildElement.querySelectorAll('div[class=armyOutput]')[0];
         divElemArmyOutput.textContent += `${chars} `;
      }
   });

   attackBut.addEventListener('click', () => {
      const [attackElem, defElem] = [...document.querySelectorAll('#actions input[type=text]')];
      let [attackKing, defKing] = [attackElem, defElem].map(el => el.value.toLowerCase());
      let [isAttackKingValid, isAttackKingRebuild, isDefKingdomValid, isDefKingRebuild] = [true, true, true, true];

      if (!(kingdomNames.includes(attackKing))) {
         attackElem.value = ''
         isAttackKingValid = false;
      } else {
         const attackKingdomRebuildElement = document.getElementById(`${attackKing}`);
         if (!(attackKingdomRebuildElement.getAttribute('style').split(': ')[1] === 'inline-block;')) {
            isAttackKingRebuild = false;
         }
      }

      if (!(kingdomNames.includes(defKing))) {
         defElem.value = ''
         isDefKingdomValid = false;
      } else {
         const defKingdomRebuildElement = document.getElementById(`${defKing}`);
         if (!(defKingdomRebuildElement.getAttribute('style').split(': ')[1] === 'inline-block;')) {
            isDefKingRebuild = false;
         }
      }

      function getInfoForKingdom(kingdom, string) {
         return points = [...kingdom.querySelectorAll('fieldset p')].map(p => {
            let [army, count] = p.textContent.split(' - ');
            army += string;
            count = Number(count);
            return count * stat[army];
         }).reduce((a, b) => a + b, 0);

      }
      if (isAttackKingValid && isAttackKingRebuild && isDefKingdomValid && isDefKingRebuild) {
         const attackKingomElement = document.getElementById(`${attackKing}`);
         const defKingomElement = document.getElementById(`${defKing}`);
         let pointA = getInfoForKingdom(attackKingomElement, 'A');
         let pointB = getInfoForKingdom(defKingomElement, 'D');
         if (pointA > pointB) {
            defKingomElement.querySelector('h2').textContent = attackKingomElement.querySelector('h2').textContent;
         }
      }
   })
}
solve()




