// Relational operator: >, >=, <, <=, ==, ===, !=, !==
var num1 = 20;
var num2 = 25;

document.write("20 > 25 = " + (num1 > num2) + "<br/>"); //num1 er theke num2 boro kina

document.write("20 >= 25 = " + (num1 >= num2) + "<br/>"); //num1 er theke num2 boro/soman kina

document.write("20 => 20 = " + (20 >= 20) + "<br/>"); //20 er theke 20 boro/soman kina

document.write("20 > 20 = " + (20 > 20) + "<br/>"); //20 er theke 20 boro kina

document.write("20 < 20 = " + (20 < 20) + "<br/>"); //20 er theke 20 choto kina

document.write("20 <= 20 = " + (20 <= 20) + "<br/>"); // 20 er theke 20 choto/soman kina

document.write("20 == 20 = " + (20 == 20) + "<br/>"); // ekhane 2ta man soman kina

document.write("20 == '20' = " + (20 == "20") + "<br/>"); //1ta string thakleo er kaj hocche just value check kora. data check kora er kaj noy

document.write("20 ==='20' = " + (20 === "20") + "<br/>"); //er kaj hocche value and data check kora

document.write("25 != 20 = " + (25 != 20) + "<br/>"); //er mane hocche soman noy


// Logical operator: &&, ||, !

// logical and (&&)
var num1 = 50;
var num2 = 30;
var num3 = 20;

document.write("50 > 30 && 50 > 20 = " + (num1 > num2 && num1 > num3) + "<br/>"); //logical and (jekono 1ta mitthe hole return korbe false). 

document.write("50 > 30 && 20 > 30 = " + (num1 > num2 && num3 > num2) + "<br/>");

// logical or (||)
document.write("50 > 30 || 20 > 30 = " + (num1 > num2 || num3 > num2) + "<br/>"); //logical or (jekono 1ta sotti hole return korbe true)

document.write("30 > 50 || 20 > 30 = " + (num2 > num1 || num3 > num2) + "<br/>"); //kono value e jodi sotti na hoy tahole return korbe false

// not operator (!)
document.write("!true = " + !true + "<br/>"); //ata not operator. true k false korbe, r false k true korbe

document.write("!false = " + !false + "<br/>");

document.write("!(25 > 20) = " + !(25 > 20) + "<br/>");

document.write("!(25 < 20) = " + !(25 < 20) + "<br/>");