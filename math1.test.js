const { sum, subtract, multiply, division } = require("./math1");

describe("Math1 funkcijos", () => {
  describe("sum()", () => {
    test("sudedam du teigiamus skaičius", () => {
      expect(sum(2, 3)).toBe(5);
    });
    test("sudedam neigiamus skaicius", () => {
      expect(sum(-2, -3)).toBe(-5);
    });
    test("sudedam su nuliu", () => {
      expect(sum(8, 0)).toBe(8);
    });
  });
  describe("subtract()", () => {
    test("atimam du teigiamus skaicius", () => {
      expect(subtract(5, 3)).toBe(2);
    });
    test("atimam viena neigiama is teigiamo skaicius", () => {
      expect(subtract(-8, 5)).toBe(-13);
    });
    test("atimam is mazesnio didesni skaiciu", () => {
      expect(subtract(5, 10)).toBe(-5);
    });
    test("atimamis neigiamo teigiama skaiciu", () => {
      expect(subtract(-20, 15)).toBe(-35);
    });
    test("atimam is neigiamo neigiama skaiciu", () => {
      expect(subtract(-20, -40)).toBe(20);
    });
  });
  describe("multiply", () => {
    test("Dauginame du teigiamus skaicius", () => {
      expect(multiply(4, 5)).toBe(20);
    });
    test("dauginame neigiama is teigiamo", () => {
      expect(multiply(-9, 5)).toBe(-45);
    });
  });
  describe("division", () => {
    test("daliname didesni teigiama is mazesnio", () => {
      expect(division(50, 25)).toBe(2);
    });
    test("daliname mazesni teigiama is didesnio", () => {
      expect(division(25, 50)).toBe(0.5);
    });
    test("daliname didesni neigiama is mazesnio teigiamo", () => {
      expect(division(-50, 25)).toBe(-2);
    });
  });
});
