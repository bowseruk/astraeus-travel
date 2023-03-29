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
          <li><Link to="/">Home</Link></li>
          <li><Link to={randomPage()}>Random</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
