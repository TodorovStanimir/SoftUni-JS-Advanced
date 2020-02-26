const { expect } = require('chai');
const SoftUniFy = require('./03. Softunify_Ресурси');

describe("class SoftUniFy", () => {
    //test 1
    it("checking property of instance", () => {
        let softunify = new SoftUniFy();
        expect(softunify.allSongs).to.be.a('object');
        expect(softunify).to.have.property('allSongs');
    });
    //test 2
    it("checking method downloadSong(artist, song, lyrics)", () => {
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        let result = softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        expect(result).deep.equal({ "allSongs": { "Eminem": { "rate": 0, "songs": ['Venom - Knock, Knock let the devil in...', 'Phenomenal - IM PHENOMENAL...'], "votes": 0, } } });
        expect(result.allSongs['Eminem']["rate"]).equal(0);
    });
    //test 3, 4, 5, 6, 7, 8 and 9
    it("checking method playSong(song)", () => {
        let softunify = new SoftUniFy();
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        let result = softunify.playSong('Phenomenal')
        expect(result).equal(`You have not downloaded a Phenomenal song yet. Use SoftUniFy's function downloadSong() to change that!`);
    });
    //test 4, 5, 8 and 9
    it("checking getter songsList", () => {
        let softunify = new SoftUniFy(1);
        let result = softunify.songsList;
        expect(result).equal('Your song list is empty');
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...')
        result = softunify.songsList;
        expect(result).equal('Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...');
    });
    // test 10
    // it("checking method rateArtist('artist)", () => {
    //     let softunify = new SoftUniFy();
    //     softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
    //     softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
    //     let result = softunify.rateArtist('artist')
    //     expect(result).equal(`The artist is not on your artist list.`);
    // });
    // test 10
    // it("checking method rateArtist('Eminem', 10)", () => {
    //     let softunify = new SoftUniFy();
    //     softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
    //     softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
    //     softunify.rateArtist('Eminem', 10);
    //     let result = softunify.rateArtist('Eminem', 5);
    //     expect(result).equal(7.50);
    // });
});

// let sofunify = new SoftUniFy();

// sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
// sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
// sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

// console.log(sofunify.allSongs);
