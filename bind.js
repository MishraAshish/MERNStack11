//bind : changes the context of a function at runtime, and doesn't executes immediately but when required
//Skill = "No Skills"
var SoftwareEnggineer = {
    Name : "XYZ Zukerberg",
    Age : 25,
    Skill : "JS, ES6, nodejs",
    
    GetSkills : function() {
        console.log(`Skill  + ${this.Skill}`) //this -will be the SoftwareEnggineer object

        
        var that = this; // copying the context (this) into that variable
        
        //by using context copy
        setTimeout(function() {
            console.log(`Skill Inside SetTimeOut Using + ${that.Skill}`) //instead of using dynamic this we are using this of parent
        }, 2000);

        //by using bind
        setTimeout(function() {
            //console.log(this)//this - refers to the dynamic context and here we have it as Timeout Object

            console.log(`Skill Inside SetTimeOut + ${this.Skill}`)
        }.bind(this), 3000);

    }
}
SoftwareEnggineer.GetSkills();
var NESe = Object.create(SoftwareEnggineer);

NESe.Skill = "Java and J2EE Sprinboot";
NESe.GetSkills();


//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)



//second example
//var selectBtn = document.getElementById("newBtnBind")
//<button id=​"newBtnBind">​Practice Bind​</button>​
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)