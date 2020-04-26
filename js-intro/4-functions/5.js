// What does the following code log to the console?
// => nothing

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
