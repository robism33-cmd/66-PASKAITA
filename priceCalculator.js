// price - prekes kaina
// quantity - kiekis
// discount - nuolaida procentaits (0-100)
function calculateTotalPrice(price, quantity, discount) {
  if (price < 0 || quantity < 0) {
    throw new Error("Kaina ir kiekis negali buti neigiami");
  }

  if (discount < 0 || discount > 100) {
    throw new Error("Nuolaida turi buti tarp 0 ir 100");
  }

  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);

  return subtotal - discountAmount;
}

module.exports = {
  calculateTotalPrice,
};
