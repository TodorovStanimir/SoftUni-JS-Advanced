// function calorieObject(input) {
//     let products = {};
//     for (let i = 0; i < input.length; i += 2) {
//         products[input[i]] = Number(input[i+1]);
//     }
//     console.log(products);
// }

calorieObject = (arr) => {
    const calorieProducts = {};
    arr.map((el, i, arr) => {
        if (i % 2 === 0) { calorieProducts[arr[i]] = Number(arr[i + 1]); }
    });
    return calorieProducts;
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));