// call back hell - too much of call backs if one call back fails then other enter a infinite loop

// function SigninSignUp(AuthenticationCallback, AuthorizationCallback, NavigationCallback) {
//     let ValidUser =  AuthenticationCallback(userid, password, AuthorizationCallback); //making a server call - ajax (in async)
//         if (ValidUser) {
//             let userRole = AuthorizationCallback(ValidUser, NavigationCallback); //making a server call - ajax (in async)            
//             //userRole.whatisTheOutput //success or failed -- promise
//             if (userRole) { 
//                 let nextPage = NavigationCallback(userRole) //making a server call - ajax (in async)
//             } else {
//                 //check again for the user validity
//                 SigninSignUp(...callbacks);
//             }
//         } else {
//             //send him on forgot password 
//         }
// }
// SigninSignUp(AuthenticationFunc, AuthorizationFunc, NavigationFunc)

//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)


let lunchPromise = new Promise((resolve, reject)=>{

            //processing lunch party
            //promise is successful
            //make a service call - output
            //resolve(output); //100 records
            setTimeout(() => {
                resolve({
                    "status": "success",
                    "msg" : "lunch party done!",
                    "code" : 200
                })    
            }, 3000);


            setTimeout(() => {
                reject({
                    "status": "failed",
                    "msg" : "server is down!",
                    "code" : 500
                })    
            }, 2000);
        })


console.log(lunchPromise);

lunchPromise.then((data)=>console.log("data after resolved ", data)) //we can further write our conditions on success
            .catch((err)=>{console.log("catching the error ", err)}) //we can further write our conditions on failure

// lunchPromise
// //.then((data)=>{return data.TopFiveRecords()) //will send top 5 records to next then
// .then((data)=>console.log("data after resolved ", data))
// .catch((err)=>{console.log("catching the error ", err)})


// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing