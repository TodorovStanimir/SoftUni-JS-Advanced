module.exports = function printDeckOfCards(cards) {

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face
        }

        set face(newFace) {
            const corectFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

            if (!corectFaces.includes(newFace)) {
                throw new Error('Invalid card face: ' + newFace)
            } else {
                return this._face = newFace
            }
        }

        get suit() {
            return this._suit;
        }

        set suit(newSuit) {
            const corectSuits = ['C', 'D', 'H', 'S'];

            if (!corectSuits.includes(newSuit)) {
                throw new Error('Invalid card suit: ' + newSuit)
            } else {
                this._suit = newSuit;
            }
        }

        toString() {
            const SuitMapper = {
                'C': '\u2663',
                'D': '\u2666',
                'H': '\u2665',
                'S': '\u2660',
            }

            return this.face + SuitMapper[this.suit];
        }
    }

    let result = [];

    cards.forEach(card => {
        let tokens = card.split('');
        const suit = tokens.splice(tokens.length - 1, 1)[0];
        const face = tokens.join('');

        try {
            result.push(new Card(face, suit));
        } catch{
            console.log(`Invalid card: ${card}`);
            return;
        }
    });

    console.log(result.join(' '))
}

//  printDeckOfCards(['AS', '10D', 'KH', '2C']);
// printDeckOfCards(['1S']);