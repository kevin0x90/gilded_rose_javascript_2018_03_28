import { Item } from './Item.js';

class Conjured extends Item {
    constructor(sellIn, quality, qualityCapper) {
        super("Conjured", sellIn, quality);
        this.qualityCapper = qualityCapper;
    }

    update() {
        this.sellIn--;
        this.quality -= 2;

        if (this.sellIn < 0) {
            this.quality -= 2;
        }

        this.qualityCapper(this);
    }
}

export { Conjured };