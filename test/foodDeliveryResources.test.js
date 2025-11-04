import { foodDelivery } from "../06-Food-Delivery-Resources/food delivery.js";
import { expect } from "chai";

describe('05.Food-Delivey_Tests', () => {
    describe('getCategory', () => {
       
        it('Should return proper msg if the category is Vegan', () => {
            let msg = "Dishes that contain no animal products.";
            expect(foodDelivery.getCategory("Vegan")).to.be.equal(msg)
        });

        it('Should return proper msg if the category is Vegetarian', () => {
            let msg = "Dishes that contain no meat or fish.";
            expect(foodDelivery.getCategory("Vegetarian")).to.be.equal(msg)
        });

        it('Should return proper msg if the category is Gluten-Free', () => {
            let msg = "Dishes that contain no gluten.";
            expect(foodDelivery.getCategory("Gluten-Free")).to.be.equal(msg)
        });

        it('Should return proper msg if the category is All', () => {
            let msg = "All available dishes.";
            expect(foodDelivery.getCategory("All")).to.be.equal(msg)
        });

        it('Should return Invalid category error when the input is not valid', () => {
            
            expect(()=> foodDelivery.getCategory("Hohoho")).to.throw("Invalid Category!");
        });
    });

    describe('addMenuItem', () => {
       
        it('Should return Invalid Information error when the menuItem is not an array and its length is less than 1', () => {
            
            expect(()=> foodDelivery.addMenuItem("Caesar Salad", 5)).to.throw("Invalid Information!");
            expect(()=> foodDelivery.addMenuItem([], 5)).to.throw("Invalid Information!");
        });

        it('Should return Invalid Information error when the type of maxPrice is not number and its less than 5', () => {
            
            expect(()=> foodDelivery.addMenuItem(["Salad", "Shrimps", "Desert"], "Hohoho")).to.throw("Invalid Information!");
            expect(()=> foodDelivery.addMenuItem(["Salad", "Shrimps", "Desert"], 2)).to.throw("Invalid Information!");
        });

        it('Should returns correct message when some items are > maxPrice"', ()=>{
             
             const menu = [

        { name: "Burger", price: 10 },
        { name: "Salad", price: 6 },
        { name: "Steak", price: 20 },
        { name: "Soup", price: 5 },

        ];

        let msg = "There are 2 available menu items matching your criteria!";
        expect(foodDelivery.addMenuItem(menu, 6))

        });

        it('Should returns correct message when some items are <= maxPrice"', ()=>{
             
             const menu = [

        { name: "Burger", price: 10 },
        { name: "Salad", price: 6 },
        { name: "Steak", price: 20 },
        { name: "Soup", price: 5 },

        ];

        let msg = "There are 3 available menu items matching your criteria!";
        expect(foodDelivery.addMenuItem(menu, 10))

        });

        it('Should returns correct message when no items is in the array', ()=>{
             
             const menu = [

        { name: "Burger", price: 10 },
        { name: "Salad", price: 6 },
        { name: "Steak", price: 20 },
        { name: "Soup", price: 7 },

        ];

        let msg = "There are 0 available menu items matching your criteria!";
        expect(foodDelivery.addMenuItem(menu, 5))

        });

    });

    describe('calculateOrderCost', () => {

       it('Should return Invalid Information error if shipping and addons are not arrays and type of discount is not boolean', ()=> {
         expect(()=> foodDelivery.calculateOrderCost("Box3", ["Box1", "Box2"], true)).to.throw('Invalid Information');
         expect(()=> foodDelivery.calculateOrderCost(["standard", "express"], 4 , true)).to.throw('Invalid Information');
         expect(()=> foodDelivery.calculateOrderCost(["standard", "express"], ["sauce", "beverage"], 3)).to.throw('Invalid Information');
       });

       it('Should return proper msg and values with existing items and discount is false.', () => {
         let msg = "You spend $4.00 for shipping and addons!";
         expect(foodDelivery.calculateOrderCost(["fast", "standard"], ["sauce", "desert"], false)).to.be.equal(msg);
         expect(foodDelivery.calculateOrderCost(["standard"], ["sauce"], false)).to.be.equal(msg);
         let msg2 = "You spend $6.50 for shipping and addons!";
         expect(foodDelivery.calculateOrderCost(["standard"], ["beverage", "desert"], false)).to.be.equal(msg2);
       });

       it('Should return proper msg and values with repeated items and discount is false.', () => {
         let msg = "You spend $8.00 for shipping and addons!";
         expect(foodDelivery.calculateOrderCost(["standard", "standard"], ["sauce", "sauce"], false)).to.be.equal(msg);
       });

       it('Should return proper msg and values with no existing items discount is false.', () => {
        let msg = "You spend $0.00 for shipping and addons!";
          expect(foodDelivery.calculateOrderCost(["stand", "standar"], ["sace", "auce"], false)).to.be.equal(msg);
       });


       it('Should return proper msg and values with existing items and discount is true.', () => {
         let msg = "You spend $3.40 for shipping and addons with a 15% discount!";
         expect(foodDelivery.calculateOrderCost(["fast", "standard"], ["sauce", "desert"], true)).to.be.equal(msg);
         expect(foodDelivery.calculateOrderCost(["standard"], ["sauce"], true)).to.be.equal(msg);
         let msg2 = "You spend $5.52 for shipping and addons with a 15% discount!";
         expect(foodDelivery.calculateOrderCost(["standard"], ["beverage", "desert"], true)).to.be.equal(msg2);
       });

       it('Should return proper msg and values with repeated items and discount is true.', () => {
         let msg = "You spend $6.80 for shipping and addons with a 15% discount!";
         expect(foodDelivery.calculateOrderCost(["standard", "standard"], ["sauce", "sauce"], true)).to.be.equal(msg);
       });

       it('Should return proper msg and values with no existing items discount is true.', () => {
        let msg = "You spend $0.00 for shipping and addons with a 15% discount!";
          expect(foodDelivery.calculateOrderCost(["stand", "standar"], ["sace", "auce"], true)).to.be.equal(msg);
       });



        
    });
})