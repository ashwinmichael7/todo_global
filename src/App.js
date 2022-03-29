import React from "react";
import Todo from "./todo";
import { useState, createContext } from "react";

export const TodoInput = createContext();

function App() {
  const [input, setInput] = useState([]);

  return (
    <div>
      <TodoInput.Provider value={{ input, setInput }}>
        <Todo />
      </TodoInput.Provider>
    </div>
  );
}

export default App;
