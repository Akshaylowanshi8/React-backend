import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Editdata=()=>{

 const {id}=useParams();

// const [mydata ,setmydata]=useState({}) 
 const [ input ,setinput]=useState({});
  const Loaddata=()=>{
let url ="http://localhost:8000/getdata"
axios.post(url,{id:id}).then((res)=>{
setinput(res.data)
})
} 
useEffect(() => {
    
Loaddata();
}, []);

let myNav=useNavigate();

const handleinput=(e)=>{
            let names=e.target.name;
            let val=e.target.value;
            setinput(values=>({...values, [names]:val}));
        }
        const onsubmit =()=>{
        let api="http://localhost:8000/editsave"
        axios.post(api,input).then((res)=>{
        alert("save data")
        })
        setinput({
            EmpName:"",
            EmpNo:"",
            EmpBran:"",
            EmpSal:""
        })  
    myNav("/display")

      }
return(
    <>
<div className="formdiv">
 <h2 className="">Add Employee  Record </h2>
    <label> Employee Name  : <input className="" name="EmpName" value={input.EmpName} onChange={handleinput} /></label>
    <label> Employee No  :   <input className="" name="EmpNo" value={input.EmpNo} onChange={handleinput} /></label>
    <label> Employee Selary :<input className="" name="EmpSal" value={input.EmpSal} onChange={handleinput} /></label>
    <label> Employee Branch <input className="" name="EmpBran" value={input.EmpBran} onChange={handleinput} /></label>
    <button id="btn" onClick={onsubmit}><span>submit data</span> </button>

</div>
</>
)


}
export default Editdata;

