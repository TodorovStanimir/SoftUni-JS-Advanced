function getPersons() {
    let persons = [];

    let a = class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() { return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})` }
    }
    let person = new a('Anna', 'Simpson', 22, 'anna@yahoo.com');
    persons.push(person);
    person = new a('SoftUni');
    persons.push(person);
    person = new a('Stephan', 'Johnson', 25);
    persons.push(person);
    person = new a('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    persons.push(person);
    return persons
}
console.log(getPersons());