// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

// fetch user - call
// fetch product - call
// fetch stores - call

// main()
// - async1 -> thread -> main/stack
// - async2 -> thread2 -> main/stack
// - async3 -> thread3 -> main/stack

function resolveAfter2Seconds() {

    return new Promise((resolve,reject) => {
            // setTimeout(() => {
            //     resolve({
            //         "statuscode" : 200,
            //         "statusmsg" :'resolved'
            //         });
            // }, 2000);

            setTimeout(() => {
                reject({
                    "statuscode" : 500,
                    "statusmsg" :'rejected'
                    });
            }, 2000);
    });
}

console.log("async Execution starts");

async function asyncCall() {
    console.log("Before await");

    await resolveAfter2Seconds()
            .then(data=>console.log("Await data then ", data))
            .catch(err=>console.log("Await data catch", err))

    console.log("After await")

    console.log("Before await 2");

    await resolveAfter2Seconds()
            .then(data=>console.log("Await data then 2 ", data))
            .catch(err=>console.log("Await data catch 2 ", err))

    console.log("After await 2")
}
asyncCall();

console.log("async Execution ends");
