function filterEmployees(data, criteria) {

    function splitParametres(criteria) { return criteria.split('-') }

    function formatEmployer(employer, i) { return `${i}. ${employer['first_name']} ${employer['last_name']} - ${employer['email']}` }

    function filterByProp(prop, value, element) { return element[prop] === value }

    return criteria === 'all'

        ? JSON.parse(data)
            .map(formatEmployer)
            .join('\n')
        : JSON.parse(data)
            .filter(filterByProp.bind(undefined, ...splitParametres(criteria)))
            .map(formatEmployer)
            .join('\n');
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