//

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

PrintDetails() //every function executes in its scope object

PrintDetails.call(User, "Param1", "Param2") // we are dynamically changing context to User for PrintDetails
PrintDetails.call(User2, "Param2.1", "Param2.2") // we are dynamically changing context to User2 for PrintDetails