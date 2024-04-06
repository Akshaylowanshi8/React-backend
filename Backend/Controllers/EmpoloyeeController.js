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
    // console.log(data)
        
    })
}

const GetUpdEmpata=async(req,res)=>{
    EmpModel.find().then((data) => {
        res.send(data);
    // console.log(data)
}
    
    )}

const EmpdataDel=async(req,res)=>{
let id =req.body.id;
EmpModel.findByIdAndDelete(id).then((data)=>{
      res.json(data);

    })

}

const EmpGetdata=(req,res)=>{
  let id =req.body.id;
EmpModel.findById(id).then((data) => {
    res.json(data);
})
}


const EditEmpdataupdate=(req,res)=>{
let myid =req.body._id;
let EmpNames=req.body.EmpName;
let EmpNos=req.body.EmpNo;
let EmpSals=req.body.EmpSal;
let EmpBrans=req.body.EmpBran;
EmpModel.findByIdAndUpdate(myid,{ 
    EmpName:EmpNames,
    EmpNo:EmpNos,
    EmpSal:EmpSals,
    EmpBran:EmpBrans,
})
.then((data)=>{

    res.send("save")

})
}
const SearchEmpdata= async(req,res)=>{
let eno=req.body.eno;
EmpModel.find({ EmpNo:eno})
.then((data)=>{

    res.send(data)
})
}

module.exports={
    EmployeeAdd,
    GetEmpdata,
    GetUpdEmpata,
    EmpdataDel,
    EmpGetdata,
    EditEmpdataupdate,
    SearchEmpdata,

}