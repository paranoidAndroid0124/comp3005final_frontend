import React from 'react'
import "./navbar.css"

const Navbar = () => {
    function Item({ name, path,loggedIn}) {
        if (loggedIn == "true") {
            return <li><a href={path}>{name}</a></li>;
        }
        return;
    }

    // Delete function and <li> below  because we dont use cookies, and is not really good practice 
    function LogOut({ name, path, loggedIn}) {
        if (loggedIn == "true") {
            return <li><a href={path} onClick={()=>localStorage.setItem("loggedIn", false)}>{name}</a></li>;
        }

        return;
    }

    const loggedIn = localStorage.getItem("loggedIn")
    const logInButton = "true" == loggedIn ? "false" : "true"

    return (
        <div className='navbar'>
            <div className='logo'>
                Pulse Performance
            </div>
            <ul className='navbar-menu'>
                <li><a href="/">Home</a></li>
                <Item
                    name = "Login"
                    path = "login"
                    loggedIn = {logInButton}
                />
                <Item
                    name = "Dashboard"
                    path = "dashboard"
                    loggedIn = {loggedIn}
                />
                <Item
                    name = "Profile"
                    path = "profile"
                    loggedIn = {loggedIn}
                />

                {/* Delete me */}
                <LogOut
                    name = "Logout"
                    path = "/"
                    loggedIn={loggedIn}
                />
            </ul>
        </div>
    )
}

export default Navbar