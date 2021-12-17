import React from 'react'
import { FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // conditional determines the class of the div. In the index.css file the task reminder class has the green border by default
        <div className={`task ${task.reminder ? 'reminder' :''}`} 
            onDoubleClick={() => onToggle(task.id)}>

            <h3>{task.text} 
            <FaTimes style={
                {color: 'red',
                 cursor: 'pointer'}}
                 //calls onClick declared in App.js
                 onClick={() => onDelete(task.id)}/>
                 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
