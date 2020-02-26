// function jsonsTable(employers) {
//     console.log('<table>');
//     for (let employ of employers) {
//         console.log('   <tr>');
//         let employObject = JSON.parse(employ);
//         let employInfo = Object.values(employObject);
//         for (let value of employInfo) {
//             console.log(`      <td>${value}</td>`);
//         }
//         console.log('   </tr>');
//     }
//     console.log('</table>');
// }
function jsonsTable(input) {
    const employees = input
        .map(el => JSON.parse(el))
        .reduce((result, el) => {
            const row = ['   <tr>', [...Object.values(el).map(el => `      <td>${el}</td>`)].join('\n'), '   </tr>'];
            result.push(row.join('\n'));
            return result
        }, ['<table>']);
        employees.push('</table>')
    return employees.join('\n')
}
console.log(jsonsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
));