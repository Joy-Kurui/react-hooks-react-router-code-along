import React from "react";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import Home from "../Home";
import { Route, Routes } from "react-router-dom";

function App (){
    return(
        <div>
        <NavBar />  
        <Routes>
        <Route 
        exact path="/" 
        element={<Home />}>  
        </Route>
        <Route 
        path="/about" 
        element={<About />}>  
        </Route>
        <Route 
        path="/login" 
        element={<Login />}>  
        </Route>
        </Routes>
        </div>
        
    )
   
}
export default App