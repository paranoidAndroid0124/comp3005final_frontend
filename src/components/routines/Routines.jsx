import React, { useEffect, useState } from 'react'

import "./routines.css"
import { Column, TrainerColumn } from '..'

function Routines() {
    const [exercises, setExercises] = useState([]);
    // Fetch time slots
    const fetchTimeSlots = async () => {
        try {
            const response = await fetch('http://localhost:3001/exercises', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Http error status: ${response.status}`);
            }

            const data = await response.json();
            const exercisesData = data.map(exercise => ({
                exercise_id: exercise.exercise_id,
                exercise_name: exercise.exercise_name,
                reps: exercise.reps,
                duration: exercise.duration
            }));

            console.log("exercisesData: ", exercisesData)

            setExercises(exercisesData);
        } catch (err) {
            console.log('There was an error while fetching exercise data');
        }
    }

    useEffect(() => {
        fetchTimeSlots();
    }, []);

    return (
        <div className='routineBody'>
            <Column exercises={exercises} />
        </div>
    )
}

export default Routines
