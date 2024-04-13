import React, { useState } from 'react'

import "./exercise.css"

const Exercise = ({ roleId, exercise, selected }) => {
  const [checked, setChecked] = useState(selected)

  function handleCheckBox () {
    
    console.log("Checkboxed!")
  }

  function handleTrainerInput () {
    if (roleId == 2) {
      return;
    } else {
      return <input type="checkbox" className='checkbox' onClick={handleCheckBox()}></input>;
    }
  }

  return (
    <div className="row">
      <h3>{exercise.exercise_name}</h3>
      Reps: {exercise.reps}
      <br></br>
      Suggested Duration: {exercise.duration}
      <br></br>
      <div className='trainer-input'>
        {handleTrainerInput()}
      </div>
    </div>
  )
}

export default Exercise
