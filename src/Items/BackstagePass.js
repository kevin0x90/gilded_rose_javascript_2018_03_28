import { Item } from './Item.js';

class BackstagePass extends Item {
    constructor(sellIn, quality, qualityCapper) {
        super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
        this.qualityCapper = qualityCapper;
    }

    update() {
        this.quality++;
        if (this.sellIn < 11) {
            this.quality++;
        }

        if (this.sellIn < 6) {
            this.quality++;
        }
        this.qualityCapper(this);

        this.sellIn--;
        if (this.sellIn < 0) {
            this.quality = 0;
        }
    }
}

export { BackstagePass };