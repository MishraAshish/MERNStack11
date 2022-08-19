// concurrent promise calls
// when we make multiple promise calls and we want to check what happened to all of them 
// and then decide whats going to be the next step

//authentication.then("To get resolve callback data").catch("To get reject callback data")

let authentication = new Promise((resolve, reject)=>{ //authentication
    setTimeout(() => {
        resolve({
            "status" : 200,
            "msg" : "authentication",
            "promise date" : (new Date).toDateString()
        })
    }, 1000);
})

let authorization = new Promise((resolve, reject )=>{ //authorization
    
    setTimeout(() => {
        resolve({
            "status" : 200,
            "msg" : "authorization",
            "promise date" : (new Date).toDateString()
        })
    }, 2000);
})

let getusercart = new Promise((resolve, reject)=>{ //getusercart
    // setTimeout(() => {
    //     resolve({
    //         "status" : 200,
    //         "msg" : "getusercart",
    //         "promise date" : (new Date).toDateString()
    //     })
    // }, 3000);

    setTimeout(() => {
        reject({
            "status" : 200,
            "msg" : "getusercart",
            "promise date" : (new Date).toDateString()
        })
    }, 100);
    
})

console.log("Promise is working... ")

// when we need all the promises to be settled we use this
// the case when even one promise fails all the promises gets rejected

// Promise.all(
//         [authentication, 
//             authorization, 
//          getusercart]
//         ).then((data)=>console.log("All Settled Data ", data))
//         .catch((err)=>console.log("Error Data ", err))

// console.log("Promise is complete... ")

//when we need to check the status of all the promises and then make decision
Promise.allSettled(
    [authentication, 
        authorization, 
     getusercart]
    ).then((data)=>{
        console.log("then ", data)
    }).catch((err)=>{
        console.log("catch ",err)
    }).finally((err)=>{
        console.log("Finally ", err)
    })

//create promise of three concurrent sessions of a day and try to resolve and reject them