import React from 'react'
import { Navbar } from '../../components'
import { useState } from 'react'
import "./registerpage.css"
function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${email},${password}`)
  }

  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div> Enter Email: </div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <div>Enter Password: </div>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <div>Enter First Name:</div>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
        <br></br>
        <div>Enter Last Name:</div>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
        <br></br>
        <div>Enter Phone Number:</div>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
        <br></br>
        <div>Enter Address:</div>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
        <br></br>

        <input type="submit"></input>
      </form>

    </div>
  )
}

export default RegisterPage
