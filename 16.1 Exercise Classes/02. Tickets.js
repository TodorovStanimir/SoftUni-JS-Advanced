function tickets(arrayTicketsDescriptions, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        static sortTickets(tickets, sortingCriteria) {
            return tickets.sort((a, b) => {
                return (typeof a[sortingCriteria] === 'string')
                    ? a[sortingCriteria].localeCompare(b[sortingCriteria])
                    : a[sortingCriteria] - b[sortingCriteria]
            })
        };
    }
    let tickets = arrayTicketsDescriptions.map(item => { return new Ticket(...item.split('|')); });

    return Ticket.sortTickets(tickets, sortingCriteria);
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));