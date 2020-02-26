// function arenaTier(input) {
//     let gladiators = {};
//     while ((line = input.shift()) !== 'Ave Cesar') {
//         if (!line.includes(' vs ')) {
//             let [gladiator, technique, skill] = line.split(' -> ');
//             skill = Number(skill);
//             if (!(gladiator in gladiators)) {
//                 gladiators[gladiator] = { totalSkill: 0 };
//                 gladiators[gladiator][technique] = skill;
//                 gladiators[gladiator].totalSkill += skill;
//             } else {
//                 if (!(technique in gladiators[gladiator])) {
//                     gladiators[gladiator][technique] = skill;
//                     gladiators[gladiator].totalSkill += skill;
//                 } else {
//                     if (gladiators[gladiator][technique] < skill) {
//                         gladiators[gladiator].totalSkill += skill - gladiators[gladiator][technique];
//                         gladiators[gladiator][technique] = skill;
//                     }
//                 }
//             }
//         } else {
//             let [gladiator1, gladiator2] = line.split(' vs ');
//             if ((gladiator1 in gladiators) && (gladiator2 in gladiators)) {
//                 let techniquesGladiator1 = Object.keys(gladiators[gladiator1]);
//                 let techniquesGladiator2 = Object.keys(gladiators[gladiator2]);
//                 for (let techniqueGladiator1 of techniquesGladiator1) {
//                     if (techniquesGladiator2.includes(techniqueGladiator1) && techniqueGladiator1 !== 'totalSkill') {
//                         if (gladiators[gladiator1].totalSkill > gladiators[gladiator2].totalSkill) {
//                             delete gladiators[gladiator2];
//                         } else {
//                             delete gladiators[gladiator1];
//                         }
//                         break;
//                     }
//                 }
//             }
//         }
//     }
//     Object.entries(gladiators)
//         .sort((a, b) => a[0].localeCompare(b[0]))
//         .sort((a, b) => b[1].totalSkill - a[1].totalSkill)
//         .forEach(gladiator => {
//             console.log(`${gladiator[0]}: ${gladiator[1].totalSkill} skill`);
//             delete gladiator[1].totalSkill;
//             Object.entries(gladiator[1])
//                 .sort((a, b) => a[0].localeCompare(b[0]))
//                 .sort((a, b) => b[1] - a[1])
//                 .forEach(a => console.log(`- ${a[0]} <!> ${a[1]}`));
//         });
// }
function arenaTier(input) {
    const gladiators = {};
    const commandIs = (command) => {
        let result = 'newGladiator'
        if (command.includes(' vs ')) { result = 'battle' }
        if (command.includes('Ave Cesar')) { result = 'lastCommand' }
        return result;
    };
    function addNewGladiator(gladiator, gladiators) {
        if (!(gladiator in gladiators)) { gladiators[gladiator] = { totalSkill: 0 } }
    }
    function addNewTechniqueAndUpdateSkill(technique, gladiator, skill, gladiators) {
        if (!(technique in gladiators[gladiator])) {
            gladiators[gladiator][technique] = skill;
            gladiators[gladiator].totalSkill += skill;
        } else {
            if (gladiators[gladiator][technique] < skill) {
                gladiators[gladiator].totalSkill += skill - gladiators[gladiator][technique];
                gladiators[gladiator][technique] = skill;
            }
        }
    }

    for (let command of input) {
        if (commandIs(command) === 'battle') {
            let [gladiator1, gladiator2] = command.split(' vs ');
            if (gladiator1 in gladiators && gladiator2 in gladiators) {
                const techniqueGladiator1 = Object.keys(gladiators[gladiator1]).slice(1);
                const techniqueGladiator2 = Object.keys(gladiators[gladiator2]).slice(1);
                for (let techGl1 of techniqueGladiator1) {
                    if (techniqueGladiator2.includes(techGl1)) {
                        if (gladiators[gladiator1].totalSkill > gladiators[gladiator2].totalSkill) {
                            delete gladiators[gladiator2];
                        } else {
                            delete gladiators[gladiator1];
                        }
                        break;
                    }
                }
            }
        }
        if (commandIs(command) === 'newGladiator') {
            let [gladiator, technique, skill] = command.split(' -> ');
            skill = Number(skill);
            addNewGladiator(gladiator, gladiators);
            addNewTechniqueAndUpdateSkill(technique, gladiator, skill, gladiators);
        }
        if (commandIs(command) === 'lastCommand') {
            break;
        }
    };
    const sortedGladiators = Object
        .entries(gladiators)
        .sort((gl1, gl2) => gl2[1].totalSkill - gl1[1].totalSkill)
        .reduce((res, el) => {
            res.push(`${el[0]}: ${el[1].totalSkill} skill`);
            Object.entries(el[1]).slice(1)
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(tech => {
                    res.push(`- ${tech[0]} <!> ${tech[1]}`)
                });
            return res;
        }, []);
    return sortedGladiators.join('\n')
}
console.log(arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]))
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])