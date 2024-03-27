import React from 'react'
import { useNavigate } from 'react-router-dom';
import './registerbutton.css'

function Register() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `../register`; 
    navigate(path);
  }

  return (
    <div>
      <input type="button" value="Register Now" onClick={routeChange}></input>
    </div>
  )
}

export default Register
