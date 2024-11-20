// Define functions for basic arithmetic operations
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

// Main function to take user input and perform the selected operation
function calculator() {
    const choice = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

    if (['1', '2', '3', '4'].includes(choice)) {
        const num1 = parseFloat(prompt("Enter first number:"));
        const num2 = parseFloat(prompt("Enter second number:"));

        let result;
        switch (choice) {
            case '1':
                result = add(num1, num2);
                break;
            case '2':
                result = subtract(num1, num2);
                break;
            case '3':
                result = multiply(num1, num2);
                break;
            case '4':
                result = divide(num1, num2);
                break;
        }
        alert(`The result is: ${result}`);
    } else {
        alert("Invalid input");
    }
}

// Run the calculator
calculator();