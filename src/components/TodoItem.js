import React, {useState} from 'react'

const TodoItem = ({removeTodo, handleToggle, todo, editTask }) => {
    const [isEditing, setEditing] = useState(false)
    const [newTask, setNewTask] = useState(todo.task)

    const handleEditSubmit = evt => {
        evt.preventDefault()

        editTask(todo.id, newTask)
        setNewTask("")
        setEditing(false)
    }

    const handleEdit = _ => {
        setEditing(!isEditing)
    }

    const handleChange = evt => {
        setNewTask(evt.target.value)
    }
      
    const editForm = (
        <form onSubmit={handleEditSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="editTodo" 
                    placeholder="Edit Todo" 
                    value={newTask}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
    
    return (
        <div className="d-flex justify-content-between shadow-sm p-2 mb-4 bg-white">
            <div className="d-flex">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input" 
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => handleToggle(todo.id)}
                    />
                </div>
                <div className={todo.isCompleted ? "text-decoration-line-through" : ""}>
                    { isEditing ? ( editForm ): todo.task  }
                </div>
            </div>
            <div className="d-flex">
                <button
                    type="button" 
                    className="btn btn-outline-dark btn-spacing"
                    onClick={() => handleEdit()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg>
                </button>
                <button type="button"
                    className="btn btn-outline-danger"
                    onClick={() => removeTodo(todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default TodoItem