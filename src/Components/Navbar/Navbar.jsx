import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="top">Metric UPX</h3>
      <nav ref={navRef}>
        <a href="#features" className="side_bar" onClick={closeNavbar}>
          Features
        </a>
        <a href="#pricing" className="side_bar" onClick={closeNavbar}>
          Pricing
        </a>
        <a href="#customers" className="side_bar" onClick={closeNavbar}>
          Customers
        </a>
        <a href="#foot" className="side_bar" onClick={closeNavbar}>
          Subscribe
        </a>
        <button id="nav-btn" className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars style={{ fill: "rgb(2, 32, 32)" }} />
      </button>
    </header>
  );
}

export default Navbar;
