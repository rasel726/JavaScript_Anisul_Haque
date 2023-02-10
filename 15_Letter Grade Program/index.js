// Task-4
// Letter Grade Program
var marks = prompt("Enter your marks : ");

var result = "";

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
    result = "Fail";
}

document.write("Result : GPA- " + result + "<br/>");