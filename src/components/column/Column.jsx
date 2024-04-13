import "./column.css"
import Exercise from "../exercise/Exercise";

// Non draggable, for members
const Column = ({exercises}) => {
  return (
    <div className='column'>
        {exercises.map( (exercise) => 
            <Exercise exercise={exercise}/>
        )}
    </div>
  )
}

export default Column
