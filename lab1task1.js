function add(a, b) {
    if (a === undefined || b === undefined) {
        return "Error: One or more arguments are missing!";
    }
    return a + b;
}

function subtract(a = 0, b = 0) {
    return a - b;
}

function multiply(...nums) {
    return nums.reduce((acc, val) => acc * val, 1);
}

function divide() {
    if (arguments.length === 0) return "Error: No arguments provided!";
    
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) return "Error: Division by zero!";
        result /= arguments[i];
    }
    return result;
}

console.log("Add:", add(5, 3));
console.log("Add (missing):", add(5));

console.log("Subtract:", subtract(10, 4));
console.log("Subtract (one arg):", subtract(10));

console.log("Multiply:", multiply(2, 3, 4));
console.log("Multiply (single):", multiply(7));

console.log("Divide:", divide(100, 2, 5));
console.log("Divide (with zero):", divide(50, 0));
