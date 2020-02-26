// function storeCatalogue(input) {
//     let output = {};
//     input.forEach(product => {
//         let [name, quantity] = product.split(' : ');
//         quantity = Number(quantity);
//         let group = name.substr(0, 1);
//         if (!output[group]) {
//             output[group] = {}
//         }
//         output[group][name] = quantity;
//     });
//     let sortedCatalogue = Object.entries(output).sort((a, b) => a[0].localeCompare(b[0]));
//     sortedCatalogue.forEach(group => {
//         console.log(group[0]);
//         Object.entries(group[1])
//             .sort((a, b) => a[0].localeCompare(b[0]))
//             .forEach(product => console.log(`   ${product[0]}: ${product[1]}`))
//     })
// }
function storeCatalogue(input) {
    const result = {};
    input.forEach(line => {
        let [product, price] = line.split(' : ');
        price = Number(price);
        if (!(product[0] in result)) {
            result[product[0]] = {};
        }
        result[product[0]][product] = price;
    });
    return Object.entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(el => {
            return Object.entries(el[1])
                .sort((a, b) => a[0].localeCompare(b[0]))
                .reduce((result, product) => {
                    result.push(`  ${product[0]}: ${product[1]}`);
                    return result;
                }, [el[0]]).join('\n');
        }).join('\n');
}
console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])