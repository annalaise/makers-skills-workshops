describe("interrobang", function() {
  it("should add two question marks, an exclamation mark and then a smiley to passed string", function() {
    expect(interrobangsmiley(smiley, exclaim, question, "hello")).toEqual("hello??! :)");
  });
});
