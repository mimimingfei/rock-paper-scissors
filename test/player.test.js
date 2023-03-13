const chai = require('chai');
const expect = chai.expect;
const Player = require('../src/player.js');

describe(`Player class tests`, () => {
    it(`should set correct name field`, () => {
        testPlayer = new Player('Ming');
        expect(testPlayer.name).to.equal(`Ming`);
    });
})