import { artGallery } from "../05-Art-Gallery-Resources/artGallery.js";
import { expect } from "chai";

describe('05.ArtGalerry_Tests', ()=> {
    describe('addArtwork', ()=> {

        it('Should throw Invalid information error if the type of title or artist is not a string', () => {
            expect(() => artGallery.addArtwork(24, "5 x 5", "Dilyana")).to.throw("Invalid Information!")
            expect(() => artGallery.addArtwork("Box1", "5 x 5", 6)).to.throw("Invalid Information!")
        });

        it('Should throw Invalid dimensions error if pattern of dimensions is not correct', () => {
            expect(() => artGallery.addArtwork("Box1", "5 ! 5", "Dilyana")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork("Box1", "5  5", "Dilyana")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork("Box1", "5g5", "Dilyana")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork("Box1", "5 1 5", "Dilyana")).to.throw("Invalid Dimensions!")
            expect(() => artGallery.addArtwork("Box1", "", "Dilyana")).to.throw("Invalid Dimensions!")
        });

        it('Should throw This artist is not allowed in the gallery error if the artist is not valid', () => {
           expect(() => artGallery.addArtwork("Box1", "5 x 5", "Dilyana")).to.throw("This artist is not allowed in the gallery!")
           expect(() => artGallery.addArtwork("Box1", "5 x 5", "")).to.throw("This artist is not allowed in the gallery!")

        });
 
        it('Should return proper exit if the whole input is correct', () => {
        let expectedMsg = "Artwork added successfully: 'Box1' by Monet with dimensions 5 x 6."
           expect(artGallery.addArtwork("Box1", "5 x 6", "Monet")).to.equal(expectedMsg);

        });

});

 describe('calculateCosts', ()=> {

        it('Should throw Invalid information error if the type of exhibitionCosts is not a number or is less than 0', () => {
            expect(() => artGallery.calculateCosts("5", 10, true)).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(-6, 10, true)).to.throw("Invalid Information!")
        });

        it('Should throw Invalid information error if the type of insuranceCosts is not a number or is less than 0', () => {
            expect(() => artGallery.calculateCosts(10, "s", true)).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(10, -10, false)).to.throw("Invalid Information!")
        });

        it('Should throw Invalid information error if the type of sponsor is not boolean', () => {
            expect(() => artGallery.calculateCosts(10, 20, 20)).to.throw("Invalid Information!")
            expect(() => artGallery.calculateCosts(10, 20, "string")).to.throw("Invalid Information!")
        });

        it('Should return proper output if the input data is correct and have sponsor', ()=> {
            let expectedMsg1 = "Exhibition and insurance costs are 18$, reduced by 10% with the help of a donation from your sponsor.";
            let expectedMsg2 = "Exhibition and insurance costs are 9$, reduced by 10% with the help of a donation from your sponsor.";
            expect(artGallery.calculateCosts(10, 10, true)).to.be.equal(expectedMsg1);
            expect(artGallery.calculateCosts(0, 10, true)).to.be.equal(expectedMsg2);
            expect(artGallery.calculateCosts(10, 0, true)).to.be.equal(expectedMsg2);
        })

        it('Should return proper output if the input data is correct and have not sponsor', ()=> {
            let expectedMsg1 = "Exhibition and insurance costs are 20$.";
            let expectedMsg2 = "Exhibition and insurance costs are 10$.";
            expect(artGallery.calculateCosts(10, 10, false)).to.be.equal(expectedMsg1);
            expect(artGallery.calculateCosts(0, 10, false)).to.be.equal(expectedMsg2);
            expect(artGallery.calculateCosts(10, 0, false)).to.be.equal(expectedMsg2);
        })

        });



describe('organizeExhibits', ()=> {

        it('Should throw Invalid information error if the type of artworksCount is not a number or is less or equal to 0', () => {
            expect(() => artGallery.organizeExhibits("s", 5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(0, 2.5)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(-5, 5)).to.throw("Invalid Information!")
           
        });

        it('Should throw Invalid information error if the type of displaySpacesCount is not a number or is less or equal to 0', () => {
            expect(() => artGallery.organizeExhibits(5, "s")).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(2.5, 0)).to.throw("Invalid Information!")
            expect(() => artGallery.organizeExhibits(5, -5)).to.throw("Invalid Information!")
           
        });

        it('Should return proper exit with correct input data and artworkPerSpace is smaller than 5', () => {
            let msg = "There are only 1 artworks in each display space, you can add more artworks.";
            expect(artGallery.organizeExhibits(5,5)).to.be.equal(msg);
            expect(artGallery.organizeExhibits(2.5,2.5)).to.be.equal(msg);
            
        })

        it('Should return proper exit with correct input data and artworkPerSpace is greater than 5', () => {
            let msg = "You have 1 display spaces with 10 artworks in each space.";
            expect(artGallery.organizeExhibits(10,1)).to.be.equal(msg);
             expect(artGallery.organizeExhibits(10.5,1)).to.be.equal(msg);
        })

        
});

});