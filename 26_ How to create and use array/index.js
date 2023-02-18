// Array - is an object; collection of variables
var names = ["Anisul", " Lima", " Shipa", " Rinku"];
document.write(names + "<br/>"); //total kotota array ache segulo show korbe
document.write(names.length + "<br/>"); //array te total koyta length ache seta dekhabr
document.write(names[0] + "<br/>"); //array er 1st index just dekhabe

// Push function
var pushName = ["Anisul", " Lima", " Shipa", " Rinku"];
pushName.push(" Rasel");
document.write(pushName + "<br/>");

// Pop function
var popName = ["Anisul", " Lima", " Shipa", " Rinku"];
popName.pop();
document.write(popName + "<br/>");

// concat
var country1 = ["Bangladesh", " India"];
var country2 = [" Pakisthan", " Nepal"];

var country = country1.concat(country2);
document.write(country + "<br/>");
