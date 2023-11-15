const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle Test", () => {
  test("Triangle renders with a green background", () => {
    const triangle = new Triangle();
    triangle.setColor("green");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

describe("Square Test", () => {
  test("Square renders with a yellow background", () => {
    const square = new Square();
    square.setColor("yellow");
    expect(square.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="yellow" />'
    );
  });
});

describe("Circle Test", () => {
  test("Circle renders with a #abcdef background", () => {
    const circle = new Circle();
    circle.setColor("#abcdef");
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#abcdef" />'
    );
  });
});
