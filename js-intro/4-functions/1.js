// What does this code log to the console? Logs 1.

// Does executing the foo function affect the output? No.

// Why or why not? Because the function creates an inner scope for the second let bar. This means it is not visible outside of the function and does not log with the last console.log.

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);