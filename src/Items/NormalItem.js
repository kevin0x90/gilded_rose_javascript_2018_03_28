import { Item } from './Item.js';

class NormalItem extends Item {
    constructor(name, sellIn, quality, qualityCapper) {
        super(name, sellIn, quality);
        this.qualityCapper = qualityCapper;
    }

    update() {
        this.sellIn--;
        this.quality--;

        if (this.sellIn < 0) {
            this.quality--;
        }

        this.qualityCapper(this);
    }
}

export { NormalItem };