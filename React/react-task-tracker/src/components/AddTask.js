import { useState } from 'react'
import React from 'react'

const AddTask = ({ onAdd, setShowAddTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        //prevents page from reloading after clicking submit
        e.preventDefault()
        
        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        //reset form
        setText('')
        setDay('')
        setReminder(false)
        setShowAddTask(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Task' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'  
                    checked={reminder}
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'  />

        </form>
    )
}

export default AddTask

