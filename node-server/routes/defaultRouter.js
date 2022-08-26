// we can decouple and create routes without initializing app
let express = require("express");

let router = express.Router({})//case sensitive configurations

router.get("/hello",(req, res)=>{
    res.send("Hello from router");
})

router.get("/queryme",(req, res)=>{    //localhost:9000/queryme?name=somename&age=some age
    //console.log(req)
    let qs = req.query.name;
    let qs2 = req.query["trainee"];

    res.send(`<h1>${qs + qs2}</h1>`) //` - backtik or template literal
})

router.get("/querybyid/:id",(req, res)=>{    //localhost:9000/querybyid/25
    let id = req.params["id"];
    
    res.send(`Route param is ${id} can be used to pass data in url`)
})


module.exports = router;