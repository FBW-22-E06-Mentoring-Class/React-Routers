
import React from 'react';
import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"
import ContactUs from "./components/ContactUs"
import {BrowserRouter, Routes , Route, NavLink} from "react-router-dom"
import PageNotFound from './components/PageNotFound';
import "./style.css"
import SingleUser from './components/SingleUser';
function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">Home </NavLink></li>
          <li><NavLink to="/about">About </NavLink> </li>
          <li><NavLink to="/users">Users </NavLink></li>
          <li><NavLink to="/contactus">Contact Us </NavLink></li>
        </ul>
      </header>
     {/*  // routes are just like switch in js
      // route is just like each case in switch */}
      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} /> 
      <Route  path="/users" element={ <Users/>} >
        <Route index element={<h1>click on any username to see profile</h1>}/>
          <Route path=":name" element={<SingleUser/>} />
      </Route>
      <Route  path="/contactus" element={  <ContactUs/>} />
      
      <Route path="*" element={<PageNotFound/>} /> {/* // default case */}
      </Routes>

      
     
    
    </div>
    </BrowserRouter>
  );
}

export default App;