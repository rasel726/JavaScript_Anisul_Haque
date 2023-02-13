// while loop
var x = 1;

while(x <= 5){
    // document.write(" " + x);
    x = x + 1;
}

// 1-10 porjonto songkhagulor jogfol
var i = 1;
var sum = 0;

while(i <= 10){
    sum = sum + i;
    i = i + 1;
}

// document.write(sum);

// 1-100 porjonto jor songkhagulor jogfol
var i = 2;
var sum = 0;

while(i <= 100){
    sum = sum + i;
    i = i + 2;
}

// document.write(sum);


// TASK-6
var i = 1;
var result = 0;

while(i <= 100){
    if((i % 3 == 0) && (i % 5 == 0)){
        result = result + i;
        console.log(i);
    }
    i = i + 1;
}

document.write(result);
