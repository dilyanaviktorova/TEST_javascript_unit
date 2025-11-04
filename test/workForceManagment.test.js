import { workforceManagement } from "../07-Workforce-Management-Resources/workforceManagement.js";
import { expect } from "chai";

describe('07.Work-Force-Managment_Tests', function() {
    describe('recruiteStaff', function() {

        it('Should throw We are not currently hiring for this role error if the role is not valid', function() {

            expect(()=> workforceManagement.recruitStaff("Dilyana","pharmacist", 4 )).to.throw("We are not currently hiring for this role.");
        });

        it('Should return proper exit if the input data is correct and the experience is >= 4', function() {
            let msg = "Dilyana has been successfully recruited for the role of Developer.";
            expect(workforceManagement.recruitStaff("Dilyana", "Developer", 4)).to.be.equal(msg);
            expect(workforceManagement.recruitStaff("Dilyana", "Developer", 5)).to.be.equal(msg);
        });

        it('Should return proper exit if the input data is correct and the experience is < 4', function() {
            let msg = "Dilyana is not suitable for this role.";
            expect(workforceManagement.recruitStaff("Dilyana", "Developer", 3)).to.be.equal(msg);
            expect(workforceManagement.recruitStaff("Dilyana", "Developer", 0)).to.be.equal(msg);
        });
    });

    describe('computeWages', function() {
        
        it('Should throw Invalid hours error if hoursWorked is not a number or is negative number', function() {
            expect(()=> workforceManagement.computeWages("4fs")).to.throw("Invalid hours");
             expect(()=> workforceManagement.computeWages(-9)).to.throw("Invalid hours");

        });

        it('Should retun proper exit if the input data is correct and hoursWorked is > 160', function() {
            expect(workforceManagement.computeWages(161)).to.be.equal(4398);
        });

         it('Should retun proper exit if the input data is correct and hoursWorked is <= 160', function() {
            expect(workforceManagement.computeWages(100)).to.be.equal(1800);
            expect(workforceManagement.computeWages(160)).to.be.equal(2880);
        });

    });

    describe('dismissEmployee', function() {

        it('Should throw Invalid input error if workForce is not an array, employeeIndex is not a number or is less than 0 or its length is >= workForce.length', function(){

            expect(() => workforceManagement.dismissEmployee("Dilyana, 3")).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Dilyana", "Cvetislav"], 3)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Dilyana", "Cvetislav"], -1)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Dilyana", "Cvetislav"], 5)).to.throw("Invalid input");

        });

        it('Should return proper array with updated stuff if the input data is corrrect', function(){
            let updated = "Cvetislav, Viktoria, Teodor";
         expect(workforceManagement.dismissEmployee(["Dilyana", "Cvetislav", "Viktoria","Teodor"], 0)).to.be.equal("Cvetislav, Viktoria, Teodor");
         expect(workforceManagement.dismissEmployee(["Dilyana", "Cvetislav", "Viktoria","Teodor"], 3)).to.be.equal("Dilyana, Cvetislav, Viktoria");
        });


    });
}); 