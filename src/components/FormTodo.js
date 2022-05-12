import React, { useState } from "react";

const FormTodo = ({ addTodo }) => {
    const [value, setValue] = useState('')
    const [buttonText, setButtonText] = useState({text: 'Add', color: 'dark'})

    const handleSubmit = (evt) => {
        evt.preventDefault();

        setButtonText({text: 'Added', color: 'success'})

        addTodo(value)
        setValue('')

        setTimeout(() => {
            setButtonText({text: 'Add', color: 'dark'})
        }, 500);
    }
    
    return (
        <section className="clearfix">
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-4 mb-2">
                    <label htmlFor="todo">Add Todo</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="todo" 
                        placeholder="Add Todo" 
                        value={value}
                        onChange={evt => setValue(evt.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className={`btn btn-${buttonText.color} float-end mb-5`} 
                    disabled={!value}
                    >
                    {buttonText.text}
                </button>
            </form>
        </section>  
    )
}

export default FormTodo