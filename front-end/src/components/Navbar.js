import React from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

function Navbar() {
    const navRef = useRef();
    const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }
    return (
          <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
              <a href='/'>Home</a>
              
              <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes />
            </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
              <FaBars />
            </button>
            <input className='search' placeholder='search'></input>

        </header>
          
      );
    }
    

export default Navbar;