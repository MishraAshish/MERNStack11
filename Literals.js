//Literals are mostly a representation of simple objects that we can refer directly


var userName = "Joon"; //user screen
var age = 21;
var specialization = "MERNStack"


var userNameAdd = "Mei"; //address screen

//Instead of Global variables we should use literals
var User = {
    Name : 'Jason',
    Age : 26,
    Specialization : 'MERNStack'
}

console.log(User.Name);

User.Name = "Mueen"

console.log(User.Name);