// shift function. shift hocche pop er biporit

/* var names = ["Anisul", " Lima", " Shipa", " Rinku"];
names.shift();
console.log(names); */



// unshift function. unshift hocche push er biporit

/* var names = ["Anisul", " Lima", " Shipa", " Rinku"];
names.unshift("Rasel");
console.log(names);
 */


// adding element using splice
/* var names = ["Anisul", " Lima", " Shipa"];
names.splice(2, 0, "Rasel", "Tamal");
console.log(names); */



// remove element using splice
/* var names = ["Anisul", " Lima", " Shipa"];
names.splice(1, 2);
console.log(names); */


// slice - mane kete fela

/* var names = ["Anisul", " Lima", " Shipa"];
var newArray = names.slice(1);
console.log(newArray); */


// sort function
/* var names = ["C", " A", " B"];
names.sort();
console.log(names);

// reverse function
var names = ["A", " C", " B"];
names.reverse();
console.log(names); */


// number sorting
/* var numbers = [70, 40, 7, 80, 15];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers); */


// reverse sumber sorting
var numbers = [70, 40, 7, 80, 15];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);
