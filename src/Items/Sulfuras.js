import { Item } from './Item.js';

class Sulfuras extends Item {
    constructor(sellIn, quality) {
        super("Sulfuras, Hand of Ragnaros", sellIn, quality);
    }

    update() { }
}

export { Sulfuras };