import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const nav = useNavigate();

  const addTodo = async (e) => {
    e.preventDefault();
    let data = {
      username: title,
      password: body
    }
    try {
      const response = await axios.post('http://localhost:8000/api/login', data, {
        withCredentials: true
      });
      console.log('Data submitted:', response.data);
      // nav("/")
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="p-4">
      <button
        className="text-sm p-2 px-4 bg-slate-500 text-white rounded-lg my-4 hover:bg-slate-400 active:bg-slate-600"
        onClick={() => {
          nav("/");
        }}
      >
        Go back
      </button>
      <form onSubmit={addTodo}>
        <p>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name="title"
            className="border border-gray-400"
            placeholder="Enter Title"
          />
        </p>
        <br></br>
        <p>
          <input
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            name="body"
            className="border border-gray-400"
            placeholder="Enter Content"
          />
        </p>
        <br></br>
        <p>
          <input
            type="text"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
            name="detail"
            className="border border-gray-400"
            placeholder="Enter Details"
          />
        </p>
        <br></br>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
