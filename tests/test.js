'use strict';

import { Building, ResidentialBuilding, CommercialBuilding, } from '../src/main';
import chai  from 'chai';
const assert = chai.assert;

describe("Building Class:", function() {
    let dangote = new Building({location:'Dangote',value:2000000, width:675, height:976});
    let otedola = new ResidentialBuilding({location:'Otedola',value:5000000, width:975, height:776, noOfApartments: 5, noOfOccupants: 4})
    it("The building should be a type of `object`, and an instance of the `building` class", () => {
        // let dangote = new Building('Dangote,');
        assert.equal(typeof {},typeof dangote);
        assert.isTrue(true, dangote instanceof Building );
        
        // expect(dangote instanceof Building).toBeTruthy();
    });

    it(`${dangote.height} X ${dangote.width}`, () => {
        assert.equal(dangote.getDimension(),(`${dangote.height} X ${dangote.width}`));
    });

    it(`${otedola.height} X ${otedola.width}`, () => {
        assert.equal(otedola.getDimension(),(`${otedola.height} X ${otedola.width}`));
    });




    // it(`${this.height} X ${this.width}`, () => {
    //     expect(Building.getDimension()).to.equal(`${this.height} X ${this.width}`);
    // });

    // it(`should return "Building Completed on ${this._builtDate}."`, () => {
    //     expect(Building.getBuiltDate()).to.equal(`Building Completed on ${this._builtDate}.`);
    // });

       
})

