import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

import "./login.css"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({email, password})
      });

      if(!response.ok) {
        throw new Error(`Http error status: ${response.status}`);
      }

      // Parse response as text
      const token = await response.text();

      const decodedToken = jwtDecode(token);
      // For dev purposes
      console.log(decodedToken);
      // get roleId
      const roleId = decodedToken['roleId'];
      const userId = decodedToken['userId'];
      
      // store token
      localStorage.setItem("token", token);
      localStorage.setItem("roleId", roleId);
      localStorage.setItem("userId", userId);
      // front end login state
      localStorage.setItem("loggedIn", true);

      navigate("/")

    } catch (error) {
      console.error('There was a problem with the login request:', error);
      alert("Login Failed")
    }
  }

  const handleRegisterClick = () =>{ 
    let path = `../register`; 
    navigate(path);
  }

  return (
    <div className={'mainContainer'}>
    <div className={'titleContainer'}>
    </div>
    <div className={'subheadingContainer'}>
      <div>Login Below...</div>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        value={email}
        placeholder="Enter Username here"
        onChange={(ev) => setEmail(ev.target.value)}
        className={'inputBox'}
      />
      <br></br>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        value={password}
        placeholder="Enter password here"
        onChange={(ev) => setPassword(ev.target.value)}
        className={'inputBox'}
      />
      <br></br>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input className={'inputButton'} type="button" id="login_button" value={'Login'} onClick={handleSubmit}/>
      <input className={'inputButton'} type="button" id="register_button" value={'Register'} onClick={handleRegisterClick}/>
    </div>
  </div>
  )
}

export default Login
