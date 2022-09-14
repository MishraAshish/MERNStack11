let express = require("express");
let port = process.env.PORT || 9000;//use port 9000 unless there exists a preconfigured port 


let app = express();//instantiating express application 
let defaultRouter = require("./routes/defaultRouter");
//mounting of express application
let adminApp = express(); //initialization of express admin application
let adminRouter = require("./routes/adminRouter");

let userApp = express();
let userRouter = require("./routes/userRouter");

// serve static files like images css using static middleware
app.use("/static", express.static("public"))

app.use("/admin", adminApp);
adminApp.use("/", adminRouter)

app.use("/user", userApp); //signin api path => localhost:9000/user/api/signinup
userApp.use("/", userRouter);


app.use("/",defaultRouter);

app.listen(port, ()=> console.log(`server is listing as port ${port}`))