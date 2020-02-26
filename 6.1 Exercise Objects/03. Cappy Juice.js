// function cappyJuice(input) {
//     let producedBottlesOfJuice = {};
//     let producedJuice = {};
//     input.forEach(line => {
//         let [nameJuice, quantity] = line.split(' => ');
//         quantity = Number(quantity);
//         if (producedJuice[nameJuice]) {
//             quantity += producedJuice[nameJuice];
//         }
//         let producedBottles = parseInt(quantity / 1000);
//         let restQuantity = quantity % 1000;
//         producedJuice[nameJuice] = restQuantity;
//         if (producedBottles >= 1) {
//             if (!producedBottlesOfJuice[nameJuice]) {
//                 producedBottlesOfJuice[nameJuice] = producedBottles;
//             } else {
//                 producedBottlesOfJuice[nameJuice] += producedBottles;
//             }
//         }
//     });
//     Object.entries(producedBottlesOfJuice).forEach(juice => console.log(`${juice[0]} => ${juice[1]}`))
// }
function cappyJuice(input) {

    function calculateQuantity(result, juice, quantity) {
        const totalQuantity = (quantity + result[0][juice]) || quantity;
        result[0][juice] = totalQuantity % 1000;
        if (totalQuantity >= 1000) {
            result[1][juice] = (parseInt(totalQuantity / 1000) + result[1][juice]) || parseInt(totalQuantity / 1000);
        }
        return result;
    }

    let result = input.reduce((result, el) => {
        let [juice, quantity] = el.split(' => ');
        quantity = Number(quantity);
        calculateQuantity(result, juice, quantity);
        return result;
    }, [{}, {}]);
    
    return Object.entries(result[1]).map(element => `${element[0]} => ${element[1]}`).join('\n');
}
console.log(cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']));
console.log(cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']));