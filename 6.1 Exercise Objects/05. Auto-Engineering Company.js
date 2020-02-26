// function autoEngineeringCompany(input) {
//     let producedCars = {};
//     input.forEach(element => {
//         let [carBrand, carModel, producedQuantityCars] = element.split(' | ');
//         producedQuantityCars = Number(producedQuantityCars);
//         if (!producedCars[carBrand]) {
//             producedCars[carBrand] = {};
//             producedCars[carBrand][carModel] = producedQuantityCars;
//         } else {
//             !producedCars[carBrand][carModel]
//                 ? producedCars[carBrand][carModel] = producedQuantityCars
//                 : producedCars[carBrand][carModel] += producedQuantityCars
//         }
//     });
//     Object.entries(producedCars).forEach(carBrand => {
//         console.log(carBrand[0]);
//         Object.entries(carBrand[1]).forEach(carModel => console.log(`###${carModel[0]} -> ${carModel[1]}`))
//     })
// }
function autoEngineeringCompany(input) {
    const isNewBrandOrModel = (forChecking, inspectedОbject) => { return !(forChecking in inspectedОbject) }
    const producedCars = {};

    input.forEach(line => {
        let [brand, model, quantity] = line.split(' | ');
        if (isNewBrandOrModel(brand, producedCars)) { producedCars[brand] = {}; }
        if (isNewBrandOrModel(model, producedCars[brand])) { producedCars[brand][model] = 0; }

        producedCars[brand][model] += Number(quantity);
    });
    return Object.entries(producedCars).reduce((result, brand) => {
        result.push(brand[0]);
        console.log(brand[1])
        Object.entries(brand[1]).forEach(model => result.push(`###${model[0]} -> ${model[1]}`));
        return result
    }, []).join('\n');
}
console.log(autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']));