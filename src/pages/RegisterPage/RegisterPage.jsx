import React from 'react'
import { Navbar } from '../../components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./registerpage.css"
function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password, firstName, lastName, phoneNumber, address })
      })

      if (!response.ok) {
        throw new Error(`Http error status: ${response.status}`)
      }

      // Parse response as json object
      const data = await response.json();
      console.log(data);

      localStorage.setItem("loggedIn", true)
      navigate("/")
    } catch (error) {
      console.error('There is a problem with the registration request:', error);
      alert("Registration failed.")
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className={'mainContainer'}>
        <div className={'titleContainer'}>

          <div className={'subheadingContainer'}>
            <div>Register Below...</div>
          </div>
          <div className={'inputContainer'}>
            <input
              value={email}
              placeholder="Enter Username here"
              onChange={(ev) => setEmail(ev.target.value)}
              className={'inputBox'}
            />
          </div>

          <div className={'inputContainer'}>
            <input
              value={password}
              placeholder="Enter Password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className={'inputBox'}
            />
          </div>

          <div className={'inputContainer'}>
            <input
              value={firstName}
              placeholder="Enter First Name here"
              onChange={(ev) => setFirstName(ev.target.value)}
              className={'inputBox'}
            />
          </div>

          <div className={'inputContainer'}>
            <input
              value={lastName}
              placeholder="Enter Last Name here"
              onChange={(ev) => setLastName(ev.target.value)}
              className={'inputBox'}
            />
          </div>

          <div className={'inputContainer'}>
            <input
              value={phoneNumber}
              placeholder="Enter Phone Number here"
              onChange={(ev) => setPhoneNumber(ev.target.value)}
              className={'inputBox'}
            />
          </div>

          <div className={'inputContainer'}>
            <input
              value={address}
              placeholder="Enter Address here"
              onChange={(ev) => setAddress(ev.target.value)}
              className={'inputBox'}
            />
          </div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" id="register_button" value={'Register'} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
