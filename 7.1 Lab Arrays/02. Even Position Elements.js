function evenPositionElements(input) {
    'use strict'
    const result = input.slice();
    return result.filter((el, ind) => ind % 2 === 0).join(' ');
}
console.log(evenPositionElements(['20', '30', '40', '']));
evenPositionElements(['5', '10', '']);
evenPositionElements(['JS']);