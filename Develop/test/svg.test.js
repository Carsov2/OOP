const SVG = require("./svg");
const { Square } = require("./shapes");

describe("SVG", () => {
  it("should render a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';


  });

  it("should append text element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';


  });

  it("should set text message and color", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';


  });

  // An exception test checks for code that should throw an error.
  it("should throw if text exceeds 3 characters", () => {
    const expectedError = new Error("Text must not exceed 3 characters.");


  });

  it("should include a shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';


  });

});

