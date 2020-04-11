let rlSync = require('readline-sync');
let first = rlSync.question('What is your first name?\n');
let last = rlSync.question('What is your last name?\n');
console.log(`Hello, ${first} ${last}!`);
