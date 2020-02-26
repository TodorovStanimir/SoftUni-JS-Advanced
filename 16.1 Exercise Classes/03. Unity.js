class Rat {
    constructor(name) {
        this.name = name;
        this.Rats = [];
    }
    toString() {
        return (this.Rats.length === 0)
            ? this.name
            : `${this.name}\n${this.Rats.map(rat => `##${rat}`).join('\n')}`;
    };
    getRats() { return this.Rats };
    unite = (newRat) => { if (newRat instanceof Rat) { this.Rats.push(newRat) } };
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
