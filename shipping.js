function calculateShipping(weightKg, isExpressShipping) {
  if (weightKg <= 0) {
    throw new Error("Svoris turi buti teigiamas");
  }

  let price;

  if (weightKg <= 1) {
    price = 5;
  } else if (weightKg <= 5) {
    price = 10;
  } else {
    price = 20;
  }

  if (isExpressShipping === true) {
    price += 5;
  }

  return price;
}

module.exports = { calculateShipping };
