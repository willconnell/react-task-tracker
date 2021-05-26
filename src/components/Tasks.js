import Task from './Task'

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => (
                <Task key={task.id} task={task}
                    onDelete={() => { props.onDelete(task.id) }}
                    onDoubleClick={props.onDoubleClick} />
            ))}
        </>
    )
}

export default Tasks
