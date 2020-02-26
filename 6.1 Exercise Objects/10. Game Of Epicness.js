// function gameOfEpicness(arrayOfObjects, matrixOfString) {
//     let kingdoms = {};
//     for (let kingdom of arrayOfObjects) {
//         if (!kingdoms[kingdom.kingdom]) {
//             kingdoms[kingdom.kingdom] = {};
//             kingdoms[kingdom.kingdom][kingdom.general] = { army: kingdom.army, wins: 0, losses: 0 }
//         } else {
//             if (!kingdoms[kingdom.kingdom][kingdom.general]) {
//                 kingdoms[kingdom.kingdom][kingdom.general] = { army: kingdom.army, wins: 0, losses: 0 }
//             } else {
//                 kingdoms[kingdom.kingdom][kingdom.general].army += kingdom.army;
//             }
//         }
//     }
//     for (let line of matrixOfString) {
//         let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = line;
//         if (attackingKingdom !== defendingKingdom && kingdoms[attackingKingdom][attackingGeneral] &&
//             kingdoms[defendingKingdom][defendingGeneral]) {
//             if (kingdoms[attackingKingdom][attackingGeneral].army > kingdoms[defendingKingdom][defendingGeneral].army) {
//                 kingdoms[attackingKingdom][attackingGeneral].army += 0.10 * kingdoms[attackingKingdom][attackingGeneral].army;
//                 kingdoms[attackingKingdom][attackingGeneral].army = parseInt(kingdoms[attackingKingdom][attackingGeneral].army);
//                 kingdoms[attackingKingdom][attackingGeneral].wins++;
//                 kingdoms[defendingKingdom][defendingGeneral].army -= 0.10 * kingdoms[defendingKingdom][defendingGeneral].army;
//                 kingdoms[defendingKingdom][defendingGeneral].army = parseInt(kingdoms[defendingKingdom][defendingGeneral].army);
//                 kingdoms[defendingKingdom][defendingGeneral].losses++;
//             } else if (kingdoms[attackingKingdom][attackingGeneral].army < kingdoms[defendingKingdom][defendingGeneral].army) {
//                 kingdoms[attackingKingdom][attackingGeneral].army -= 0.10 * kingdoms[attackingKingdom][attackingGeneral].army;
//                 kingdoms[attackingKingdom][attackingGeneral].army = parseInt(kingdoms[attackingKingdom][attackingGeneral].army);
//                 kingdoms[attackingKingdom][attackingGeneral].losses++;
//                 kingdoms[defendingKingdom][defendingGeneral].army += 0.10 * kingdoms[defendingKingdom][defendingGeneral].army;
//                 kingdoms[defendingKingdom][defendingGeneral].army = parseInt(kingdoms[defendingKingdom][defendingGeneral].army);
//                 kingdoms[defendingKingdom][defendingGeneral].wins++;
//             }
//         }
//     }
//     let winsKingdom = Object.entries(kingdoms).sort((a, b) => {
//         let totalWinsA = Object.entries(a[1]).map(el => { return el[1].wins }).reduce((x, y) => x + y, 0);
//         let totalWinsB = Object.entries(b[1]).map(el => { return el[1].wins }).reduce((x, y) => x + y, 0);
//         let totalLossesA = Object.entries(a[1]).map(el => { return el[1].losses }).reduce((x, y) => x + y, 0);
//         let totalLossesB = Object.entries(b[1]).map(el => { return el[1].losses }).reduce((x, y) => x + y, 0);
//         return totalWinsB - totalWinsA || totalLossesA - totalLossesB || a[0].localeCompare(b[0])
//     })[0];

//     winsKingdom.forEach((element, index) => {
//         if (index === 0) {
//             console.log(`Winner: ${winsKingdom[0]}`)
//         } else {
//             Object.entries(element)
//                 .sort((generalA, generalB) => generalB[1].army - generalA[1].army)
//                 .forEach(general => {
//                     console.log(`/\\general: ${general[0]}`);
//                     console.log(`---army: ${general[1].army}`);
//                     console.log(`---wins: ${general[1].wins}`);
//                     console.log(`---losses: ${general[1].losses}`);
//                 });
//         }
//     });
// }
function gameOfEpicness(arrayOfKingdoms, matrixOfStrings) {
    let kingdoms = {};

    for (let line of arrayOfKingdoms) {
        if (!(line.kingdom in kingdoms)) {
            kingdoms[line.kingdom] = {};
        }
        if (!(line.general in kingdoms[line.kingdom])) {
            kingdoms[line.kingdom][line.general] = { army: 0, wins: 0, loses: 0 }
        }
        kingdoms[line.kingdom][line.general].army += line.army;
    }

    for (let line of matrixOfStrings) {
        const [attK, attG, defK, defG] = [...line]
        if (attK !== defK && (attG in kingdoms[attK]) && (defG in kingdoms[defK])) {
            if (kingdoms[attK][attG].army > kingdoms[defK][defG].army) {
                kingdoms[attK][attG].army = Math.floor(kingdoms[attK][attG].army+0.10 * kingdoms[attK][attG].army);
                kingdoms[attK][attG].wins++;
                kingdoms[defK][defG].army = Math.floor(kingdoms[defK][defG].army-0.10 * kingdoms[defK][defG].army);
                kingdoms[defK][defG].loses++;
            } else if (kingdoms[attK][attG].army < kingdoms[defK][defG].army) {
                kingdoms[attK][attG].army = Math.floor(kingdoms[attK][attG].army-0.10 * kingdoms[attK][attG].army);
                kingdoms[attK][attG].loses++;
                kingdoms[defK][defG].army = Math.floor(kingdoms[defK][defG].army+0.10 * kingdoms[defK][defG].army);
                kingdoms[defK][defG].wins++;
            }
        }
    }
    let winsKingdom = Object.entries(kingdoms).sort((king1, king2) => {
        const winsKing1 = Object.entries(king1[1]).map(el => el[1].wins).reduce((a, b) => a + b, 0);
        const winsKing2 = Object.entries(king2[1]).map(el => el[1].wins).reduce((a, b) => a + b, 0);
        const losesKing1 = Object.entries(king1[1]).map(el => el[1].loses).reduce((a, b) => a + b, 0);
        const losesKing2 = Object.entries(king2[1]).map(el => el[1].loses).reduce((a, b) => a + b, 0);
        return winsKing2 - winsKing1 || losesKing1 - losesKing2 || king1[0].localeCompare(king2[0])
    })[0];
    console.log(`Winner: ${winsKingdom[0]}`)
    Object.entries(winsKingdom[1]).sort((a, b) => b[1].army - a[1].army).forEach(gen => {
        console.log(`/\\general: ${gen[0]}`);
        console.log(`---army: ${gen[1].army}`);
        console.log(`---wins: ${gen[1].wins}`);
        console.log(`---losses: ${gen[1].loses}`);
    });
}
gameOfEpicness([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);
gameOfEpicness([{ kingdom: "Stonegate", general: "Ulric", army: 5000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 5000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 1000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]);
gameOfEpicness([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Doran"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"]]);