const calculate = (numOne, numTwo, str) => {
    switch (str) {
        case "+":
            return numOne + numTwo;

        case "-":
            return numOne - numTwo;

        case "/":
            return numOne / numTwo;

        case "*":
            return numOne * numTwo;
    }
}

module.exports = calculate;
