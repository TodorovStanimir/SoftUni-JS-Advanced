// function populationInTown(input) {
//     let towns = {};
//     for (let line of input) {
//         let [town, population] = line.split(' <-> ');
//         population = Number(population);
//         (!towns[town])
//             ? towns[town] = population
//             : towns[town] += population
//     }
//     Object.entries(towns).forEach(town => {
//         console.log(`${town[0]} : ${town[1]}`)
//     });
// }
populationInTown = (input) => {
    function addNewTown(towns, town) {
        if (!(town[0] in towns)) towns[town[0]] = 0;
        return towns
    }
    return Object.entries(input
        .map(el => [...el.split(' <-> ')])
        .reduce((towns, town) => {
            addNewTown(towns, town);
            towns[town[0]] += Number(town[1])
            return towns;
        }, {}))
        .map(town => `${town[0]} : ${town[1]}`)
        .join('\n');
}
console.log(populationInTown(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']))