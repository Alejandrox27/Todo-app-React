import { useState } from "react";

const Form = () => {

    const [todo, setTodo] = useState({
        title: "Todo 01",
        description: "description 01",
        state: "To do",
        priority: true
    })


    const {title, description, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(title, description, state, priority);
    };

    const handleChange = e => {
        const {name, type, checked, value} = e.target
        console.log(e.target)

        setTodo({
            ...todo, 
            [name]: type === "checkbox" ? checked : value
        })
    
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Insert To Do" 
            className="form-control mb-2"
            name="title"
            value={title}
            onChange={handleChange} //copia de todo y cambiar title
            />
            <textarea 
            className="form-control mb-2" 
            placeholder="Insert a description"
            name="description"
            value={description}
            onChange={handleChange}
            ></textarea>
            <div className="form-check mb-2">
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheck"
                checked={priority}
                onChange={handleChange} />
                <label htmlFor="inputCheck">Give Priority</label>
            </div>
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="Todo">To do</option>
                <option value="completed">Completed</option>
            </select>
            <button type="submit" className="btn btn-primary">Process</button>
        </form>
        </>
    );
    }

    export default Form;