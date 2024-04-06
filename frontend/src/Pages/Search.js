import { useState } from "react";
import  axios  from 'axios';

const Search=()=>{
const [Enp ,setEnp]=useState("");
const [data,setdata]=useState([])
let ans;
let handsub=()=>{
let url="http://localhost:8000/Search";
axios.post(url,{eno:Enp}).then((res)=>{
setdata(res.data);
setEnp(" ")
})}

if(data.length>=1)
{
ans=data.map((e,i)=>{
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
}
else{

    ans="No data found !! "
}


return(<>

<div className="">

Search data by EmpNumber : <input name="EmpNo" type="text" value={Enp} onChange={(e)=>{setEnp(e.target.value)}} className="" />
<button className=""  onClick={handsub}>Search</button>
</div>


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


</>)
}
export default Search;