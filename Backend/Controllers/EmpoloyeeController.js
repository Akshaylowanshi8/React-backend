const EmpModel =require("..//Models/employeeModel")

const EmployeeAdd=async(req,res)=>{
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
const GetEmpdata =async( req,res)=>{
    EmpModel.find().then((data) => {
        res.send(data);
    console.log(data)
        
    })
}

const GetUpdEmpata=async(req,res)=>{
    EmpModel.find().then((data) => {
        res.send(data);
    console.log(data)}
    
    )}

const EmpdataDel=async(req,res)=>{
let id =req.body.id;
console.log(id)
EmpModel.findByIdAndDelete(id).then((data)=>{
      res.json(data);

    })



}

module.exports={
    EmployeeAdd,
    GetEmpdata,
    GetUpdEmpata,
    EmpdataDel,

}