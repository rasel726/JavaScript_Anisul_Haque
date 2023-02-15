// Creating a function
function square(num) {
    var result = num * num;
    document.write("Result = " + result + "<br/>");
}

// Calling a function
// square(5);
// square(6);
// square(7);


// Multiple function use
function square(num1, num2) {
    var result = num1 * num2;
    document.write("Result = " + result + "<br/>");
}

// square(5, 6);


// return ex-1
function square(num1, num2) {
    var result = num1 * num2;
    return result;
}

// document.write("Result = " + square(5, 6));


// return ex-2
function square(num1, num2) {
    var result = num1 * num2;
    return result;
}

var x = square(5, 6);

// document.write("Result = " + x);


// add function
function addition(x, y) {
    var result = x + y;
    document.write("Sum = " + result + "<br/>");
}

addition(30, 20);
addition(10, 5);
addition(200, 100);


// sub function
function subtraction(x, y) {
    var result = x - y;
    document.write("Sum = " + result + "<br/>");
}

subtraction(50, 30);
subtraction(150, 50);
subtraction(145, 45);



// Ei part e amra ki ki shikhlam
// Creating a function
// Calling a function
// How to pass value in function
// Returning a value