// loop er maddhome array

// var num = [10, 20, 30, 40, 50];
// for (var i = 0; i < 5; i++) {
//     document.write(" " + num[i]);
// }




// loop er mddhome array dekhabo and sei songkhagulor jogfol ber korbo
// var num = [10, 20, 30, 40, 50];
// var sum = 0;

// for (var i = 0; i < 5; i++) {
//     sum = sum + num[i];
// }
// document.write("Sum = " + sum);



// user theke input nibo
var num = new Array();

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter a number : "));
}

var sum = 0;

for (var i = 0; i < 5; i++) {
    sum = sum + num[i];
}

document.write("Sum = " + sum);