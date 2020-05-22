let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}