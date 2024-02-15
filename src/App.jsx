import React, { useState } from "react";
import Todo from "./components/Todo";
import { useEffect } from "react";
import { updateTodo, addTodo, getAllTodo,deleteTodo } from "./utils/Handle";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [todoId, setTodoId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
 
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };
  useEffect(() => {
    getAllTodo(setTodo);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1>Enter Your Daily Todo-Items</h1>
        <div className="top">
          <input
            type="text"
            placeholder="add todos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}{" "}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteMode={()=>deleteTodo(item._id,setTodo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
