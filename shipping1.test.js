const { sendPrice } = require("./shipping1");

describe("sendPrice()", () => {
  test("meta klaidą, jei svoris <= 0", () => {
    expect(() => sendPrice(0, true)).toThrow("Svoris turi būti teigiamas");
  });

  test("1 kg, ne express", () => {
    expect(sendPrice(1, false)).toBe(5);
  });

  test("2 kg, express", () => {
    expect(sendPrice(2, true)).toBe(15);
  });
  test("6 kg, express", () => {
    expect(sendPrice(6, true)).toBe(25);
  });
});
