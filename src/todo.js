import "./App.css";
import React, { useState, useContext } from "react";
import { TodoInput } from "./App";

function Todo() {
  let date = new Date();

  let day = date.getDay();
  let weekDay = new Array(7);
  weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [todo, setTodo] = useState("");
  const { input, setInput } = useContext(TodoInput);
  const addTodo = () => {
    setInput([...input, {
      id: date.toLocaleString(),
      todo: todo
    }]);

    setTodo("");
  };
  const remove = (obj) => {
   

    const newTodo = input.filter((e) => e.id !== obj.id);
    setInput(newTodo);
    
  };

  return (
    <div className="App">
      <div className="container">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {weekDay[day]} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="🖊️ Add item..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {todo && (
            <i className="fa fa-plus" aria-hidden="true" onClick={addTodo}></i>
          )}
        </div>

        {input &&
          input.map((a) => {
            return (
              <div className="inputtwo" key={a.id}>
                <input type="text" id="secondinput" value={a.todo} disabled />
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => remove(a)}
                />
              </div>
            );
          })}
        <div className="removebtn">
          <button className="remove" onClick={() => setInput([])}>
            Remove all
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
