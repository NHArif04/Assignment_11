const prompt = require('prompt-sync')();
function multiplicationTable(num) {
  for (let iteration = 1; iteration <= 10; iteration++) {
    const product = num * iteration;
    console.log(`${num} x ${iteration} = ${product}`);
  }
}

const num = prompt('Enter a digit to get multiplication table: ');
multiplicationTable(num);
