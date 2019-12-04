const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("is a function", (done) => {
    expect(typeof mdLinks).toBe("function");
    done();
  });
  it("returns href and text mdLinks", (done) => {
    mdLinks("./READMEtest.md")
      .then((result) => {
        expect(result).toEqual([{"href": "https://pt.wikipedia.org/wiki/Markdown", "text": "Markdown"}]);
        done();
      });
  });

  it("Error test", (done) => {
    mdLinks("./none.md")
      .catch((error) => {
        expect(error).toEqual("Could not open file");
        done();
      });
  });
});