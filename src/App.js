import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import FormTodo from './components/FormTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState(
    [
      {
        id:  Math.floor(Math.random() * 1000),
        task: 'Simba Coding Challenge',
        isCompleted: true
      }
    ]
  );

  const addTodo = task => {
    const newTodos  = [
      ...todos, { task, isCompleted: false, id: Math.floor(Math.random() * 1000) } 
    ]
    setTodos(newTodos)
  }

  const removeTodo = id => {
    const newTodos  = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  const handleToggle = id => {
    let mapped = todos.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    })
    setTodos(mapped);
  }

  const editTask = (id, newTask) => {
    const editedTask = todos.map(todo => {
      return todo.id === id ? { ...todo, task: newTask } : todo 
    })
    setTodos(editedTask);
  }
  
  return (
    <>
      <Header text="TODO LIST APP" />
      <section className='container'>
        <FormTodo  
          addTodo={addTodo}
        />
        <TodoList 
          todos={todos}
          removeTodo={removeTodo}
          handleToggle={handleToggle}
          editTask={editTask}
        />
      </section>
    </>
  );
}

export default App;
