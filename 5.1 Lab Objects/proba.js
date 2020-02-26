function scoreToHTML(input) {
    const specialSymbols = { '&': '&amp;', '<': '&lt;', '>': "&gt;", '"': '&quot;', '\'': '&#39;' }
    const inputArr = JSON.parse(input).map(el => {
        Object.keys(el).map(elKey => {
            Object.keys(specialSymbols).forEach(key => {
                (typeof el[elKey] === 'string' && el[elKey].includes(key))
                    ? el[elKey] = el[elKey].replace(new RegExp(`${key}`, 'g'), specialSymbols[key])
                    : el[elKey] = el[elKey]
            });
        });
        return el
    });
    const keys = Object.keys(inputArr[0]);
    let result = ['<table>', formingRow({}, keys, 'th'), inputArr.map(el => formingRow(el, keys, 'td')).join('\n'), '</table>'];

    function formingRow(obj, keys, typeCell) {
        return ['  <tr>', keys.map(key => `<${typeCell}>${obj[key] || key}</${typeCell}>`).join(''), '</tr>'].join('');
    }
    console.log(result.join('\n'));
}
scoreToHTML('[{ "name": "Pesho", "score": 479 }, { "name": "Gosho", "score": 205 }]');