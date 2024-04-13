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
                <Exercise key={exercise.exercise_id} id={exercise.exercise_id} exercise={exercise}/>
            ))}
        </SortableContext>
    </div>
  )
}

export default TrainerColumn
