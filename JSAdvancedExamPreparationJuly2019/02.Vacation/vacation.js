class Vacation {
    //test 1
    constructor(organizer, destination, budget) {
        this.organizer = String(organizer);
        this.destination = String(destination);
        this.budget = Number(budget);
        this.kids = {};
    }
    //test 8
    get numberOfChildren() {
        return Object.keys(this.kids).map(key => this.kids[key].length).reduce((a, b) => a += b)
    }
    //test 2, 3, 4, 5
    registerChild(name, grade, budget) {
        //test 3
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        //not checking
        if (!this.kids[grade]) {
            this.kids[grade] = [];
        }
        if (this.kids[grade].find(kid => kid.split('-')[0] === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }
        //test 2, 4, 5
        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade];
    }
    //test 6, 7
    removeChild(name, grade) {
        return (!(grade in this.kids) || this.kids[grade].filter(child => child.split('-')[0] === name).length === 0)
            ? `We couldn't find ${name} in ${grade} grade.`
            : this.kids[grade] = this.kids[grade].filter(child => child.split('-')[0] !== name);
    }
    //test 9
    toString() {
        return Object.entries(this.kids).length > 0
            ? Object.entries(this.kids).reduce((reducer, cur) => {
                reducer += `Grade: ${cur[0]}\n`;
                reducer += cur[1].map((kid, ind) => `${ind + 1}. ${kid}`).join('\n') + '\n';
                return reducer
            }, `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`)
            : `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
    }
}

//Zero test #1
// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));
//Zero test #2
// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);
// console.log(vacation.removeChild('Gosho', 9));
// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);
// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000))
//Zero test #3
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());




