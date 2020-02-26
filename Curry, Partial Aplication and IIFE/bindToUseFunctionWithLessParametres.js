function carInfo(brand, model, color, year) {
    return `Your car is brand: ${brand}, model: ${model}, color: ${color}, ${year} years old!!!`;
}

//with all 4 parameters
console.log(carInfo('Opel', 'Zafira Tourier', 'white', 5))

//with 3 parameters 
//the first parameter: brand is fixed to Opel
const carInfoForOpel = carInfo.bind(null, 'Opel');
console.log(carInfoForOpel('Zafira Tourier', 'white', 5))

//with 2 parameters 
//the first parameter: brand is fixed to Opel
//the second parameter: model is fixed to Zafira Tourier
const carInfoForOpelZafiraTourier = carInfo.bind(null, 'Opel', 'Zafira Tourier');
console.log(carInfoForOpelZafiraTourier('white', 5));

//with 1 parameter 
//the first parameter: brand is fixed to Opel
//the second parameter: model is fixed to Zafira Tourier
//the third parameter: color is fixed to white
const carInfoForOpelZafiraTourierWhiteColor = carInfo.bind(null, 'Opel', 'Zafira Tourier', 'white');
console.log(carInfoForOpelZafiraTourierWhiteColor(5))