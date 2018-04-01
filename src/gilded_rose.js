class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(this.updateItem.bind(this));
        return this.items;
    }

    updateAgedBrie(item) {
        item.sellIn = item.sellIn - 1;
        this.increaseQuality(item);

        if (item.sellIn < 0) {
            this.increaseQuality(item);
        }
        this.capQuality(item);
    }

    updateBackstagePass(item) {
        this.increaseQuality(item);
        if (item.sellIn < 11) {
            this.increaseQuality(item);
        }

        if (item.sellIn < 6) {
            this.increaseQuality(item);
        }
        this.capQuality(item);

        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }

    updateNormalItem(item) {
        item.sellIn = item.sellIn - 1;
        this.decreaseQuality(item);
        if (item.sellIn < 0) {
            this.decreaseQuality(item);
        }
        this.capQuality(item);
    }

    updateConjured(item) {
        item.sellIn = item.sellIn - 1;
        this.decreaseQuality(item);
        this.decreaseQuality(item);
        if (item.sellIn < 0) {
            this.decreaseQuality(item);
            this.decreaseQuality(item);
        }
        this.capQuality(item);
    }

    capQuality(item) {
        if (item.quality > 50) {
            item.quality = 50;
        }
        if (item.quality < 0) {
            item.quality = 0;
        }
    }

    increaseQuality(item) {
        item.quality = item.quality + 1;
    }

    decreaseQuality(item) {
        item.quality = item.quality - 1;
    }

    updateItem(item) {
        const AGED_BRIE = 'Aged Brie';
        const BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';
        const SULFURAS = 'Sulfuras, Hand of Ragnaros';
        const CONJURED = 'Conjured'

        switch (item.name) {
            case AGED_BRIE:
                return this.updateAgedBrie(item);
            case BACKSTAGE_PASS:
                return this.updateBackstagePass(item);
            case SULFURAS:
                return item;
            case CONJURED:
                return this.updateConjured(item);
            default:
                return this.updateNormalItem(item);
        }
    }

}
