// Eventloop is the mechanism which uses pre defined api's of JS to give us nonblocking system of execution
//EventLoop : all those calls which are expected to have delays due to 
//transactions taking time like settimeout, setinterval, server calls (XHR) or file read (async) 
//or any registered callback using Promises
//server - (XHR) XMLHttpRequest api used to make server call


//func1 - 5 sec
//func2 - 5 sc
//func3 - 2 sc
//func4 - 1 sc
//func5 - 0 sc - if we have blocking execution then it would take - 13 secs
//However in JS- non-blocking execution without doing any special thread it will take at max - 5 secs

console.log("Hi! Event Loop!")

setTimeout(function() {
    console.log("I am first call back")//

    setTimeout(function() {
        console.log("I am first call back's callback")//
    }, 0);

}, 1000); //1000 milliseconds

setTimeout(function() {
    console.log("I am second call back")//
}, 1000); //2000

setTimeout(function() {
    console.log("I am third call back")//
}, 1000); //2000

console.log("We did it!")
