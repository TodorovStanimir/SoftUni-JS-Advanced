// function sumByTowns(input) {
//     let towns = {};
//     for (let i = 0; i < input.length; i += 2) {
//         let town = input[i];
//         let incomes = Number(input[i + 1]);
//         if (!towns[town]) {
//             towns[town] = 0;
//         }
//         towns[town] += incomes;
//     }
//     console.log(JSON.stringify(towns));
// }
function sumByTowns(input) {
    const towns = input.reduce((result, town, ind, input) => {
        if (ind % 2 === 0) (town in result)
            ? result[town] += Number(input[ind + 1])
            : result[town] = Number(input[ind + 1]);
        return result;
    }, {});
    return JSON.stringify(towns)
}
console.log(sumByTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));
console.log(sumByTowns(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']));