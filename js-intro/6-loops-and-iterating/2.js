function factorial(num) {
  let factored_num = 1
  for (let factor = num; factor > 0; factor -= 1) {
    factored_num = factored_num * factor;
  }

  return factored_num;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6))
console.log(factorial(7));