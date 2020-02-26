// function heroicInventory(input) {
//     let heroes = [];
//     input.forEach(element => {
//         let tokens = element.split(' / ');
//         let heroName = tokens[0];
//         let heroLevel = Number(tokens[1]);
//         let heroItems = [];
//         if (tokens.length > 2) {
//             heroItems = tokens[2].split(', ');
//         }
//         heroes.push({ name: heroName, level: heroLevel, items: heroItems });
//     });
//     console.log(JSON.stringify(heroes));
// }
function heroicInventory(input) {
    function extractData(line) {
        let [hero, level, items] = line.split(' / ');
        return [hero, Number(level), (items !== undefined) ? items = items.split(', ') : items = []];
    }

    function addNewHero(hero, level, items, heroData) {
        heroData.push({ name: hero, level: level, items: items });
        return heroData;
    }

    return JSON.stringify(input.reduce((heroData, line) => {
        let [hero, level, items] = extractData(line)
        addNewHero(hero, level, items, heroData);
        return heroData
    }, []));
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
console.log(heroicInventory(['ake / 1000 / Gauss, HolidayGrenade']));
console.log(heroicInventory(['ake / 1000 /']));