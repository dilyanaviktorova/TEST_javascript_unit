import { analyzeArray } from "../04-Array-Analyzer/arrayAnalyzer.js";
import { expect } from "chai";

describe('04.ArrayAnalyzer_Tests', () => {

    it('Should return undefined if the given input is not an array ot array length is equal to zero', () => {
        expect(analyzeArray("The sun goes down")).to.be.undefined
        expect(analyzeArray([])).to.be.undefined
    });

    it('Should return undefined if the type of given index is not a number', () => {
        expect(analyzeArray([1,"s",8,7])).to.be.undefined
       
    });

    it('Should return properly exit in array with no equal elements', () => {
        let expectedObj = {
            min: 1,
            max: 8,
            length: 3
        }

        expect(analyzeArray([1,8,7]).min).to.equal(expectedObj.min)
        expect(analyzeArray([1,8,7]).max).to.equal(expectedObj.max)
        expect(analyzeArray([1,8,7]).length).to.equal(expectedObj.length)
    });

    it('Should return properly exit in array with single element', () => {
        let expectedObj = {
            min: 8,
            max: 8,
            length: 1
        }

        expect(analyzeArray([8]).min).to.equal(expectedObj.min)
        expect(analyzeArray([8]).max).to.equal(expectedObj.max)
        expect(analyzeArray([8]).length).to.equal(expectedObj.length)
    });


     it('Should return properly exit in array with equal elements', () => {
        let expectedObj = {
            min: 2.5,
            max: 2.5,
            length: 5
        }

        expect(analyzeArray([2.5, 2.5, 2.5, 2.5, 2.5]).min).to.equal(expectedObj.min)
        expect(analyzeArray([2.5, 2.5, 2.5, 2.5, 2.5]).max).to.equal(expectedObj.max)
        expect(analyzeArray([2.5, 2.5, 2.5, 2.5, 2.5]).length).to.equal(expectedObj.length)
    });

    it('Should return properly exit in array with zeroes', () => {
        let expectedObj = {
            min: 0,
            max: 0,
            length: 3
        }

        expect(analyzeArray([0, 0, 0]).min).to.equal(expectedObj.min)
        expect(analyzeArray([0, 0, 0]).max).to.equal(expectedObj.max)
        expect(analyzeArray([0, 0, 0]).length).to.equal(expectedObj.length)
    });
})