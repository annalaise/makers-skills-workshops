describe("smiley", function() {
  it("should add a space and a smiley to the string", function() {
    expect(smiley("hello")).toEqual("hello :)");
  });
});
