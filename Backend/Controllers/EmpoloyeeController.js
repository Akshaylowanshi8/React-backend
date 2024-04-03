const EmpModel =require("..//Models/employeeModel")

const EmployeeAdd=(req,res)=>{
    let EmpNames=req.body.EmpName;
    let EmpNos=req.body.EmpNo;
    let EmpSals=req.body.EmpSal;
    let EmpBrans=req.body.EmpBran;
    const EmployeeData =new EmpModel({
        EmpName:EmpNames,
        EmpNo:EmpNos,
        EmpSal:EmpSals,
        EmpBran:EmpBrans,
    })
    EmployeeData.save();
    res.send("save")
}
module.exports={
    EmployeeAdd,
}