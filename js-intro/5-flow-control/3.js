// Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

// function evenOrOdd(number) {
//   if (number % 2.0 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }

function evenOrOdd(number) {
  if (number !== parseInt(number)) {
    console.log('error. not an integer.')
  }else if (number % 2.0 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(2.5);
evenOrOdd(3.3);
evenOrOdd(4.0);
evenOrOdd("hello");
evenOrOdd(undefined);
evenOrOdd(null);