import { useState } from "react";
import axios from "axios";

const Insert=()=>{
const [ input ,setinput]=useState({});
const handleinput=(e)=>{
            let names=e.target.name;
            let val=e.target.value;
            setinput(values=>({...values, [names]:val}));
        }
      const onsubmit=()=>{
    let Eno=input.EmpNo;
    let Enm=input.EmpName;
    let ESal=input.EmpSal;
    let Ebr=input.EmpBran;
 
        if(Enm==="")
        {
       alert("fill Employee Enformation")
       document.getElementById("nm").focus();

       return false;
       }
    
        

        let api="http://localhost:8000/insert"
        axios.post(api,input).then((res)=>{
    
        alert("save data")

    })
        setinput({
            EmpName:"",
            EmpNo:"",
            EmpBran:"",
            EmpSal:""
        })
 }

 
return(
    <>
<div className="formdiv">
 <h2 className="">Add Employee  Record </h2>
    <label> Employee Name   :<input id="nm"  name="EmpName" value={input.EmpName} required="true" onChange={handleinput} /></label>
    <label> Employee No     :<input  name="EmpNo"   value={input.EmpNo}   onChange={handleinput} /></label>
    <label> Employee Selary :<input  name="EmpSal"  value={input.EmpSal}  onChange={handleinput} /></label>
    <label> Employee Branch :<input  name="EmpBran" value={input.EmpBran} onChange={handleinput} /></label>
    <button id="btn" onClick={onsubmit}><span>submit data</span> </button>

</div>
</>
)



}
export default Insert;