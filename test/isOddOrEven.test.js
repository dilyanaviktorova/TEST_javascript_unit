import { isOddOrEven } from "../01-Even-Or-Odd/isOddOrEven.js";
import { expect } from "chai";

describe ('01.EvenOrOdd_Tests', () => {
    it('Should return undefined if parameter is not a string', () => {
        expect(isOddOrEven(42)).to.be.undefined
        expect(isOddOrEven(null)).to.be.undefined
        expect(isOddOrEven(undefined)).to.be.undefined
    });

    it ('Should return even if parameter string length is even', () => {
        expect(isOddOrEven("Didi")).to.equal('even')
        expect(isOddOrEven("Di")).to.equal('even')
        expect(isOddOrEven("!!")).to.equal('even')
    });

    it ('Should return odd if string length is odd', () => {
        expect(isOddOrEven("Didka")).to.equal('odd')
        expect(isOddOrEven("D")).to.equal('odd')
        expect(isOddOrEven("!")).to.equal('odd')
    })
})