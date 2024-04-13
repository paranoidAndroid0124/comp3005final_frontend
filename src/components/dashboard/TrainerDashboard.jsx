import React from 'react'
import "./dashboard.css";
import Routines from '../routines/Routines';
import { Calendar } from '../../components';

function TrainerDashboard() {
  // calendar, set availability, customize and give certain users routines based off of available exercises
  return (
    <div>
      <h1>Trainer dashboard</h1>
      <Calendar></Calendar>
      <Routines></Routines>
    </div>
  )
}

export default TrainerDashboard
