// Tikslas: Padengti visas funkcijas UNIT bei integraciniais testais bei suprasti jų veikimą.

function isPositive(number) {
  return number > 0;
}

function formatName(name) {
  if (typeof name !== "string") {
    throw new Error("Vardas turi būti tekstas");
  }
  return name.toUpperCase();
}

function calculateVAT(amount) {
  if (amount < 0) {
    throw new Error("Suma negali būti neigiama");
  }
  return amount * 0.21;
}

function isAdult(user) {
  if (!user || typeof user.age !== "number") {
    throw new Error("Neteisingas vartotojo objektas");
  }

  return user.age >= 18;
}

function calculateCartTotal(items) {
  if (!Array.isArray(items)) {
    throw new Error("Items turi būti masyvas");
  }

  return items.reduce((sum, item) => sum + item.price, 0);
}

function calculateTotalWithVAT(amount) {
  const vat = calculateVAT(amount);
  return amount + vat;
}

function createOrderSummary(items) {
  const total = calculateCartTotal(items);
  const vat = calculateVAT(total);

  return {
    total,
    vat,
    finalTotal: total + vat,
  };
}

function createUserGreeting(name) {
  const formatted = formatName(name);
  return "Sveiki, " + formatted + "!";
}
module.exports = {
  isPositive,
  formatName,
  calculateVAT,
  isAdult,
  calculateCartTotal,
  calculateTotalWithVAT,
  createOrderSummary,
  createUserGreeting,
};
