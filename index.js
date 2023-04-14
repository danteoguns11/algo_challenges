const calculate = require("./calculate");
const promptSync = require('prompt-sync');
const chalk = require('chalk');

const prompt = promptSync()

console.log(chalk.yellow('Calculator App'))

console.log("Start? (yes/no): ")
let calculating = ""
calculating = prompt()

while (calculating === "yes") {

    console.log("Please enter two numbers and the operator")
    let numOne = prompt("First Number: ")
    let operator = prompt("Choose One (+, -, *, /): ")
    let numTwo = prompt("Second Number: ")

    let result = calculate(parseInt(numOne), parseInt(numTwo), operator)

    if (result > 0) {
        console.log(chalk.red("Result: ", result))
    }
    else if (result < 0) {
        console.log(chalk.green("Result: ", result))
    }
    else {
        //rgb(255, 165, 0) = orange
        console.log(chalk.rgb(255, 165, 0)("Enter a valid number/operator"))
    }
    calculating = prompt("Start? (yes/no): ")
}
