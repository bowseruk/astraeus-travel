import './navigation.css';
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

const pages = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const randomPage = () => `/planet/${pages[Math.floor(Math.random() * pages.length)]}`

function Navigation() {
  
  return (
    <header className="header">
      <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
      <nav>
        <ul>
          <li className="navLink"><Link to="/"><i class="fa-solid fa-house"></i> <span>Home</span></Link></li>
          <li className="navLink"><Link to={randomPage()}><i class="fa-solid fa-shuffle"></i> <span>Random</span></Link></li>
          <li className="navLink"><Link to="/About"><i class="fa-solid fa-question"></i> <span>About</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
