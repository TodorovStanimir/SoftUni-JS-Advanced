// function townsToJson(input) {
//     let output = []
//     for (let index in input) {
//         let tokens = String(input[index]).split('|').filter(el => el).map(el => el.trim());
//         let latitude = Math.floor(tokens[1] * 100) / 100;
//         // latitude = latitude/100
//         let longitude = Math.floor(tokens[2] * 100) / 100;
//         // longitude = longitude/100

//         if (index !== '0') {
//             output.push({ 'Town': tokens[0], 'Latitude': Number(latitude), 'Longitude': Number(longitude) });
//         }
//     }
//     console.log(JSON.stringify(output));
// }

townsToJson = (arr) => {
    const keys = arr[0].split('|').filter(el => el !== '').map(el => el.trim());
    let result = arr.slice(1)
        .map(el => {
            let currentTown = {};
            el.split('|').filter(el => el !== '').map(el => el.trim())
                .map((el, ind) => {
                    if (isNaN(Number(el))) {
                        return currentTown[keys[ind]] = el;
                    } else {
                        return currentTown[keys[ind]] = Number(Number(el).toFixed(2));;
                    }
                });
            return currentTown;
        });
        return JSON.stringify(result)
}
console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.69 | 23.32 |',
    '| Beijing | 39.91 | 116.36 |']));
console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));