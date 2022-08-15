// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object

Name  = "Global Name" //global variable

var User = {
    Name : 'Jason',
    Age : 26,
}

var User2 = {
    Name : 'Joon',
    Age : 22,
}

// tightly coupled - not accepted in large apps
// function PrintDetails() {
//     console.log(User.Age)
//     console.log(User.Name)
// }

function PrintDetails(param, param2) { 
    console.log(this.Age) //this : dynamic context
    console.log(this.Name)
    console.log(param)
    console.log(param2)
}

//PrintDetails() //every function executes in its scope object

//PrintDetails.call(User, "Param1", "Param2") // we are dynamically changing context to User for PrintDetails
//PrintDetails.call(User2, "Param2.1", "Param2.2") // we are dynamically changing context to User2 for PrintDetails


// Apply : is used the same way call is used but, we can pass the parameters in the form of array
// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}


//GetVehicleInfo.call(BMW, "YEs","5","5")
//GetVehicleInfo.apply(BMW, ["Yes","5","4","Yes","US"])

//GetVehicleInfo.apply(SomeCar, ["No","3","4","Yes","Unknown"])

//Print student information using call and apply and try to see how we get these functions executed immediatly


var User = {
    name : "Mei",
    address : "Somewhere on earth",
    getUser : function () {

        console.log(this) //context
        console.log(`User Details are - ${this.name}  -- ${this.address} `) 
        
        setTimeout(function () { //changes the context to timeout
            console.log(this)
            console.log(`User Details are timeout - ${this.name}  -- ${this.address} `) 
        }, 2000) // setTimeout executes the callback function in first parameters after time supplied in second parameter(milliseconds)

        setTimeout(function () { //changes the context to timeout
            console.log(this)
            console.log(`User Details are timeout - ${this.name}  -- ${this.address} `) 
        //}.apply(this), 2000) // call and apply will not work as it executes immediately
        }.bind(this), 2000) // bind attaches the context at any moment
    }
}

User.getUser() // getUser executes on User so context (this) is User
