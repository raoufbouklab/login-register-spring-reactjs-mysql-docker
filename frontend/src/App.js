import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";

function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Navigation/>
              <Title/>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/users" element={<Users />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<Register />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
