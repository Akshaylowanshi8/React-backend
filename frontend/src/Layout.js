import { Link, Outlet } from "react-router-dom";


const Layout=()=>{


    return(<>

<div className="header">
<Link to="home">Home</Link>
<Link to="insert">Insert</Link>
<Link to="display">Display</Link>
<Link to="update">Update</Link>
<Link to="Search">Search</Link>


</div>



<Outlet/>


<h1 className="">

    this  is footer</h1>

    </>)
}

export default Layout;