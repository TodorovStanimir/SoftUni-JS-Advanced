// function validityChecker(input) {
//     let x1 = input[0];
//     let y1 = input[1];
//     let x2 = input[2];
//     let y2 = input[3];
//     checkerDistance(x1, y1, 0, 0);
//     checkerDistance(x2, y2, 0, 0);
//     checkerDistance(x1, y1, x2, y2)

//     function checkerDistance(x1, y1, x, y) {
//         let distance = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
//         console.log(distance === parseInt(distance)
//             ? `{${x1}, ${y1}} to {${x}, ${y}} is valid`
//             : `{${x1}, ${y1}} to {${x}, ${y}} is invalid`)
//     }
// }
validityChecker = (arr) => {
    function checkerDistance(x1, y1, x, y) {
        const distance = Math.sqrt(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2));
        return (distance === parseInt(distance))
            ? `{${x1}, ${y1}} to {${x}, ${y}} is valid`
            : `{${x1}, ${y1}} to {${x}, ${y}} is invalid`
    }
    console.log(checkerDistance(arr[0], arr[1], 0, 0));
    console.log(checkerDistance(arr[2], arr[3], 0, 0));
    console.log(checkerDistance(arr[0], arr[1], arr[2], arr[3]));
}
validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);