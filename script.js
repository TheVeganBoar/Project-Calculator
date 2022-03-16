let a = prompt("Enter a number");
let b = prompt("Enter a second number");
let c = prompt("What operator would you like to use (+, -, *, /)"); 
let num1 = parseInt(a);
let num2 = parseInt(b);
let operator = c;
 



// function add
function add(num1, num2) {
    return num1 + num2;
} 

// function subtract
function subtract(num1, num2) {
    return num1 - num2;
} 

// function multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// function divide
function divide (num1, num2) {
    if (divide == 'Infinity') {
        return alert ('You cant divide by zero');
    }
    return num1 / num2;
}

// function operate
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            add(num1,num2);
            break;
        
        case "-":
            subtract(num1,num2);
            break;

        case "*":
            multiply(num1,num2);
            break; 

        case "/":
            divide(num1,num2);
            break;

        default:
            alert ("Error! Didnt recieve an operator. Try again.");
    }
} 

// call operate function with argument selected
operate(num1, num2, operator);


add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);


// display
function display (button) {
    return button.textContent
}