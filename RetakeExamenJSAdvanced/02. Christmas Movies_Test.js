const { expect } = require('chai');
const ChristmasMovies = require('./02. Christmas Movies_Resources.js');

describe("class ChristmasMovies", () => {
    let movies;
    beforeEach(function () {
        movies = new ChristmasMovies();
    });

    //test 1
    describe("check constructor of class", function () {
        it("shoud corectly inisialize ane instance with three properties", function () {
            expect(movies.movieCollection).to.deep.equal([]);
            expect(movies.watched).to.deep.equal({});
            expect(movies.actors).to.deep.equal([]);
            expect(movies.movieCollection).to.be.a('Array');
            expect(movies.watched).to.be.a('Object');
            expect(movies.actors).to.be.a('Array');
            expect(movies.movieCollection.length).to.equal(0);
            expect(movies.actors.length).to.equal(0);
            expect(movies).to.deep.equal({ "actors": [], "movieCollection": [], "watched": {} })
        });
    });
    //test 3
    describe("check function buyMovie(movieName, actors)", function () {
        it("shoud throw an error if We have movie in our colection", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let movie = () => movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expect(movie).to.throw(`You already own Home Alone in your collection!`);
        });
        it("shoud add new movie if it is not in the collection", function () {
            let movie = movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(movies.movieCollection).to.deep.equals([{ "actors": ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"], "name": "Home Alone" }]);
            expect(movie).to.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`);
            expect(movies.movieCollection[0].actors.length).to.equal(3);
        });
    });
    //test 4,5
    describe("check function discardMovie(movieName)", function () {
        it("shoud throw an error if We have movie in our colection", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let movie = () => movies.discardMovie('Home Alone 2')
            expect(movie).to.throw(`Home Alone 2 is not at your collection!`);
        });
        it("check function discardMovie(movieName)", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let movie = () => movies.discardMovie('Home Alone')
            expect(movie).to.throw(`Home Alone is not watched!`);
        });
        it("check function discardMovie(movieName)", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone')
            let movie = movies.discardMovie('Home Alone')
            expect(movie).to.equal(`You just threw away Home Alone!`);
        });
    });
    //test 6,7
    describe("check function watchMovie()", function () {
        it("shoud throw an error if We have not movie in our colection", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            let movie = () => movies.watchMovie('Home Alone 2')
            expect(movie).to.throw('No such movie in your collection!');
        });
        it("check function discardMovie(movieName)", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone')
            // let movie = movies.discardMovie('Home Alone')
            expect(movies.watched).to.deep.equal({ "Home Alone": 1 });
        });
    });

    //test 8, 9
    describe("check function favouriteMovie()", function () {
        it("shoud throw an error if We have not movie in our colection", function () {
            let movie = () => movies.favouriteMovie()
            expect(movie).to.throw('You have not watched a movie yet this year!');
        });
        it("check function discardMovie(movieName)", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone 2');
            movies.watchMovie('Home Alone 2');
            let movie = movies.favouriteMovie()
            expect(movies.watched).to.deep.equal({ 'Home Alone': 1, 'Home Alone 2': 2 });
            expect(movie).to.equal(`Your favourite movie is Home Alone 2 and you have watched it 2 times!`)
        });
    });

    //test 10, 11
    describe("check function mostStarredActor()", function () {
        it("shoud throw an error if We have not movie in our colection", function () {
            let movie = () => movies.mostStarredActor()
            expect(movie).to.throw('You have not watched a movie yet this year!');
        });
        it("check function mostStarredActor()", function () {
            movies.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movies.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            movies.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            movies.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone');
            movies.watchMovie('Home Alone 2');
            movies.watchMovie('The Grinch');
            movies.watchMovie('Last Christmas');
            movies.watchMovie('Home Alone 2');
            movies.watchMovie('Last Christmas');
            movies.discardMovie('The Grinch');
            movies.favouriteMovie();
            let movie = movies.mostStarredActor()
            expect(movie).to.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!')
        });
    });

});