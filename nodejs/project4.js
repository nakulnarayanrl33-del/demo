const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Calculator {

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b == 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
}

const calc = new Calculator();

rl.question("Enter first number: ", function(num1) {

    rl.question("Enter second number: ", function(num2) {

        rl.question("Enter operator (+, -, *, /): ", function(op) {

            num1 = Number(num1);
            num2 = Number(num2);

            switch(op) {

                case "+":
                    console.log("Result =", calc.add(num1, num2));
                    break;

                case "-":
                    console.log("Result =", calc.subtract(num1, num2));
                    break;

                case "*":
                    console.log("Result =", calc.multiply(num1, num2));
                    break;

                case "/":
                    console.log("Result =", calc.divide(num1, num2));
                    break;

                default:
                    console.log("Invalid Operator");
            }

            rl.close();
        });
    });
});