const { expect } = require('chai');
const FilmStudio = require('./filmStudio');

describe("class FilmStudio", () => {

    it("checking name of instance", () => {
        let studio = new FilmStudio('Su-Studio');
        expect(studio.name).to.equal('Su-Studio');
    });

    it("checking is new instance have a property 'films' - empty array", () => {
        let studio = new FilmStudio('Su-Studio');
        expect(Array.isArray(studio.films)).equal(true);
        expect(studio.films.length).equal(0);
    });

    it("checking a function makeMovie() for throws", () => {
        let studio = new FilmStudio('Su-Studio');
        expect(() => studio.makeMovie('Titanik')).to.throw('Invalid arguments count');
        expect(() => studio.makeMovie(['firstRole', 'secondRole'])).to.throw('Invalid arguments count');
        expect(() => studio.makeMovie(123, ['firstRole', 'secondRole'])).to.throw('Invalid arguments');
        expect(() => studio.makeMovie('Titanik', 'firstRole, secondRole')).to.throw('Invalid arguments');
    });

    it("checking my first movie with correct arguments past to function makeMovie()", () => {
        let studio = new FilmStudio('Su-Studio');
        let firstMovie = studio.makeMovie('Andromeda', ['Role1', 'Role2']);
        expect(JSON.stringify(firstMovie)).to.equal('{"filmName":"Andromeda","filmRoles":[{"role":"Role1","actor":false},{"role":"Role2","actor":false}]}');
    });

    it("checking my second movie, which is with the same name like my first", () => {
        let studio = new FilmStudio('Su-Studio');
        studio.makeMovie('Andromeda', ['Role1', 'Role2']);
        let secondMovie = studio.makeMovie('Andromeda', ['Role2', 'Role3']);
        expect(JSON.stringify(secondMovie)).to.equal('{"filmName":"Andromeda 2","filmRoles":[{"role":"Role2","actor":false},{"role":"Role3","actor":false}]}');
    });

    it("checking my third movie, which is with the same name like my first and second", () => {
        let studio = new FilmStudio('Su-Studio');
        studio.makeMovie('Andromeda', ['Role1', 'Role2']);
        studio.makeMovie('Andromeda', ['Role2', 'Role3']);
        let thirdMovie = studio.makeMovie('Andromeda', ['Role2', 'Role3']);
        expect(thirdMovie).deep.equal({
            filmName: 'Andromeda 3',
            filmRoles: [{ role: 'Role2', actor: false }, { role: 'Role3', actor: false }]
        });
    });

    it("checking a function casting(), if we have not any films yet", () => {
        let studio = new FilmStudio('Su-Studio');
        expect(studio.casting('actorName', 'role')).to.equal(`There are no films yet in Su-Studio.`);
    });

    it("checking a function casting() with existing film, but not existing role in it", () => {
        let studio = new FilmStudio('Su-Studio');
        studio.makeMovie('Anakonda', ['Role1', 'Role2']);
        expect(studio.casting('actorName', 'Role3')).to.equal(`actorName, we cannot find a Role3 role...`);
    });

    it("checking a function casting(), with existing film and role", () => {
        let studio = new FilmStudio('Su-Studio');
        studio.makeMovie('Andromeda', ['Role1', 'Role2']);
        let result = studio.casting('actorName', 'Role2');
        expect(result).equal(`You got the job! Mr. actorName you are next Role2 in the Andromeda. Congratz!`);
        expect(studio.films[0].filmRoles[1].actor).equal('actorName')
    });

    it("checking a function lookForProducer(filmName), with non existing movie", () => {
        let studio = new FilmStudio('Su-Studio');
        studio.makeMovie('Andromeda', ['Role1', 'Role2']);
        expect(() => studio.lookForProducer('Titanik')).to.throw(`Titanik do not exist yet, but we need the money...`);
    });

    it("checking a function lookForProducer(filmName)", () => {
        let studio = new FilmStudio('Su-Studio');
        studio.makeMovie('Andromeda', ['Role1', 'Role2']);
        studio.casting('actorName1', 'Role1');
        studio.casting('actorName2', 'Role2');
        let result = studio.lookForProducer('Andromeda')
        expect(JSON.stringify(result))
            .equal('"Film name: Andromeda\\nCast:\\nactorName1 as Role1\\nactorName2 as Role2\\n"');
    });

});