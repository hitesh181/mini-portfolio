import React from "react"
import {NavLink} from "react-router-dom"


export default function Navbar(){
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

      return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
        aria-expanded={!isNavCollapsed}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <ul className="navbar-nav ">
            <li className="nav-item active">
              <NavLink to="/"><a className="nav-link" href="#">Home</a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/about"><a className="nav-link" href="#">About</a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/contact"><a className="nav-link" href="#">Contact</a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/signup"><a className="nav-link" href="#">Signup</a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/signin"><a className="nav-link" href="#">Signin</a></NavLink>
            </li>
          </ul>
        </div>
      </div>
      </nav>



)
}