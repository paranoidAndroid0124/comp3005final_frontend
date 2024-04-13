import React from 'react'
import "./column.css"

import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Exercise from '../exercise/Exercise';

const TrainerColumn = ({exercises, selectedMemberId}) => {
  return (
    <div className='column'>
        Trainer COlumn
        {console.log("Exercises: ", exercises)}
        <SortableContext items={exercises} strategy={verticalListSortingStrategy}>
            {exercises.map((exercise) => (
                <div key={exercise.exercise_id}>
                    <Exercise id={exercise.exercise_id} exercise={exercise}/>
                </div>
                
            ))}
        </SortableContext>
    </div>
  )
}

export default TrainerColumn
