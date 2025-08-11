//                810
function cashOut(money) {
  if (money < 0 || typeof money != "number") {
    return "Invalid";
  }
  let charge = money * (1.75 / 100);
  let fixedcharge = charge.toFixed(4); //1.7500 -> string
  let finalCharge = parseFloat(fixedcharge); //1.75
  return finalCharge;
}
