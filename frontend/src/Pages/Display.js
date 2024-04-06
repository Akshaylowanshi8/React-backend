import { useEffect, useState } from "react";
import axios from "axios";

const Display =()=>{

    const [Empdata ,SetEmpdata]=useState([])

    const Dataload=()=>{
   axios.get("http://localhost:8000/display").then((res) => {
   SetEmpdata(res.data)
//    console.log(res.data)
})}

 useEffect(()=>{
       Dataload();
 },[])

 let ans = Empdata.map((e,i)=>{
 return(<>
<tr>
<td>{i+1}</td>
<td>{e.EmpName}</td>
<td>{e.EmpNo}</td>
<td>{e.EmpSal}</td>
<td>{e.EmpBran}</td>
</tr>
</>)
 })

return(
    <>
    
<h1 className="">display our data</h1>
<table className="tbl" align="center" width="800" bgcolor="green" border="2px" cellPadding={6}>
<tr>
<th>S.No</th>
<th>Employee Name</th>
<th>Employee Number</th>
<th>Employee salary </th>
<th>Employee Branch</th>
</tr>

{ans}
</table>
    </>
)

}

export default Display;
