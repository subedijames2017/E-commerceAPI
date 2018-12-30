const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const products = require('./routes/api/products');
const path = require('path')

//bodyParse middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//mongoose promice
mongoose.Promise=global.Promise;


//seting static folder
app.use(express.static(path.join(__dirname)))

//database connection
const db=require('./config/keys').mongoURI

mongoose
.connect(
    db,
    {useNewUrlParser:true}
)
.then(()=>console.log("connected to the database"))
.catch(err=>console.log(err));

//creating port for server
const port =process.env.PORT || 5000

//listning to the route
app.use("/api/dahboard/",products)

//listning to the port
app.listen(port,()=>console.log(`listning to the port ${port}`));
