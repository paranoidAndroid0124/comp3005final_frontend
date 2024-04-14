import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import "./dashboard.css";
import Routines from '../routines/Routines';
import { Calendar } from '../../components';

function TrainerDashboard() {
  const [member, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState();
  // set availability, customize and give certain users routines based off of available exercises

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleMemberChange = async (selectOptions) => {
    setSelectedMember(selectOptions);
  }

  const fetchMembers = async () => {
    try {
      // get jwt token from localStorage
      const token = localStorage.getItem("token");

      const response = await fetch('http://localhost:3001/member', {
        method: 'GET',
        headers: {
          'Authorization': token,
          'content-type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Http error status: ' + response.status);
      }

      const data = await response.json();
      const memberOptions = data.map(member => ({
        value: member.user_id,
        label: `${member.first_name} ${member.last_name}`,
      }));
      setMembers(memberOptions);
    } catch (error) {
      console.log('There was an error while fetching members');
    }
  }

  return (
    <div>
      <h1>Trainer dashboard</h1>
      <Calendar></Calendar>
      <h1>Update routine for a member: </h1>
      <Select
        value={selectedMember}
        onChange={handleMemberChange}
        options={member}
        className='dropdown'
      />

      <Routines></Routines>
    </div>
  )
}

export default TrainerDashboard
