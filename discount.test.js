// discount.test.js

const { calculateTotal } = require("./discount");

describe("Prekiu nuolaidu skaiciavimas", () => {
  test("be nuolaidos kai kiekis < 5", () => {
    expect(calculateTotal(100, 2)).toBe(200);
  });

  test("10% nuolaida kai kiekis >= 5", () => {
    // 100 * 5 = 500 -> -10% = 450
    expect(calculateTotal(100, 5)).toBe(450);
  });

  test("20% nuolaida kai kiekis >= 10 ir suma po nuolaidos NE > 500", () => {
    // 50 * 10 = 500 -> -20% = 400 -> 400 > 500? ne
    expect(calculateTotal(50, 10)).toBe(400);
  });

  test("20% nuolaida kai kiekis >= 10 ir papildoma 5% kai suma po nuolaidos > 500", () => {
    // 100 * 10 = 1000 -> -20% = 800 -> 800 > 500? taip -> -5% = 760
    expect(calculateTotal(100, 10)).toBe(760);
  });

  test("papildoma 5% nuolaida kai suma > 500 (be kiekio nuolaidos)", () => {
    // 200 * 3 = 600 -> 600 > 500? taip -> -5% = 570
    expect(calculateTotal(200, 3)).toBe(570);
  });

  test("meta klaida kai kiekis <= 0", () => {
    expect(() => calculateTotal(100, 0)).toThrow("Kiekis turi buti teigiamas");
    expect(() => calculateTotal(100, -1)).toThrow("Kiekis turi buti teigiamas");
  });

  test("boundary: tiksliai 5 vienetai", () => {
    // 50 * 5 = 250 -> -10% = 225
    expect(calculateTotal(50, 5)).toBe(225);
  });

  test("boundary: tiksliai 10 vienetu (su kaina 50)", () => {
    // 50 * 10 = 500 -> -20% = 400 -> be papildomos 5%
    expect(calculateTotal(50, 10)).toBe(400);
  });
});
