import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar/acc_avatar.jpg'
function Navbar() {

    const [nav, setNav] = useState(false)
    const openNav = () => {
        setNav(!nav);
        console.log(nav)
    };






    return (
        <div className="container">

        
        <div className="navigation">

            <header>
                <div className='left'>
                    <button onClick={openNav}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="logo">
                        <img src={logo} alt="mege News" />
                    </div>
                    <nav className='navigation'>
                        <ul>
                            <li> <Link to={"/contact-us"}>Contact Us</Link>  </li>
                            <li> <Link to={"/contact-us"}>Contact Us</Link>  </li>
                            <li> <Link to={"/contact-us"}>Contact Us</Link>  </li>
                        </ul>
                    </nav>

                </div>
                <div className="right">
                    <div className="input">
                        <input type="text" className='desktop_input' placeholder='Search Anything....' />
                    </div>
                    <div className="account">
                        <div>
                            <img className='avatar' src={avatar} alt="" />
                            <span>Thanos </span>
                        </div>

                        <button className='bookmark'>
                            <i className="fa-regular fa-bookmark"></i>
                        </button>
                    </div>
                </div>
                <div className="tab_input">
                    <input type="text" placeholder='Search Anything....' />
                </div>
            </header>



            <div className={`mobile__nav ${nav ? "open-nav" : ""}`}>
                <div className="mobile__menu-header">
                  
        
                        <img className='header-logo' src={logo} alt="mege News" />
                
                    <button className='btn' onClick={openNav}>
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>

                <ul className='links'>

                    <li> <Link to={"/"}>Contact Us</Link>  </li>
                    <li> <Link to={"/contact-us"}>Contact Us</Link>  </li>
                    <li> <Link to={"/contact-us"}>Contact Us</Link>  </li>
                </ul>
            </div>



        </div>

        </div>

    )
}

export default Navbar