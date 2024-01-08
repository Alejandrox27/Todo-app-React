import { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const initialStateTodo = [
    {
    id: 1,
    title: "Todo 01",
    description: "description 01",
    state: true,
    priority: true
  },
  {
    id: 2,
    title: "Todo 02",
    description: "description 01",
    state: false,
    priority: true
  },
  {
    id: 3,
    title: "Todo 03",
    description: "description 01",
    state: true,
    priority: true
  },
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodo)

  const addTodo = todo => {
    console.log(todo);
    setTodos([...todos, todo])
  }

  return (
    <div className="container mb-2">
      <h1 className="ny-5">Forms</h1>
      <Form addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  )
};

export default App;