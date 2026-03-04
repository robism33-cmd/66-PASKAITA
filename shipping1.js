function sendPrice(weightKg, isExpressShipping) {
  if (weightKg <= 0) {
    throw new Error("Svoris turi būti teigiamas");
  }

  let price;
  if (weightKg <= 1) price = 5;
  else if (weightKg <= 5) price = 10;
  else price = 20;

  if (isExpressShipping) price += 5;

  return price;
}

module.exports = { sendPrice };
