export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (
        item.name !== "Aged Brie" &&
        item.name !== "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
          item.quality--;
        }
      } else {
        if (item.quality < 50) {
          item.quality++;
          if (
            item.name == "Backstage passes to a TAFKAL80ETC concert" &&
            item.quality < 50
          ) {
            if (item.sellIn < 11) {
              item.quality++;
            }
            if (item.sellIn < 6) {
              item.quality++;
            }
          }
        }
      }
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }
      if (item.sellIn < 0) {
        if (item.name !== "Aged Brie") {
          if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
            if (
              item.quality > 0 &&
              item.name !== "Sulfuras, Hand of Ragnaros"
            ) {
              item.quality--;
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
    }

    return this.items;
  }
}
