import { Link, Outlet } from "react-router-dom";

const Layout=()=>{


    return(<>

<div className="">
<Link to="home">Home</Link>
<Link to="insert">insert</Link>
<Link to="home">Home</Link>
</div>



<Outlet/>


<h1 className="">

    this  is footer</h1>

    </>)
}

export default Layout;