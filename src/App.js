import "./App.css";
import Header1 from "./components/Header1";
import LoginForm from "./components/LoginForm";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Header1></Header1>
    <LoginForm></LoginForm></div>
  },
]);


function App() {
  return (
    <>
       <RouterProvider router={router} />



     
            
            
          
    </>
  );
}

export default App;
