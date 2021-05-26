import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctor's Appointment",
            day: "Friday at 3 pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at School",
            day: "Tuesday at 12 pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Food Shopping",
            day: "Sunday at 4 pm",
            reminder: true,
        },
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // toggle task reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) => task.id === id
                ? { ...task, reminder: !task.reminder }
                : task)
        )
    }

    // Adding a task
    const onAdd = (task) => {
        console.log(task)

        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }

        setTasks([newTask, ...tasks])
    }

    return (
        <div className="container">
            <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
            { showAddTask ? <AddTask onAdd={onAdd} />
                : ''}

            {tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder} />
                : 'No Tasks to Show'}
        </div>
    );
}

export default App;
