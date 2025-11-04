import { lookupChar } from "../02-Lookup-Char/charLookUp.js";
import { expect } from "chai";

describe('02.LookUpChar_Tests', () => {
    
    it('Should return undefined if string is not string and index is not integer', () => {
        expect(lookupChar(5, 3)).to.be.undefined
        expect(lookupChar("Didi", "Didi")).to.be.undefined
        expect(lookupChar(5,"Didi")).to.be.undefined
        expect(lookupChar(5, 2.5)).to.be.undefined
        expect(lookupChar("Didi", 2.5)).to.be.undefined
    })

    it('Should return incorrect index if the index is not valid', () => {
        expect(lookupChar("Didi", -1)).to.be.equal("Incorrect index")
        expect(lookupChar("Didi", 4)).to.be.equal("Incorrect index")
        expect(lookupChar("Didi", 10)).to.be.equal("Incorrect index")
    })

    it('Should return the correct char at the given index', () => {
        expect(lookupChar("Didi", 0)).to.be.equal("D")
        expect(lookupChar("Didi", 3)).to.be.equal("i")
        expect(lookupChar("Didi", 2)).to.be.equal("d")
    })

})
