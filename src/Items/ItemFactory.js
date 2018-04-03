import { ItemTypes } from './ItemTypes.js';

import { AgedBrie } from './AgedBrie.js';
import { BackstagePass } from './BackstagePass.js';
import { Sulfuras } from './Sulfuras.js';
import { Conjured } from './Conjured.js';
import { NormalItem } from './NormalItem.js';

class ItemFactory {
    static create(name, sellIn, quality) {
        const capper = function (item) {
            if (item.quality > 50) {
                item.quality = 50;
            }
            if (item.quality < 0) {
                item.quality = 0;
            }
        };

        switch (name) {
            case ItemTypes.AGED_BRIE:
                return new AgedBrie(sellIn, quality, capper);
            case ItemTypes.BACKSTAGE_PASS:
                return new BackstagePass(sellIn, quality, capper);
            case ItemTypes.SULFURAS:
                return new Sulfuras(sellIn, quality);
            case ItemTypes.CONJURED:
                return new Conjured(sellIn, quality, capper);
            default:
                return new NormalItem(name, sellIn, quality, capper);
        }
    }
}

export { ItemFactory };