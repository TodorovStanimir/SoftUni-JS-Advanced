const { expect } = require('./node_modules/chai');
// const { beforeEach } = require('mocha');
const SoftUniFy = require('./03. Softunify_Ресурси.js');

describe("class SoftUniFy", () => {
    let softUniFly;
    beforeEach(function () {
        softUniFly = new SoftUniFy();
    });
    //test 1
    describe("check constructor of class", function () {
        it("shoud corectly inisialize ane instance with one property", function () {
            expect(softUniFly.allSongs).to.deep.equal({});
        });
    });
    //test 2
    describe("check function downloadSong(artist, song, lyrics)", function () {
        it("shoud adds the given information to the allSongs in format: {artist: {rate: 0, votes: 0, songs: []}}", function () {
            let result = softUniFly.downloadSong('Eminem', 'Venom', 'Knock let the devil in...');
            expect(softUniFly.allSongs).to.deep.equal({ Eminem: { rate: 0, votes: 0, songs: [`Venom - Knock let the devil in...`] } });
            expect(softUniFly.allSongs['Eminem'].songs).to.deep.equal([`Venom - Knock let the devil in...`]);
            expect(softUniFly.allSongs['Eminem'].songs.length).to.equal(1);
            expect(softUniFly.allSongs['Eminem'].rate).to.equal(0);
            expect(softUniFly.allSongs['Eminem'].votes).to.equal(0);
        });
    });
    //test , 3, 4, 5, 6, 7, 8
    describe("check function playSong(song))", function () {
        it("shoud return a message if the song is not download yet", function () {
            softUniFly.downloadSong('Eminem', 'Venom', 'Knock let the devil in...');
            let result = softUniFly.playSong('proba');
            expect(result).to.equal(`You have not downloaded a proba song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
        it("shoud throw an error if the incoming orderedPizza is not one of the pizzas in the availableProducts property.", function () {
            softUniFly.downloadSong('Eminem', 'Venom', 'Knock let the devil in...');
            let result = softUniFly.playSong('Venom');
            expect(result).to.equal(`Eminem:\nVenom - Knock let the devil in...\n`);
        });
    });
    describe("check function rateArtist()", function () {
        //test 10
        describe("check function rateArtist()", function () {
            it("shoud return the message if artist is not in your artist list", function () {
                softUniFly.downloadSong('Eminem', 'Venom', 'Knock let the devil in...');
                let result = softUniFly.rateArtist('Peter');
                expect(result).to.equal(`The Peter is not on your artist list.`);
            });
            it("shoud return 0 if artist is in your artist list, but there is not second argument of the function", function () {
                softUniFly.downloadSong('Eminem', 'Venom', 'Knock let the devil in...');
                let result = softUniFly.rateArtist('Eminem');
                expect(result).to.equal(0);
            });
            it("shoud return average arte if artist is in your artist list, and there is second argument of the function", function () {
                softUniFly.downloadSong('Eminem', 'Venom', 'Knock let the devil in...');
                let result = softUniFly.rateArtist('Eminem', 10);
                expect(result).to.equal(10);
            });
        });
    });
});