// function circleArea(radius) {
//     if (typeof radius === 'number') {
//         let areaOfCircle = radius**2*Math.PI;
//         console.log(areaOfCircle.toFixed(2));
//     } else {
//         console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
//     }
// }

circleArea = (radius) => {
    return (typeof radius === 'number')
        ? `${(Math.PI * radius ** 2).toFixed(2)}`
        : `We can not calculate the circle area, because we receive a ${typeof radius}.`
}
console.log(circleArea(5));
console.log(circleArea('name'));