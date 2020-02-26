// function userNames(input) {
//     console.log([...new Set(input)].sort((a, b) => a.length-b.length || a.localeCompare(b)).join('\n'))
// }
function userNames(input) {
    return [...new Set(input)].sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}
console.log(userNames(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston']))
console.log(userNames(['Denise', 'Ignatius', 'Iris', 'Isacc', 'Indie', 'Dean', 'Donatello', 'Enfuego', 'Benjamin', 'Biser', 'Bounty', 'Renard', 'Rot']))