let getNum = function (prompt) {
  rlsync = require('readline-sync');
  return Number(rlsync.question(prompt));
}

let multiply = function () {
  let num1 = Number(getNum('Enter the first number: '));
  let num2 = Number(getNum('Enter the second number: '));
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

multiply()