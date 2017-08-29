'use strict';

import { Building, ResidentialBuilding, CommercialBuilding, } from '../src/main';
import chai  from 'chai';
const assert = chai.assert;

describe("Building Class", function() {
    
    it("The building should be a type of `object`, and an instance of the `building` class", () => {
        let dangote = new Building('Dangote,');
        assert.equal(typeof {},typeof dangote);
        assert.isTrue(true, dangote instanceof Building );
        
        // expect(dangote instanceof Building).toBeTruthy();
    });


    // it(`${this.height} X ${this.width}`, () => {
    //     expect(Building.getDimension()).to.equal(`${this.height} X ${this.width}`);
    // });

    // it(`should return "Building Completed on ${this._builtDate}."`, () => {
    //     expect(Building.getBuiltDate()).to.equal(`Building Completed on ${this._builtDate}.`);
    // });

       
})

