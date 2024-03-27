import React from 'react'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <div>Email: </div>
        <input type="text" value={email}></input>

        <div>Password: </div>
        <input type="text" value={password}></input>
      </form>

      
    </div>
  )
}

export default Login
