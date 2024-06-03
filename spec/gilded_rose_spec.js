describe("Gilded Rose", function() {

  
  //Basic Quality test

  it("should decrease quality and sell_in by 1", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].name).toEqual('+5 Dexterity Vest');
    expect(items[0].quality).toEqual(19);
    expect(items[0].sell_in).toEqual(9);
  });

  it("should increase quality by 1", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].name).toEqual('Aged Brie');
    expect(items[0].quality).toEqual(1);
    expect(items[0].sell_in).toEqual(1);
    
  });

  it("should decrease quality by 1", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 7) ];
    update_quality();
    expect(items[0].name).toEqual('Elixir of the Mongoose');
    expect(items[0].quality).toEqual(6);
    expect(items[0].sell_in).toEqual(4);
  });

  it("Sulfuras remains legendary", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
    
    
  });

  // Ticket Tests

  it("should increase quality by 1 as long as the sell_in value is over 10", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].quality).toEqual(21);
    expect(items[0].sell_in).toEqual(14);
  });

  it("should increase quality by 2 as long as the sell_in value is under 11", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 14) ];
    update_quality();
    expect(items[0].quality).toEqual(16);
    expect(items[0].sell_in).toEqual(9);
  });

  it("should increase quality by 3 as long as the sell_in value is under 6", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40) ];
    update_quality();
    expect(items[0].quality).toEqual(43);
    expect(items[0].sell_in).toEqual(4);
  });

  it("should increase quality by 1 as long as the sell_in value is over 10", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
    expect(items[0].sell_in).toEqual(0);
  });

  /*
  it("should decrease quality by 1", function() {
    items = [ new Item("Conjured Mana Cake", 3, 6) ];
    update_quality();
    expect(items[5].quality).toEqual(6);
  });
  */

  

});
