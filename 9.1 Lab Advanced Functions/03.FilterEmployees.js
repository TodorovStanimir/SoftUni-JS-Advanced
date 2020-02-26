function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);
    const [keyCriteria, valueCriteria] = criteria.split("-");

    function count() {
        let counter = 0;
        return function () {
            return counter++
        }
    }
    let a = count()

    return result = Object.entries(employees)
        .filter(employer => {
            return (keyCriteria === 'all')
                ? true
                : (employer[1][keyCriteria] === valueCriteria)
                    ? true
                    : false
        }).map(employer => {
            return `${a()}. ${employer[1]['first_name']} ${employer[1]['last_name']} - ${employer[1]['email']}`
        }).join('\n');
}
console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
},
{
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
},
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`,
    'all'))