// switch

/*
// digit spelling
// Ex: 0=Zero, 9=Nine (0-9 er baire kichu dile seta invalid dekhabe)

var digit = prompt("Enter any number : ");

var spelling = "";

if(digit == 0){
    spelling = "Zero";
} else if(digit == 1){
    spelling = "One";
} else if(digit == 2){
    spelling = "Two";
} else if(digit == 3){
    spelling = "Three";
} else if(digit == 4){
    spelling = "Four";
} else if(digit == 5){
    spelling = "Five";
} else if(digit == 6){
    spelling = "Six";
} else if(digit == 7){
    spelling = "Seven";
} else if(digit == 8){
    spelling = "Eight";
} else if(digit == 9){
    spelling = "Nine";
} else{
    spelling = "Invalid";
}

document.write("Output = " + spelling);
*/


/*
// switch, case, break, deafult
var digit = prompt("Enter any digit");

var spelling = "";

switch(digit){
    case "0":
        spelling = "Zero";
        break;
    case "1":
        spelling = "One";
        break;
    case "2":
        spelling = "Two";
        break;
    case "3":
        spelling = "Three";
        break;
    case "4":
        spelling = "Four";
        break;
    case "5":
        spelling = "Five";
        break;
    case "6":
        spelling = "Six";
        break;
    case "7":
        spelling = "Seven";
        break;
    case "8":
        spelling = "Eight";
        break;
    case "9":
        spelling = "Nine";
        break;
    default:
        spelling = "Not a digit";
}

document.write("Outpur = " + spelling);
*/


/*
// TASK-5
// Ex-1
let letter = prompt("Enter any letter : ");

letter = letter.toLowerCase();

let vc = "";

switch(letter){
    case "a":
        vc = "Vowel";
        break;
    case "e":
        vc = "Vowel";
        break;
    case "i":
        vc = "Vowel";
        break;
    case "o":
        vc = "Vowel";
        break;
    case "u":
        vc = "Vowel";
        break;
    default:
        vc = "Consonant";
}

document.write("Output = " + vc);
*/

// Ex-2
let letter = prompt("Enter any letter : ");

letter = letter.toLowerCase();

let vc = "";

switch(letter){
    // multiple case
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        vc = "Vowel";
        break;

    default:
        vc = "Consonant";
}

document.write("Output = " + vc);
