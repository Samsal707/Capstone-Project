import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">LCG <span><FontAwesomeIcon icon={faCat} /></span> Booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

