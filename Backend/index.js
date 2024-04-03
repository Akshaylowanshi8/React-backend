const express = require("express");
const app=express();
const EmpCont =require("./Controllers/EmpoloyeeController")

const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const cors = require('cors');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


//mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/Reactdb")
.then(console.log(" datbase connected "));

app.post("/insert",EmpCont.EmployeeAdd);

const port = process.env.PORT || 8000;

app.listen(port, () =>{ 
    console.log((`Example app listening on port ${port}!`))
  })
