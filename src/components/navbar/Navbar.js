import "./navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
          <span className="logo">LCG <span><FontAwesomeIcon icon={faCat} /></span> Booking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to='/register'><button className="navButton">Register</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  )
}

