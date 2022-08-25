// the first file for express
console.log("this is the Server file")
let port = 9000;
let express = require('express');

let app = express();//when we instantiate, it return top level express application

app.get("/",(req, res)=>{
    res.send("Hello World!!")
})

app.get("/hello",(req, res)=>{    
    res.json({"MSG":"Hello World!!"})
})

app.get("/queryme",(req, res)=>{    //localhost:9000/queryme?name=somename&age=some age
    let qs = req.query["name"];
    let qs2 = req.query["trainee"];

    res.send(`<h1>${qs + qs2}</h1>`)
})

app.get("/querybyid/:id",(req, res)=>{    //localhost:9000/querybyid/25
    let id = req.params["id"];
    
    res.send(`Route param is ${id} can be used to pass data in url`)
})

app.listen(port,()=>{
    console.log(`Express application is running on port ${port}  localhost:9000`);
})