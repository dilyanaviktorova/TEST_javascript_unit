import { mathEnforcer } from "../03-Math-Enforcer/mathEnforcer.js";
import { expect } from "chai";

describe('03.MathEnforcer_Tests', () => {

    describe('addFive', ()=> {
         it('Should return undefined when the given parameter is not a number', ()=> {
        expect(mathEnforcer.addFive(null)).to.be.undefined
        expect(mathEnforcer.addFive("Hello")).to.be.undefined
    });
         it('Should return correct result of adding', ()=> {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
    });

        })  

    describe('subtractTen', () => {

        it('Should return undefined when the given parameter is not a number', ()=> {
        expect(mathEnforcer.subtractTen(null)).to.be.undefined
        expect(mathEnforcer.subtractTen("Hello")).to.be.undefined
    });

    it('Should return correct result of subtraction', ()=> {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(2.5)).to.be.equal(-7.5);
    });

    })

    describe('sum', () => {

        it('Should return undefined when the given parameter is not a number', ()=> {
        expect(mathEnforcer.sum(null, null)).to.be.undefined
        expect(mathEnforcer.sum("Hello", "Didi")).to.be.undefined
        expect(mathEnforcer.sum("Hello", "7")).to.be.undefined
        expect(mathEnforcer.sum("6", "Didi")).to.be.undefined
    });

        it('Should return correct result of sum', ()=> {
            expect(mathEnforcer.sum(15,30)).to.be.equal(45);
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
            expect(mathEnforcer.sum(0, 15)).to.be.equal(15);
            expect(mathEnforcer.sum(-3, 0)).to.be.equal(-3);
            expect(mathEnforcer.sum(2.5, 2.8)).to.be.equal(5.3);
            expect(mathEnforcer.sum(2.5, 2)).to.be.equal(4.5);
            expect(mathEnforcer.sum(-2.5, 2)).to.be.equal(-0.5);
    });

    })


   
})