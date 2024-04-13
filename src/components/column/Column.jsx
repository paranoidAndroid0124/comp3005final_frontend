import "./column.css"
import Exercise from "../exercise/Exercise";

const Column = ({exercises}) => {
  const roleId = localStorage.getItem("roleId")

  return (
    <div className='column'>
        {exercises.map( (exercise) => 
            <Exercise exercise={exercise} roleId={roleId} selected/>
        )}
    </div>
  )
}

export default Column