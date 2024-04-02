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
  const [healthMetric, setHealthMetric] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [fitnessAchievements, setFitnessAchievements] = useState("");
  
  useEffect(() => {
    async function handleLoad() {
        try {
            const response = await fetch(`http://localhost:3001/member/3`)
            
            if (!response.ok) {
                throw new Error(`Http error status: ${response.status}`)
            }
    
            const member = await response.json();
            setFitnessGoals(member.fitnessGoals)
            setHealthMetric(member.healthMetric)
            setFitnessAchievements(member.fitnessAchievements)
          } catch (error) {
            console.error('There is a problem with fetching user data:', error);
            // TODO: handle error (err msg to user)
          }
      }

      handleLoad();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log("healthMetrics: ", healthMetric)
        console.log("fitnessAchievements: ", fitnessAchievements)
        console.log("fitnessGoals: ", fitnessGoals)
      const response = await fetch('http://localhost:3001/member/3/update', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({healthMetric, fitnessGoals, fitnessAchievements})
      })

      if(!response.ok) {
        throw new Error(`Http error status: ${response.status}`)
      }

      // Parse response as json object
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There is a problem with the registration request:', error);
      // TODO: handle error (err msg to user)
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1>Profile: </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Fitness Goals:</h2>
            </div>
            <input
                type="text" value={fitnessGoals} onChange={(e) => setFitnessGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <div>
                <h2>Fitness Achievements:</h2>
            </div>
            <input
                type="text" value={fitnessAchievements} onChange={(e) => setFitnessAchievements(e.target.value)}
            />
            <br></br>
            <br></br>
            <div>
                <h2>Health Metric:</h2>
            </div>
            <input
                value={healthMetric} onChange={(e) => setHealthMetric(e.target.value)} type="text" 
            />
            <br></br>
            <br></br>
            <input type="submit"></input>
            
        </form>
    </div>
  )
}

export default ProfilePage
