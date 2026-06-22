const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(num) {

    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${num} = ${num * i}`);
    }

    rl.close();
});

