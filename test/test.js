


let fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]


function fibber(number) {
  if (number < 2) {
    return number;
  } else {
    return fibber(number - 2) + fibber(number - 1);
  }
}



console.log(fibber(0));   // 0
console.log(fibber(1));   // 1
console.log(fibber(2));   // 2
console.log(fibber(3));   // 3
console.log(fibber(4));   // 5
console.log(fibber(8));   // 21
console.log(fibber(10));  // 55