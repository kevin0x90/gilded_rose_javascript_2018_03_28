import { Item } from './Item.js';

class AgedBrie extends Item {
    constructor(sellIn, quality, qualityCapper) {
        super("Aged Brie", sellIn, quality)
        this.qualityCapper = qualityCapper;
    }

    update() {
        this.sellIn--;
        this.quality++;

        if (this.sellIn < 0) {
            this.quality++;
        }

        this.qualityCapper(this);
    }
}

export { AgedBrie };