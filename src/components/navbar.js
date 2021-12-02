import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
const Navbar = () =>{
    return(
        <div class="navbar">
           
            <li>
                <Link to="/home">Home</Link>
            </li>
             <li>
                <Link to="/subscribeunsubscribe">Subscribe/Unsubscribe</Link>
            </li>
            <li>
                <Link to="/priceview">Price View</Link>
            </li>
             <li>
                <Link to="/matchview">Match View</Link>
            </li>
            <li>
                <Link to="/systemstatus">System Status</Link>
            </li>

        </div>
    )
}
export default Navbar;