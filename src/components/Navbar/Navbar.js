import React, {useState} from 'react';
import "./Navbar.css";
import {Outlet, Link} from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('nav_menu');
    const [toggleIcon, setToggleIcon] = useState('nav_toggle');

     const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu')

        toggleIcon === 'nav_toggle' ? setToggleIcon('nav_toggle toggle') : setToggleIcon('nav_toggle')
     };

     
    return(
      <>
        <nav className='nav'>
            <h1 className='title'>SHOPY ALL</h1>
          <ul className={active}>
            <li onClick={navToggle} className='nav_item'><Link to='/' 
            >HOME</Link></li>
            <li onClick={navToggle} className='nav_item'><Link to='about' 
            >ABOUT</Link></li>
            <li onClick={navToggle} className='nav_item'><Link to='shop' 
            >SHOP</Link></li>
            <li onClick={navToggle} className='nav_item'><Link to='contact'
            >CONTACT</Link></li>
          </ul>
          <div onClick={navToggle} className={toggleIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </nav>
        <Outlet />
        </>
    )
    
}

export default Navbar