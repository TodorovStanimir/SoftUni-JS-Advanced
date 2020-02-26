// function jsonToHtml(input) {
//     let inputArr = JSON.parse(input);
//     let specialSimbols = { '&': '&amp;', '<': '&lt;', '>': "&gt;", '"': '&quot;', '\'': '&#39;' }
//     let keys = Object.keys(inputArr[0]);
//     console.log('<table>');
//     console.log(`   <tr><th>${keys.join('</th><th>')}</th></tr>`);
//     inputArr.forEach(element => {
//         let valuesElement = Object.entries(element);
//         let output = ''
//         valuesElement.forEach((value, index) => {
//             let currentValue = value;
//             for (let key in specialSimbols) {
//                 if (typeof currentValue[1] === 'string' && currentValue[1].includes(key)) {
//                     currentValue[1] = currentValue[1].replace(new RegExp(`${key}`, 'g'), `${specialSimbols[key]}`);
//                 }
//             }
//             if (index === 0) {
//                 output += `<tr><td>${currentValue[1]}`;
//             } else if (index <= valuesElement.length - 2) {
//                 output += `</td><td>${currentValue[1]}`;
//             } else {
//                 output += `</td><td>${currentValue[1]}</td></tr>`;
//             }
//         });
//         console.log(output);
//     });
//     console.log('</table>')
// }

function jsonToHtml(string) {
    const input = JSON.parse(string);
    const keys = Object.keys(input[0]);
    input.map(el => { removingDangerousCode(el) });

    return '<table>' + '\n' + `${formingRow({}, keys, 'th')}` + '\n' + `${input.map(el => formingRow(el, keys, 'td')).join('\n')}` + '\n' + '</table>'

    function formingRow(obj, keys, typeCell) {
        return (obj[keys[0]] !== undefined)
            ? `<tr>${keys.map(key => `<${typeCell}>${obj[key]}</${typeCell}>`).join('')}</tr>`
            : `   <tr>${keys.map(key => `<${typeCell}>${key}</${typeCell}>`).join('')}</tr>`
    }

    function removingDangerousCode(el) {
        const specialSymbols = { '&': '&amp;', '<': '&lt;', '>': "&gt;", '"': '&quot;', '\'': '&#39;' };
        Object.keys(el).map(key => {
            Object.keys(specialSymbols).map(specialKey => {
                return (String(el[key]).includes(specialKey))
                    ? el[key] = el[key].replace(new RegExp(specialKey, 'g'), specialSymbols[specialKey])
                    : el[key];
            });
        });
    }
}
console.log(jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));
console.log(jsonToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{ "Name": "Gosho", "Age": 18, "City": "Plovdiv" }, { "Name": "Angel", "Age": 18, "City": "Veliko Tarnovo" }]'));