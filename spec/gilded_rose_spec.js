describe("Gilded Rose", function() {

  it("should decrease quality by 1", function() {
    items = [ new Item("Elixir of the Mongoose", 5, 7) ];
    update_quality();
    expect(items[0].quality).toEqual(6);
  });

});
