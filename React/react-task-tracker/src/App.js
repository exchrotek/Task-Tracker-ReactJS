import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

//This is right below index.js
function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's",
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: "Dentist's",
        day: 'Dec 12th at 10:00 am',
        reminder: true,
    }
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask= { id, ...task }

  //add another task to the tasks state
  //note this has to be done in App.js because the states are stored here
  setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id) => {
  console.log('delete',id)
  //changing the original state of tasks const to filter out any tasks the user deleted (clicked X)
  setTasks((tasks).filter((task) => task.id !== id))
};

const toggleReminder = (id) => {
  //...task means passing  all values of task
  setTasks((tasks).map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  console.log(id)
}


  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}  />
      {/* Only show the add task form if add button is clicked */}
      {showAddTask && <AddTask onAdd={ addTask } setShowAddTask={ setShowAddTask } />}

      {
        //If there exists 1 or more task or no tasks on page
        (tasks.length > 0) ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Tasks To Show'
        // <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      }
    </div>
  );
}

export default App;
