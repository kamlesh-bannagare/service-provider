import './AppBar.css';
import { Link } from "react-router-dom";

const AppBar=()=>{
    return (
        <div>
       
        <Link to="/">Home</Link> |{" "}
        <Link to="/aboutus">AboutUs</Link>  |{" "}
        <Link to="/contactus">ContactUs</Link> |{" "}
        <Link to="/addservice">AddService</Link>
        </div>
    )
}
export default AppBar