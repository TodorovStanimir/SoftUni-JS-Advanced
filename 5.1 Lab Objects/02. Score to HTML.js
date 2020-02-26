// function scoreToHTML(input) {
//     let inputArr = JSON.parse(input);
//     let specialSimbols = { '&': '&amp;', '<': '&lt;', '>': "&gt;", '"': '&quot;', '\'': '&#39;' }
//     console.log('<table>');
//     console.log(' <tr><th>name</th><th>score</th></tr>');
//     inputArr.forEach(element => {
//         for (let key in specialSimbols) {
//             if (element.name.includes(key)) {
//                 element.name = element.name.replace(new RegExp(`${key}`, 'g'), `${specialSimbols[key]}`);
//             }
//         }
//         console.log(` <tr><td>${element.name}</td><td>${element.score}</td></tr>`);
//     });
//     console.log('</table>')
// }
function scoreToHTML(input) {
    const specialSymbols = { '&': '&amp;', '<': '&lt;', '>': "&gt;", '"': '&quot;', '\'': '&#39;' }
    const inputArr = JSON.parse(input).map(el => {
        Object.keys(el).map(elKey => {
            Object.keys(specialSymbols).forEach(key => {
                if (typeof el[elKey] === 'string' && el[elKey].includes(key))
                    el[elKey] = el[elKey].replace(new RegExp(`${key}`, 'g'), specialSymbols[key])
            });
        });
        return el
    });
    const keys = Object.keys(inputArr[0]);
    return '<table>' + '\n' + formingRow({}, keys, 'th') + '\n' + inputArr.map(el => formingRow(el, keys, 'td')).join('\n') + '\n' + '</table>';

    function formingRow(obj, keys, typeCell) {
        return '  <tr>' + keys.map(key => `<${typeCell}>${(obj[key] !== undefined) ? obj[key] : key}</${typeCell}>`).join('') + '</tr>';
    }
}
console.log(scoreToHTML('[{ "name": "Pesho", "score": 479 }, { "name": "Gosho", "score": 205 }]'));
console.log(scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));
console.log(scoreToHTML('[{"name":"Stamat Stamatov","score":387},{"name":"Penka","score":500}]'));
console.log(scoreToHTML('[{"firstName":"Stamat","secondName":"Stamatov","score":387},{"firstName":"Penka","secondName":"Petrova","score":500}]'));