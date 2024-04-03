const mongoose = require("mongoose");

const EmpSchema=new mongoose.Schema(

    {

        EmpName:String,
        EmpNo:Number,
        EmpSal:Number,
        EmpBran:String,
       
    }
);

module.exports=mongoose.model("EmployeeData",EmpSchema)