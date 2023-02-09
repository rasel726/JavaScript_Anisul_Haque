// if, else use
// Ex-1
var num = 5;

if(num%2==0){
    document.write("Even" + "br/");
}

else{
    document.write("Odd" + "<br/>");
}

// Ex-2
var num1 = 0;

if(num1 > 0){
    document.write("Positive" + "<br/>");
}

if(num1 < 0){
    document.write("Negative" + "<br/>");
}

else{
    document.write("Zero" + "<br/>");
}

// Ex-3
var num1 = 0;

if(num1 > 0){
    document.write("Positive" + "<br/>");
}

if(num1 < 0){
    document.write("Negative" + "<br/>");
}

if(num1 == 0){
    document.write("Zero" + "<br/>");
}

// if, else if, else
// Ex-1
/* 
var num2 = 5;

if(num2 > 0){
    document.write("Positive" + "<br/>");
}

else if(num2 < 0){
    document.write("Negative" + "<br/>");
}

else{
    document.write("Zero" + "<br/>");
}

// Ex-2
var num3 = prompt("Enter a number : ");

if(num3 > 0){
    document.write("Positive" + "<br/>");
}

else if(num3 > 0){
    document.write("Positive" + "<br/>");
}

else{
    document.write("Zero" + "<br/>");
}
*/


// Task-4
// Grade System (marks to grade)
var marks = prompt("Enter your marks : ");

if(marks >= 80){
    document.write("Result : " + "GPA- 5 (A+)" + "<br/>");
}

else if(marks >= 70){
    document.write("Result : " + "GPA- 4 (A)" + "<br/>");
}

else if(marks >= 60){
    document.write("Result : " + "GPA- 3.5 (A-)" + "<br/>");
}

else if(marks >= 50){
    document.write("Result : " + "GPA- 3 (B)" + "<br/>");
}

else if(marks >= 40){
    document.write("Result : " + "GPA- 2 (C)" + "<br/>");
}

else if(marks >= 33){
    document.write("Result : " + "GPA- 1 (D)" + "<br/>");
}

else{
    document.write("Result : " + "GPA- Failed" + "<br/>");
}