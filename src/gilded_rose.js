class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(this.updateItem.bind(this));
        return this.items;
    }

    updateItem(item) {
        item.update();
    }
}

export { Shop };