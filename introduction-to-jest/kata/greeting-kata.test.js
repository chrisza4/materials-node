const { greeting } = require("./greeting-kata");

describe("greeting", () => {
  it("given person name, should greeting person with hello", () => {
    expect(greeting("Chris")).toEqual("Hello, Chris");
  });
  it("given null, should greeting friends", () => {
    expect(greeting(null)).toEqual("Hello, my friend");
  });
  it(`given person name which upper case,
      should greeting person with shouting tone`, () => {
    expect(greeting("CHRIS")).toEqual("HELLO CHRIS!");
  });

  it(`given two person names in array,
      should join with and`, () => {
    expect(greeting(["Jill", "Jane"])).toEqual("Hello, Jill and Jane");
  });

  it(`given three person names in array,
      should join with comma and "and"`, () => {
    expect(greeting(["Amy", "Brian", "Charlotte"])).toEqual(
      "Hello, Amy, Brian and Charlotte"
    );
  });

  it("given", () => {
    expect(greeting(["Amy", "BRIAN", "Charlotte"])).toEqual(
      "Hello, Amy and Charlotte. AND HELLO BRIAN!"
    );
  });
});
