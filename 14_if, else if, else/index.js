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

var result = "";

/* 
SAJIB VAI ER CODE
let loopBreak = false;

let data = {
    "101" : "Invalid", 
    "80" : "A+", 
    "70" : "A", 
    "60" : "A-", 
    "50" : "B", 
    "40" : "C", 
    "33" : "D",
};

Object.keys(data).reverse().forEach((key) => {
    if(marks >= parseInt(key) && !loopBreak){
        result = data[key];
        loopBreak = true;
    }
});
*/


if(marks > 100){
    result = "Invalid";
} else if(marks >= 80){
    result = "5 (A+)";
} else if(marks >= 70){
    result = "4 (A)";
} else if(marks >= 60){
    result = "3.5 (A-)";
} else if(marks >= 50){
    result = "3 (B)";
} else if(marks >= 40){
    result = "2 (C)";
} else if(marks >= 33){
    result = "1 (D)";
} else{
    result = "Failed";
}

document.write("Result : GPA- " + result + "<br/>");