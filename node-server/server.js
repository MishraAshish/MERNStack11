let express = require("express");
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 
let cors = require("cors");

let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRouter");
//mounting of express application
let adminApp = express(); //initialization of express admin application
let adminRouter = require("./routes/adminRouter");

let userApp = express();
let userRouter = require("./routes/userRouter");

//middle ware to allow cross origin access
app.use(cors())//to allow other domains like port:9092 access the api's in 9000 port

// serve static files like images css using static middleware
app.use("/static", express.static("public"))

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.use("/admin", adminApp);
adminApp.use("/", adminRouter)

app.use("/user", userApp); //signin api path => localhost:9000/user/api/signinup
userApp.use("/", userRouter);


app.use("/",defaultRouter);

app.listen(port, ()=> console.log(`server is listing as port ${port}`))