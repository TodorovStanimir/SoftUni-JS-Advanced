class Vacation {
    //correct constructor is test 1
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() { return Object.values(this.kids).reduce((a, b) => a + b.length, 0) }

    budgetIsNotEnought(budget) { return (budget < this.budget) ? true : false };

    childrenExist(grade, name) { return this.kids[grade].findIndex(k => k.startsWith(name)) !== -1 ? true : false };

    gradeExist(grade) { return this.kids[grade] ? true : false };

    indexOfChildren(grade, name) { return this.kids[grade].findIndex(k => k.startsWith(name)) }

    registerChild(name, grade, budget) {
        //test 2
        if (this.budgetIsNotEnought(budget) === true) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        //test 3
        if (this.gradeExist(grade) === true && this.childrenExist(grade, name) === true) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }
        //test 4 and 5
        if (this.gradeExist(grade) === false) {
            this.kids[grade] = [];
        }

        this.kids[grade].push(`${name}-${budget}`)
        return this.kids[grade];
    }

    removeChild(name, grade) {
        //test 6
        if (this.gradeExist(grade) == false || this.childrenExist(grade, name) == false) {
            return `We couldn't find ${name} in ${grade} grade.`
        }
        //test 7
        this.kids[grade].splice(this.indexOfChildren(grade, name), 1);
        return this.kids[grade];
    }

    toString() {
        //test 9
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
        //test 8
        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        Object.entries(this.kids).map(grade => {
            result += `Grade: ${grade[0]}\n`;
            grade[1].map((kid, ind) => result += `${ind + 1}. ${kid}\n`);
        });

        return result;
    }
}
// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);
// console.log(vacation.removeChild('Gosho', 9));
// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);
// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000))


// let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);
// vacation.registerChild('Gosho', 12, 3400);
// vacation.registerChild('Pesho', 12, 400);
// vacation.registerChild('Pesho', 12, 400);
// vacation.registerChild('Skaro', 11, 400);
// vacation.registerChild('Gosho', 11, 3444);
// console.log(vacation.toString());

let vacation = new Vacation('Miss. Elizabeth', 'Dubai', 2000);
vacation.registerChild('Mitko', 10, 5500)
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());