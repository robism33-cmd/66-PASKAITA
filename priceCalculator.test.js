const { calculateTotalPrice } = require("./priceCalculator");

describe("calculateTotalPrice funkcionalumas", () => {
  test("apskaiciuoja kaina be nuolaidos", () => {
    expect(calculateTotalPrice(10, 2, 0)).toBe(20);
  });

  test("apskaiciuoja kaina su nuolaida", () => {
    expect(calculateTotalPrice(100, 1, 10)).toBe(90);
  });

  test("apskaiciuoja su 50% nuolaida", () => {
    expect(calculateTotalPrice(200, 1, 50)).toBe(100);
  });

  test("meta klaida jei kaina neigiama", () => {
    expect(() => calculateTotalPrice(-10, 2, 0)).toThrow(
      "Kaina ir kiekis negali buti neigiami",
    );
  });

  test("meta klaida jei nuolaida yra didesne nei 100 arba mazesne nei 0", () => {
    expect(() => calculateTotalPrice(100, 1, 120)).toThrow(
      "Nuolaida turi buti tarp 0 ir 100",
    );
  });
});
