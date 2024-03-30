import React from 'react'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const token = await  response.text();
      // For dev purposes
      console.log(token);
      // store token
      localStorage.setItem("token", token);

    } catch (error) {
      console.error('There was a problem with the login request:', error);
      // TODO: handle error (err msg to user)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email: </div>
        <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />

        <div>Password: </div>
        <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <button type={"submit"}>Login</button>
      </form>


    </div>
  )
}

export default Login
