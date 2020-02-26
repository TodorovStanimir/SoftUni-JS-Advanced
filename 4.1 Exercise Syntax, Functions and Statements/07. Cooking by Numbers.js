// function cookingByNumbers(input) {
//     let commands = {
//         chop: (num) => { return num / 2 },
//         dice: (num) => { return Math.sqrt(num) },
//         spice: (num) => { return num + 1 },
//         bake: (num) => { return 3 * num },
//         fillet: (num) => { return num - 0.2*num }
//     }
//     let result = Number(input[0]);
//     for (let i = 1; i <= 5; i++) {
//         result = commands[input[i]](result);
//         console.log(result);
//     }
// }
cookingByNumbers = (arr) => {
    let num = arr[0];
    const command = {
        'chop': (num) => { return num / 2 },
        'dice': (num) => { return Math.sqrt(num) },
        'spice': (num) => { return num + 1 },
        'bake': (num) => { return 3 * num },
        'fillet': (num) => { return num -= 0.2 * num }
    }
    return arr.slice(1).map(el => { return num = command[el](num) }).join('\n');
}
console.log(cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log(cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));