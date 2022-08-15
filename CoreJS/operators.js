//Like other programming language we have operators in javascript as well

//&& (and), || (or), !(not), >, <, =, ==, ===, => ....

var VoterAge = 18;
var VoterId = true;

//if (VoterAge == "18" && VoterId) { //this is a double equal to comparison, it compares values only
if (VoterAge === "18" && VoterId) { //this is a triple equal to comparison, it compares value and type both
    console.log("Valid voter, can vote")
} else {
    console.log("InValid voter, can't vote")
}


//ternary operators -->  if ? true statement : false
VoterId && VoterAge === "18" ? console.log("Allowed to vote ternary") : console.log("Not Allowed to vote ternary");