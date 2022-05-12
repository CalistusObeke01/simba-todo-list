import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({todos, removeTodo, handleToggle, editTask}) => {
    return <div>
        {
            todos.map(todo => (
                <TodoItem 
                    removeTodo={removeTodo}
                    handleToggle={handleToggle}
                    editTask={editTask}
                    todo={todo}
                    key={todo.id}
                />
            ))
        }
    </div>
}

export default TodoList