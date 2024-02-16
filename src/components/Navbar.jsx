import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Navbar/_navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>

        <div className="logo"><img src={logo} alt="" /></div>
        <ul>
            <li><Link to='/here' relative='path'>click</Link></li>
        </ul>


        </nav>
     
    )
}

export default Navbar