import React, { Component  , useState }  from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, todoStatus, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>{todoStatus(index)}</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value) return;
    addTodo(value) 
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
 ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const todoStatus = index => {
    return todos[index].isCompleted? 'Undo': 'Completed';
  }
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            todoStatus={todoStatus}
            removeTodo={removeTodo}
          />
        ))}
      <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );

  // we'll render our todos here ...
  // return <div></div>
}


export default App;
