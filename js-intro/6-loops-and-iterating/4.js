// Does the following code produce an error? Why or why not? What output does this code send to the console?

// No, because for loops do not require all 3 components, and the increment is taken care of in the console.log.

for (let i = 0; i < 5;) {
  console.log(i += 1);
}