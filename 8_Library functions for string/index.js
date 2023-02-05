// length- ata diye string er length ber kora jay Ex-1
var text = "Bangladesh";
var totalLength = text.length;
document.write("Total Length Count = " + totalLength, "<br/>");

// Ex-2: evabeo kora jay
var text = "Aamar sonar Bangla";
document.write("Total Length Count = " + text.length, "<br/>");

// user er kache input niye tar length dekha
var text = prompt("Enter your name: "); /* promt()- ei function er maddhome input newa hoy. agulo hocche library function*/
document.write(text.length, "<br/>");

// ekta character er fixed kono index dekha jabe
var text = "BanglaDesh";
document.write(text.charAt(6), "<br/>");

// Uppercase
var text = "Bangladesh";
document.write(text.toLocaleUpperCase(), "<br/>");

// Lowercase
var text = "BANGLADESH";
document.write(text.toLocaleLowerCase(), "<br/>");

// concaetenation- atar mane hocche 2ta string k eksathe jukto kora Ex-1:
var text1 = "Bangladesh ";
var text2 = "is a beautyful country";
document.write(text1.concat(text2), "<br/>");

// Ex-2:
var text1 = "Bangladesh ";
var text2 = "is a beautyful country";
var allText = text1.concat(text2);
document.write(allText, "<br/>");

// slice function: slice mane hocche kete newa
var text1 = "Bangladesh";
var text = text1.slice(2, 5);
document.write(text);


