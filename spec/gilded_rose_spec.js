describe("Gilded Rose", function() {

  it("should decrease quality by 1", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
   //items = [ new Item("Conjured Mana Cake", 3, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(19);
    //expect(items[5].quality).toEqual(6);
  });

  it("should decrease quality by 1", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
  });

  it("should decrease quality by 1", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 7) ];
    update_quality();
    expect(items[0].quality).toEqual(6);
  });

  it("should decrease quality by 1", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
  });

  it("should decrease quality by 1", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);
  });


  

});
