// discount.js

function calculateTotal(price, quantity) {
  if (quantity <= 0) {
    throw new Error("Kiekis turi buti teigiamas");
  }

  let total = price * quantity;

  // Kiekio nuolaida
  if (quantity >= 10) {
    total *= 0.8; // -20%
  } else if (quantity >= 5) {
    total *= 0.9; // -10%
  }

  // Papildoma nuolaida pagal suma (po kiekio nuolaidos)
  if (total > 500) {
    total *= 0.95; // papildomi -5%
  }

  return Number(total.toFixed(2));
}

module.exports = { calculateTotal };
