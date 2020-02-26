// function cityMarket(input) {
//     let towns = {};
//     input.forEach(line => {
//         let [town, product, amountOfSalesAndPrice] = line.split(' -> ');
//         let [amountOfSales, price] = amountOfSalesAndPrice.split(' : ').map(Number);
//         let productTotalIncome = amountOfSales * price;
//         if (!towns[town]) {
//             towns[town] = {};
//         }
//         towns[town][product] = productTotalIncome;
//     });
//     Object.entries(towns).forEach(town => {
//         console.log(`Town - ${town[0]}`);
//         Object.entries(town[1]).forEach(product => console.log(`$$$${product[0]} : ${product[1]}`));
//     })
// }
function cityMarket(input) {
    function splitElement(element) {
        const [townName, productName, quantityAndPrice] = element.split(' -> ')
        const incomes = quantityAndPrice.split(' : ').map(Number).reduce((a, b) => a * b);
        return [townName, productName, incomes];
    }

    function addNewTown(townName, towns) {
        if (!(townName in towns)) towns[townName] = {};
        return towns;
    }

    function addNewProduct(productName, townName, towns) {
        if (!(towns[townName][productName])) towns[townName][productName] = 0;
        return towns;
    }

    const towns = input.reduce((towns, town) => {
        const [townName, productName, incomes] = splitElement(town);
        addNewTown(townName, towns);
        addNewProduct(productName, townName, towns)
        towns[townName][productName] += incomes;
        return towns;
    }, {})

    return result = Object
        .entries(towns)
        .map(town => {
            const arr = []
            arr.push(`Town - ${town[0]}`);
            Object.entries(town[1]).forEach(product => arr.push(`$$$${product[0]} : ${product[1]}`));
            return arr.join('\n');
        }).join('\n');
}
console.log(cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']));