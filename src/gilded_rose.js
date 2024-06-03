function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (let item of items) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') continue;

    updateSellIn(item);
    updateItemQuality(item);
  }
}

function updateSellIn(item) {
  item.sell_in -= 1;
}

function updateItemQuality(item) {
  if (item.name === 'Aged Brie') {
    updateAgedBrie(item);
  } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
    updateBackstagePasses(item);
  } else if (item.name.startsWith('Conjured')) {
    updateConjuredItem(item);
  } else {
    updateNormalItem(item);
  }
}

function updateAgedBrie(item) {
  increaseQuality(item);
  if (item.sell_in < 0) {
    increaseQuality(item);
  }
}

function updateBackstagePasses(item) {
  if (item.sell_in < 0) {
    item.quality = 0;
  } else if (item.sell_in < 5) {
    increaseQuality(item, 3);
  } else if (item.sell_in < 10) {
    increaseQuality(item, 2);
  } else {
    increaseQuality(item);
  }
}

function updateConjuredItem(item) {
  decreaseQuality(item, 2);
  if (item.sell_in < 0) {
    decreaseQuality(item, 2);
  }
}

function updateNormalItem(item) {
  decreaseQuality(item);
  if (item.sell_in < 0) {
    decreaseQuality(item);
  }
}

function increaseQuality(item, amount = 1) {
  item.quality = Math.min(50, item.quality + amount);
}

function decreaseQuality(item, amount = 1) {
  item.quality = Math.max(0, item.quality - amount);
}
