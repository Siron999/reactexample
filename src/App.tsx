
import { RouterProvider, createBrowserRouter } from "react-router-dom"; import React from "react";
import "./App.css";
import Home from "./pages/home";
import AddTodo from "./pages/addtodo";
import Navbar from "./components/navbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addtodo",
    element: <AddTodo />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
