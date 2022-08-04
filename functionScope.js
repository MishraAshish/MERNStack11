//global scope
//local scope


var random = 25426;
//console.log(private);
var private = 100;

function Print(myVal) {
    console.log(private);

    var private = 101; //this is local to Print can't be accessed outside
    console.log(random);

    // (function () {
    //   console.log(private)  
    // })()
}

//console.log(private);

Print(2500);