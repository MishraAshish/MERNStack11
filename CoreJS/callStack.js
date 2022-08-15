//Execution in javascipt uses Stack like other languages and this format is LIFO : Last In First Out
//call stack : LIFO - last in first out
//call stack visualization upto and extent

function foo() {
    //console.log("foo called")
    throw new Error("Foo is not a good function"); 
}

function bar(){
    //console.log("bar called")
    foo(); //calling or invoking foo
}

function baz(){
    //console.log("baz called")
    bar(); //calling or invoking bar
}

//baz();


//RangeError: Maximum call stack size exceeded
function BlowUpStack() {
    BlowUpStack()
}

BlowUpStack();