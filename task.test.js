const {
  isPositive,
  formatName,
  calculateVAT,
  isAdult,
  calculateCartTotal,
  calculateTotalWithVAT,
  createOrderSummary,
  createUserGreeting,
} = require("./task");

describe("UNIT: isPositive", () => {
  test("grąžina true jei skaičius > 0", () => {
    expect(isPositive(1)).toBe(true);
  });

  test("grąžina false jei skaičius = 0", () => {
    expect(isPositive(0)).toBe(false);
  });

  test("grąžina false jei skaičius < 0", () => {
    expect(isPositive(-5)).toBe(false);
  });
});

describe("UNIT: formatName", () => {
  test("paverčia vardą į didžiąsias raides", () => {
    expect(formatName("Jonas")).toBe("JONAS");
  });

  test("meta klaidą jei name ne string", () => {
    expect(() => formatName(123)).toThrow("Vardas turi būti tekstas");
  });
});

describe("UNIT: calculateVAT", () => {
  test("apskaičiuoja 21% PVM", () => {
    expect(calculateVAT(100)).toBeCloseTo(21, 10);
  });

  test("0 suma -> 0 PVM", () => {
    expect(calculateVAT(0)).toBe(0);
  });

  test("meta klaidą jei suma neigiama", () => {
    expect(() => calculateVAT(-1)).toThrow("Suma negali būti neigiama");
  });
});

describe("UNIT: isAdult", () => {
  test("grąžina true jei amžius >= 18", () => {
    expect(isAdult({ age: 18 })).toBe(true);
    expect(isAdult({ age: 30 })).toBe(true);
  });

  test("grąžina false jei amžius < 18", () => {
    expect(isAdult({ age: 17 })).toBe(false);
  });

  test("meta klaidą jei user blogas", () => {
    expect(() => isAdult(null)).toThrow("Neteisingas vartotojo objektas");
    expect(() => isAdult({})).toThrow("Neteisingas vartotojo objektas");
    expect(() => isAdult({ age: "18" })).toThrow(
      "Neteisingas vartotojo objektas"
    );
  });
});

describe("UNIT: calculateCartTotal", () => {
  test("sudeda kainas iš masyvo", () => {
    const items = [{ price: 10 }, { price: 5.5 }, { price: 4 }];
    expect(calculateCartTotal(items)).toBeCloseTo(19.5, 10);
  });

  test("tuščias masyvas -> 0", () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  test("meta klaidą jei items ne masyvas", () => {
    expect(() => calculateCartTotal(null)).toThrow("Items turi būti masyvas");
    expect(() => calculateCartTotal({})).toThrow("Items turi būti masyvas");
  });
});

/* ===========================
   INTEGRACINIAI TESTAI
   =========================== */

describe("INTEGRACIJA: calculateTotalWithVAT", () => {
  test("naudoja calculateVAT ir grąžina amount + PVM", () => {
    // 100 + 21 = 121
    expect(calculateTotalWithVAT(100)).toBeCloseTo(121, 10);
  });

  test("perduoda klaidą iš calculateVAT jei amount neigiamas", () => {
    expect(() => calculateTotalWithVAT(-10)).toThrow(
      "Suma negali būti neigiama"
    );
  });
});

describe("INTEGRACIJA: createOrderSummary", () => {
  test("apskaičiuoja total, vat ir finalTotal iš items", () => {
    const items = [{ price: 50 }, { price: 25 }]; // total = 75
    // vat = 75*0.21 = 15.75, finalTotal = 90.75
    const summary = createOrderSummary(items);

    expect(summary.total).toBe(75);
    expect(summary.vat).toBeCloseTo(15.75, 10);
    expect(summary.finalTotal).toBeCloseTo(90.75, 10);
  });

  test("perduoda klaidą jei items ne masyvas (iš calculateCartTotal)", () => {
    expect(() => createOrderSummary(null)).toThrow("Items turi būti masyvas");
  });
});

describe("INTEGRACIJA: createUserGreeting", () => {
  test("formatuoja vardą per formatName ir grąžina pasisveikinimą", () => {
    expect(createUserGreeting("Jonas")).toBe("Sveiki, JONAS!");
  });

  test("perduoda klaidą iš formatName jei name ne string", () => {
    expect(() => createUserGreeting(123)).toThrow("Vardas turi būti tekstas");
  });
});
