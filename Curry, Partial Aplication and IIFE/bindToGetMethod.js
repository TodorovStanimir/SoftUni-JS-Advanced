//Използване на bind за взаимстване на методи от обект!!!!!

let building = {
    name: 'Stanimir\'s house',
    parametres: [{ walls: 'brick' },
    { roof: 'flat' },
    { year: 1996 },
    { color: 'red' }],
    info: function () {
        return this.parametres.reduce((output, parameter) => {
            output.push(`The ${Object.keys(parameter)[0]} is ${Object.values(parameter)[0]}.`);
            return output
        }, [`Parameters of the ${this.name} are:`]).join('\n');
    }
}

let car = {
    name: 'Stanimir\'s car',
    parametres: [{ brand: 'Audi' },
    { model: 'Q7' },
    { year: 2019 },
    { color: 'purple' }],
    info: ''
}

console.log(building.info())
console.log((car.info) ? car.info() : `The object '${car.name}' has not method '${Object.keys(car).pop()}'`)

car.info = building.info.bind(car)

console.log((car.info) ? car.info() : 'There is not this method')