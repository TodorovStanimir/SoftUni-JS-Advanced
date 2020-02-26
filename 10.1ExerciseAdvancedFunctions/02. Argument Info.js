// function argumentInfo() {
//     let counter = {};
//     for (let element of arguments) {
//         let type = typeof element;
//         (!counter[type]) ? counter[type] = { count: 1 } : counter[type].count++
//         console.log(`${type}: ${element}`);
//     };
//     Object.entries(counter).sort((a, b) => b[1].count - a[1].count)
//         .forEach(element => console.log(`${element[0]} = ${element[1].count}`));
// }
function argumentInfo() {
    let counter = {};
    let findTypeArgument = (element) => { return typeof element };
    let addTypeArgumentToCounter = (counter, type) => { (!counter[type]) ? counter[type] = 1 : counter[type]++ }
    let printArgument = (findType, element) => { console.log(`${findTypeArgument(element)}: ${element}`) }

    Object.values(arguments).forEach(element => {
        addTypeArgumentToCounter(counter, findTypeArgument(element));
        printArgument(findTypeArgument, element);
    })
    Object.entries(counter).sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]} = ${el[1]}`))
}
// argumentInfo('cat', 42, 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob' }, 3.333, 9.999)
// argumentInfo(42, 'cat', [], undefined)