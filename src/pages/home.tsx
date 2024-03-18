import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const nav = useNavigate();

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/message');
      setTodos(response.data)
      console.log('Data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  React.useEffect(() => {

    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-bold text-lg"> Todo App</h1>
      <button
        className="text-sm p-2 px-4 bg-slate-500 text-white rounded-lg my-4 hover:bg-slate-400 active:bg-slate-600"
        onClick={() => {
          nav("/addtodo");
        }}
      >
        Add new todo
      </button>

      <div className="mt-2">
        {todos.length === 0 ? (
          <h3 className="">No Todos</h3>
        ) : (
          <ol>
            {todos.map((todo, index) => (
              <div key={index}>
                <li >
                  <span className="ml-4 mr-2">{index + 1})</span>
                  <b>{todo.title}</b>
                </li>
                <p className="ml-9 mr-2">{todo.body}</p>
                <br></br>
              </div>
            ))}
          </ol>
        )}
      </div>
    </div >
  );
}
