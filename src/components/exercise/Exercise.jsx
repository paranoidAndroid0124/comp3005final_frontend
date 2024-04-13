import React from 'react'

import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

import "./exercise.css"

const Exercise = ({id, exercise}) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: id});

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="row">
      <h3>{exercise.exercise_name}</h3>
      Reps: {exercise.reps}
      <br></br>
      Suggested Duration: {exercise.duration}
    </div>

    // below is code for members, in case above breaks it
    // <div className="row">
    // <div key={exercise.exercise_id}>
    //     <h3>{exercise.exercise_name}</h3>
    //     Reps: {exercise.reps}
    //     <br></br>
    //     Suggested Duration: {exercise.duration}
    //     </div>
    // </div>
  )
}

export default Exercise
