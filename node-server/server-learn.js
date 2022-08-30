// the first file for express
console.log("this is the Server file")
let port = 9000;
let express = require('express'); //including express module in our application

let defaultRouter = require("./routes/defaultRouter");

//let router = express.Router(); //share the load of routing table from main app, without creating a express

let app = express();//when we instantiate, it return top level express application

//mounting of express application
let adminApp = express(); //initialization of express admin application

// serve static files like images css using static middleware
app.use("/static", express.static("public"))

app.use("/", defaultRouter);

//express api with uri or end point declared on first param
app.get("/",(req, res)=>{ //google.com // localhost:9000 - get
    res.sendFile(__dirname+"/public/index.html")
    //res.send("Hello World!!")
})

//instead of creating api for each static file to serve, we should use static middle to configure and serve
// app.get("/public/welcome.js",(req, res)=>{ //google.com // localhost:9000 - get
//     res.sendFile(__dirname+"/public/welcome.js")
//     //res.send("Hello World!!")
// })

//localhost:9000/api/user - get/post/pust/patch/delete

// app.get("/hello",(req, res)=>{    // localhost:9000/hello - get
//     res.json({"MSG":"Hello World!!"})
// })

app.get("/queryme",(req, res)=>{    //localhost:9000/queryme?name=somename&age=some age
    //console.log(req)
    let qs = req.query.name;
    let qs2 = req.query["trainee"];

    res.send(`<h1>${qs + qs2}</h1>`) //` - backtik or template literal
})

app.get("/querybyid/:id",(req, res)=>{    //localhost:9000/querybyid/25
    let id = req.params["id"];
    
    res.send(`Route param is ${id} can be used to pass data in url`)
})

app.use("/admin", adminApp); //main app transfers request to admin app to save some bandwidth

adminApp.get("/hello",(req, res)=>{
    res.send("Response from mounted admin application")
})

// app.get("*",(req, res)=>{    //localhost:9000/whatever or default // always keep it as last definition
//     res.sendFile(__dirname+"/public/index.html")
// })


app.listen(port,()=>{
    console.log(`Express application is running on port ${port}  localhost:9000`);
})


//create an api with name save student and pass details like - name, session, skillset in it
//create a student model, student router, mount the same in sever.js file
//then add one more field to student model - expertise and save the new document


// create a setup of node-server on your name e.g. - danny-node-server
// create multiple routes using the express router e.g. - default, and danny-router
// create default api's like hello and one more in default
// create a data model using mongoose with your same or same as done with student task
// in another router like  -student router create an api to save the student
// also create one api to fetch all the students in json format using - model.find function

// show your understanding on npm, script setup, middle-ware like static, dev-dependency, node_modules
// package.json and package-lock.json