// // IIFES (Immediately Invokeable Function Expression)
// (function display(message) {
//     document.write(message);
// })("Hello Bangladesh");

// Function expression
const display2 = function displayMessage(msg) {
    // document.write(msg);
}

display2('I am message!');

// ( ), { }, [ ], < >
// Task-7: Creat an IIFEs that print sum of 2 number
const sum = function numbers() {
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    document.write(result);
}

sum();
