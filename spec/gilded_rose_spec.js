import { Shop }  from '../src/gilded_rose.js';
import {ItemTypes, ItemFactory} from '../src/Items/index.js';

describe("Gilded Rose", function () {
    describe("normal item", function () {
        it("should lower sellIn and quality by 1 for every item", function () {
            const gildedRose = new Shop([ItemFactory.create("normal item", 1, 1)]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("normal item");
            expect(items[0].sellIn).toEqual(0);
            expect(items[0].quality).toEqual(0);
        });

        it("should degrade twice as fast when sell in has passed", function () {
            const gildedRose = new Shop([ItemFactory.create("normal item", 0, 5)]);

            const items = gildedRose.updateQuality();

            expect(items[0].name).toEqual("normal item");
            expect(items[0].sellIn).toEqual(-1);
            expect(items[0].quality).toEqual(3);
        });

        it("should never have a negative quality", function () {
            const gildedRose = new Shop([ItemFactory.create("normal item", 0, 0)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(0);
        });

        it("should never have a negative quality when sellin is positive", function () {
            const gildedRose = new Shop([ItemFactory.create("normal item", 1, 0)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(0);

        });
    });

    describe("Aged Brie", function () {
        it("should increase quality when it gets older", function () {

            const gildedRose = new Shop([ItemFactory.create(ItemTypes.AGED_BRIE, 1, 0)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(1);
        });

        it("should increase quality but never greater 50", function () {

            const gildedRose = new Shop([ItemFactory.create(ItemTypes.AGED_BRIE, 1, 50)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(50);
        });

        it("should increase quality by two if sellin is negative", function () {

            const gildedRose = new Shop([ItemFactory.create(ItemTypes.AGED_BRIE, -1, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(12);
        });
    });

    describe("Sulfuras", function () {
        it("should never been sold and quality never change", function () {
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.SULFURAS, 1, 1)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).toEqual(1);
            expect(items[0].quality).toEqual(1);
        });

        it("should never been sold and quality never change even with higher values", function () {
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.SULFURAS, 10, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).toEqual(10);
            expect(items[0].quality).toEqual(10);
        });
    });

    describe("Backstage passes", function () {

        it("increases by one in quality with sellIn higher 10", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 11, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(11);
        });

        it("increases by two in quality when sellIn equals 10", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 10, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(12);
        });

        it("increases by two in quality when sellIn lower 10 but higher 5", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 9, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(12);
        });

        it("increases by three in quality when sellIn equals 5", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 5, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(13);
        });

        it("increases by three in quality when sellIn is lower 5 and higher 1", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 4, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(13);
        });

        it("increases by three in quality when sellIn equals 1", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 1, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(13);
        });

        it("quality drops to zero when sellIn equals 0", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 0, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(0);
        });

        it("quality drops to zero when sellIn lower 0", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, -1, 10)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(0);
        });

        it("quality caps at 50 when it increases by one and sellIn higher 10", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 11, 50)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(50);
        });

        it("quality caps at 50 when it increases by three and sellIn equals 5", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 5, 48)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(50);
        });

        it("quality caps at 50 when it increases by two and sellIn equals 10", function(){
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.BACKSTAGE_PASS, 10, 49)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(50);
        });
    });

    describe("Conjured Item", function() {
        it("degrades twice as fast in quality", function() {
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.CONJURED, 10, 50)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(48);
        })

        it("degrades twice as fast in quality with sellIn lower zero", function() {
            const gildedRose = new Shop([ItemFactory.create(ItemTypes.CONJURED, -1, 50)]);

            const items = gildedRose.updateQuality();

            expect(items[0].quality).toEqual(46);
        })
    })
});
