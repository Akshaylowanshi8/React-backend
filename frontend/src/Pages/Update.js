import { useEffect, useState } from "react";
import  axios  from 'axios';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Update=()=>{
const [data ,setdata]=useState([]);

const LoadData=()=>{

    axios.get("http://localhost:8000/update")
      .then(res => setdata(res.data))
      .catch(err => console.error(err));
    
}



useEffect(()=>{
LoadData();
},[]);
// delete data 
const DelEmpdata=(id)=>{
let url="http://localhost:8000/DelEmpdata"
axios.post(url,{id:id}).then((res)=>{
    LoadData();
})}
const myNav=useNavigate()


const EditEmpdata=(id)=>{
    myNav("/Editdata/"+id)
    

}



let ans =data.map((e,i)=>{
    return(<>
   <tr>
   <td>{i+1}</td>
   <td>{e.EmpName}</td>
   <td>{e.EmpNo}</td>
   <td>{e.EmpSal}</td>
   <td>{e.EmpBran}</td>
   <td><MdDeleteForever  onClick={()=>{DelEmpdata(e._id)}} /></td>
   <td><FaRegEdit onClick={()=>{EditEmpdata(e._id)}}    /></td>
     </tr>
   </>)
    })

return(<>

<table>
<tr className="tbl">
<th>S.No</th>
<th>Employee Name</th>
<th>Employee Number</th>
<th>Employee salary </th>
<th>Employee Branch</th>
<th >   Delete</th>

</tr>

{ans}
</table>

    
</>)
}

export default Update;