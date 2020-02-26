// function stringLength(string1, string2, string3) {
//     console.log(Math.floor(string1.length + string2.length + string3.length));
//     console.log(Math.floor((string1.length + string2.length + string3.length)/3));
// }

function  stringLength () {
    return `${Object.values(stringLength.arguments).join('').length}\n${Math.floor(Object.values(stringLength.arguments).join('').length/Object.values(stringLength.arguments).length)}`;
}
console.log(stringLength('chocolate', 'ice cream', 'cake'));
stringLength('pasta', '5', '22.3')