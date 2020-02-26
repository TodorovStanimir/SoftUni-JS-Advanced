// function rotateArray(input) {
//     let numberRotation = Number(input.pop());
//     numberRotation = numberRotation % input.length;
//     for (let i = 1; i <= numberRotation; i++) {
//         input.unshift(input.pop());
//     }
//     return (input.join(' ');
// }
function rotateArray(input) {
    let numberRotation = Number(input.pop());
    numberRotation = numberRotation % input.length;

    input.forEach((el, ind) => {
        if (ind < numberRotation)
            input.unshift(input.pop());
    });
    return input.join(' ')
}
console.log(rotateArray(['1', '2', '3', '4', '2']));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));