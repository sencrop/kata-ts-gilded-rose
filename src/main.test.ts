import { GildedRose, Item } from "./main";

describe("Gilded Rose", function () {
  const executeUpdateQuality = (
    name: string,
    sellIn: number,
    quality: number
  ): Item => {
    const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
    return gildedRose.updateQuality()[0];
  };

  it("should update quality", function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    expect(executeUpdateQuality).toVerifyAllCombinations(
      [
        "foo",
        "Aged Brie",
        "Backstage passes to a TAFKAL80ETC concert",
        "Sulfuras, Hand of Ragnaros",
      ],
      [-1, 0, 1, 6, 11],
      [-1, 0, 49, 50, 51]
    );
  });
});
