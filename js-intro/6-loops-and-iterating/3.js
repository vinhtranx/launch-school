// The following code causes an infinite loop (a loop that never stops iterating). Why?

// The condition of the while loop is 'counter = 1' which will always be truthy, so the loop never stops. Also, the break condition is never fulfilled since counter reverts back to being 1 after each loop and can never be greater than 2.

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}