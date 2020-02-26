//Използване на bind за взаимстване на методи
var users = {
    data: [
        { name: 'John Smith' },
        { name: 'Ellen Simons' }
    ],

    showFirst: function () {
        console.log(this.data[0].name);
    },

    showSecond: function () {
        console.log(this.data[1].name);
    }

}

var cars = {
    data: [
        { name: 'Mitzubisi Lancer' },
        { name: 'Chevrolet Impala' }
    ]
}

cars.showFirst = users.showFirst.bind(cars);
cars.showFirst();

var people = {
    data: [
        { name: 'Stanimir Todorov' },
        { name: 'Miroslav Todorov' }
    ]
}

people.showSecond = users.showSecond.bind(people);
people.showFirst = users.showFirst.bind(people);
people.showFirst();
people.showSecond();

cars.showSecond = users.showSecond.bind(cars);
cars.showSecond()

//Използване на bind за извикване на функции с по-малко параметри

// Определим функцию от трех переменных
function greet(gender, age, name) {
    // if a male, use Mr., else use Ms.
    var salutation = gender === "male" ? "Mr. " : "Ms. ";
    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}

console.log(greet('', 26, 'Stanimir'))

var greetAnAdultMale = greet.bind(null, 'male', 45);
console.log(greetAnAdultMale("John Hartlove"));

var greetAYongester = greet.bind(null, '', 24);
console.log(greetAYongester('Stanimircho'))