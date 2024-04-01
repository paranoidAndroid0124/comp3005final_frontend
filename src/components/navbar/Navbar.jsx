import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                Gym Name
            </div>
            <ul className='navbar-menu'>
                <li><a href="/">Home</a></li>
                <li><a href="location">Location</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="dashboard">Dashboard</a></li>
                <li><a href="profile">Profile</a></li>
            </ul>
        </div>
    )
}

export default Navbar