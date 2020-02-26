// function countWordsInaText(input) {
//     let output = {};
//     let words = input[0].split(/[\ \'\?\!\,\.\-]/).filter(word => word);
//     for (word of words) {
//         if (!output[word]) {
//             output[word] = 0;
//         }
//         output[word]++;
//     }
//     console.log(JSON.stringify(output));
// }
countWordsInaText = (input) => {
    function addNewWord(res, word) {
        if (!(word in res)) res[word] = 0;
        return res;
    }
    return JSON.stringify(input[0]
        .match(/[\w]+/g)
        .reduce((res, word) => {
            addNewWord(res, word);
            res[word]++;
            return res;
        }, {}));
}
console.log(countWordsInaText(['Far too slow, you\'re far too slow.']));
console.log(countWordsInaText(['JS devs use Node.js for server-side JS.-- JS for devs']));
console.log(countWordsInaText(['The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.']));