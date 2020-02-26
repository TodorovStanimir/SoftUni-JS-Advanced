function solve() {
    const string = document.getElementById('string').value;
    const text = document.getElementById('text').value;

    const patternCoordinates = /(east|north).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
    const patternMessage = new RegExp(`(${string})(.+)\\1`, 'gim');

    const message = 'Message: ' + patternMessage.exec(text)[2]

    let eastCoordinates = '';
    let northCoordinates = '';

    while ((result = patternCoordinates.exec(text)) !== null) {
        if (result[1].toLowerCase() === 'east') {
            eastCoordinates = `${result[2]}.${result[3]} E`;
        } else {
            northCoordinates = `${result[2]}.${result[3]} N`;;
        }
    };

    addParagraph(northCoordinates);
    addParagraph(eastCoordinates);
    addParagraph(message);

    function addParagraph(text) {
        let divElement = document.getElementById('result');
        let pElement = document.createElement('p');
        pElement.textContent = text;
        divElement.appendChild(pElement);
    }
}
// solve('eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532')
// solve('o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b')
