const { calculateShipping } = require("./shipping");

describe("calculateShipping", () => {
  test("weight <= 1kg => 5€", () => {
    expect(calculateShipping(1, false)).toBe(5);
    expect(calculateShipping(0.5, false)).toBe(5);
  });

  test("1kg < weight <= 5kg => 10€", () => {
    expect(calculateShipping(2, false)).toBe(10);
    expect(calculateShipping(5, false)).toBe(10);
  });

  test("weight > 5kg => 20€", () => {
    expect(calculateShipping(6, false)).toBe(20);
  });

  test("express prideda +5€", () => {
    expect(calculateShipping(1, true)).toBe(10);
    expect(calculateShipping(3, true)).toBe(15);
    expect(calculateShipping(6, true)).toBe(25);
  });

  test("weight <= 0 meta klaida", () => {
    expect(() => calculateShipping(0, false)).toThrow(
      "Svoris turi buti teigiamas"
    );
    expect(() => calculateShipping(-1, true)).toThrow(
      "Svoris turi buti teigiamas"
    );
  });

  test("boundary values", () => {
    expect(calculateShipping(1.0001, false)).toBe(10);
    expect(calculateShipping(5.0001, false)).toBe(20);
  });
});
