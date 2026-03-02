// math.test.js

const { sum, subtract, multiply } = require("./math");

describe("Math funkcijos", () => {
  // =====================
  // SUM
  // =====================

  describe("sum()", () => {
    test("sudeda du teigiamus skaicius", () => {
      expect(sum(2, 3)).toBe(5);
    });

    test("sudeda neigiamus skaicius", () => {
      expect(sum(-2, -3)).toBe(-5);
    });

    test("sudeda su nuliu", () => {
      expect(sum(5, 0)).toBe(5);
    });
  });

  // =====================
  // SUBTRACT
  // =====================

  describe("subtract()", () => {
    test("atima skaicius teisingai", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("gaunamas neigiamas rezultatas", () => {
      expect(subtract(4, 10)).toBe(-6);
    });

    test("atimant nuli rezultatas nesikeicia", () => {
      expect(subtract(7, 0)).toBe(7);
    });
  });

  // =====================
  // MULTIPLY
  // =====================

  describe("multiply()", () => {
    test("padaugina skaicius", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test("dauginimas is nulio", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test("dauginimas su neigiamu skaiciumi", () => {
      expect(multiply(-3, 4)).toBe(-12);
    });
    test("dideli skaiciai", () => {
      expect(sum(1000000, 2000000)).toBe(3000000);
    });
    test("dirba su decimal skaiciais", () => {
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });
});
