function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let oneFactor = times(1, 1);
let twoFactor = times(2, oneFactor);
let threeFactor = times(3, twoFactor);
let fourFactor = times(4, threeFactor);
let fiveFactor = times(5, fourFactor);
