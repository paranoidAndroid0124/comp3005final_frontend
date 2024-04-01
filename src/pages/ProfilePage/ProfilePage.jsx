import React from 'react'
import { Navbar } from '../../components'
import { useState, useEffect } from 'react'

function ProfilePage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // ---------------- WE WILL CHANGE HEALTH METRICS LATER ----------------
  const [healthMetrics, setHealthMetrics] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");
  
  useEffect(() => {
    async function handleLoad() {
        try {
            const response = await fetch(`http://localhost:3001/member/3`)
            
            if (!response.ok) {
                throw new Error(`Http error status: ${response.status}`)
            }
    
            const member = await response.json();
            setEmail(member.email);
            document.getElementById("email").innerHTML = email;
          } catch (error) {
            console.error('There is a problem with fetching user data:', error);
            // TODO: handle error (err msg to user)
          }
      }

      handleLoad();
  }, []);


  return (
    <div>
      <Navbar></Navbar>
        <form>
            <div>
                Email: {email}
            </div>
            <span id="email"></span>
            <input
                value={email} 
                id="email"
            />
                
        </form>
      profile
    </div>
  )
}

export default ProfilePage
