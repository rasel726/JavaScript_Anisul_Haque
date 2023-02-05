var num1 = prompt("Enter First Number : "); //prompt() er maddhome user theke input newa hoy
var num2 = prompt("Enter Second Number : ");

num1 = parseInt(num1, 10); //parseInt() ata diye muloto purno songkha bujhay, er maddhome string to number convert kora hoy
num2 = parseInt(num2, 10);

var sum, sub;

sum = num1 + num2;
document.write("Sum = " + sum + "<br/>");

sub = num1 - num2;
document.write("Sub = " + sub + "<br/>" + "<br/>");


// TASK-3
var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var result;

result = num1 + num2;
document.write(num1 + " + " + num2 + " = " + result + "<br/>");

result = num1 - num2;
document.write(num1 + " - " + num2 + " = " + result + "<br/>");

result = num1 * num2;
document.write(num1 + " * " + num2 + " = " + result + "<br/>");

result = num1 / num2;
document.write(num1 + " / " + num2 + " = " + result + "<br/>");

result = num1 % num2;
document.write(num1 + " % " + num2 + " = " + result + "<br/>");