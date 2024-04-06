const express = require("express");
const app=express();
const EmpCont = require("./Controllers/EmpoloyeeController");

const mongoose = require("mongoose");

// cross origin resource searing by use becouse we are use react frontend   =>it is called middil wear 
const cors = require('cors');
app.use(cors());

//  -> its a middil wear 
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


//mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/Reactdb")
.then(console.log(" datbase connected "));

app.post("/insert",EmpCont.EmployeeAdd);
app.get("/display",EmpCont.GetEmpdata )
app.get("/Update", EmpCont.GetUpdEmpata );
app.post("/DelEmpdata",EmpCont.EmpdataDel);
app.post("/DelEmpdata",EmpCont.EmpdataDel);
app.post("/getdata",EmpCont.EmpGetdata);
app.post("/editsave",EmpCont.EditEmpdataupdate);
app.post("/Search",EmpCont.SearchEmpdata);

const port = process.env.PORT || 8000;

app.listen(port, () =>{ 
    console.log((`Example app listening on port ${port}!`))
  })
