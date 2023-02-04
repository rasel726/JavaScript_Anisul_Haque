// data type check (typeof)
var num = 20;
console.log(typeof(num));

var num = "20";
console.log(typeof(num));

var num = true;
console.log(typeof(num));


// convert number to string (toString)
var num = 20;
num = toString(num);
console.log(typeof(num));

// convert string to number (parseInt)
var  num = "20";
num = parseInt(num);
console.log(typeof(num));

// convert double to number (parseFloat)
var num = 20.5;
num = parseFloat(num);
console.log(typeof(num));

// point er pore kotota number dekhbo tar use (toFixed)
var number = 2.5476;
console.log(number.toFixed(1));

// total jotota number ache tar moddhe length dhore jenokono number dekhabe (toPrecision)
var number = 2.46548;
console.log(number.toPrecision(3));

// number method- ei number method er kaj hocche string ba onno kono data type number e convert kore newa (Number) and ata check korar jonno typeof dekhte pari amra
console.log(typeof(Number("50")));
console.log(typeof(Number("50.5")));

console.log(Number(true));
console.log(Number(false));



