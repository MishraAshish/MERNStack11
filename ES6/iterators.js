//Filter, Map, Some and Reduce : Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Thor"}
];

//1. Persons list saved by ironMan

let prsnSvdIronMan = personsList.filter(person => person.savedby === 'IronMan')

//console.log(prsnSvdIronMan)
//console.log(personsList)

//2. Name of the persons SavedBy captain america

let prsnSvdCA = personsList.map((person)=> {
            if (person.savedby === 'CaptainAmerica') {
            return { 
                "Prefix" : "Mr/Ms", 
                "Actual Name" : person.name                
            } }
            else{
                return ''
            }}).filter((p)=>p!='');

//console.log(prsnSvdCA)

//3. Is there anyone savedby thor 
//some behaves as a short circuit as soon as it gets first value will return
let savedByThor = personsList.some(pern=>pern.savedby==="Thor")

//console.log(savedByThor)

//4. give me the count of persons saved by every superMan

let countSavedByEach = personsList.reduce((prevVal, currVal, index, array)=>{
             console.log(prevVal)
             console.log(currVal)

            prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;

        return prevVal;
}, new Set())// {} []

console.log(countSavedByEach)



//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present