console.log('JS');

console.log('Whose in this class?');
let classmates = require('./data.js');

let count = 0;
for (students of classmates) {
  count++;
  console.log(students);
}
console.log(`There are ${count} people in this class`);

let scream = require('./scream');

console.log('Hello', scream('world!'));
