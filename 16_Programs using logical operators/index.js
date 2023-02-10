/*
// Task-4
// Letter Grade Program
var marks = prompt("Enter your marks : ");

var result = "";

if(marks > 100 || marks < 0){
    result = "Invalid Marks";
}else if(marks >= 80){
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
*/



/*
// 3ti songkha nibo and 3ti songkhar moddhe boro songkhati nirnoy korar program
var num1 = prompt("Enter number 1 : ");
var num2 = prompt("Enter number 2 : ");
var num3 = prompt("Enter number 3 : ");

var bigNumber = "";

if(num1 > num2 && num1 > 3){
    bigNumber = num1;
} else if(num2 > num1 && num2 > num3){
    bigNumber = num2;
} else{
    bigNumber = num3;
}

document.write("Big number = " + bigNumber);
*/



// Vowel/Consonant
var letter = prompt("Enter e letter : ");

letter = letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    document.write("Vowel");
} else{
    document.write("Constant");
}
