function solve() {
    let word = document.getElementById('word').value;
    let arr = JSON.parse(document.getElementById('text').value);
    let replacement = String(arr[0].split(' ')[2]);

    let resultElement = document.getElementById('result')
    arr.forEach(element => {
        let output = element.replace(new RegExp(replacement, 'gi'), word);
        let p = document.createElement('p');
        p.innerHTML = output;
        resultElement.appendChild(p);
    });
}