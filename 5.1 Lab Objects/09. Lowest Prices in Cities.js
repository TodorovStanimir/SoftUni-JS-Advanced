// function lowestPricesInCities(input) {
//     let lowestPrices = {};
//     input.forEach(product => {
//         let [town, nameProduct, price] = product.split(' | ');
//         price = Number(price);
//         if (!lowestPrices[nameProduct]) {
//             lowestPrices[nameProduct] = {};
//             lowestPrices[nameProduct][town] = price;
//         } else {
//             let currentTowns = Object.keys(lowestPrices[nameProduct]);
//             if (currentTowns.includes(town)) {
//                 lowestPrices[nameProduct][town] = price;
//             } else {   
//                     lowestPrices[nameProduct][town] = price;
//                 }
//             }
//     });
//     for (let product in lowestPrices) {
//         let [town, price] = Object.entries(lowestPrices[product]).sort((a,b) => a[1]-b[1])[0]
//         console.log(`${product} -> ${price} (${town})`);
//     }
// }
function lowestPricesInCities(input) {
    function splitLine(line) {
        return line.split(' | ').map(el => isNaN(Number(el)) ? el : Number(el));
    }

    function addNewProduct(products, product) {
        if (!(product in products)) { products[product] = {} }
        return products;
    }

    const products = input.reduce((products, line) => {
        const [town, product, price] = splitLine(line);
        addNewProduct(products, product)
        products[product][town] = price;
        return products;
    }, {});
    return Object.entries(products).map(product => {
        const lowestPrice = Object.entries(product[1]).sort((a, b) => a[1] - b[1])[0];
        return `${product[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})`
    }).join('\n')
}

console.log(lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']));
console.log(lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']));