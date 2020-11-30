import React from "react";
// import logo from './logo.svg';
// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer"



import {Switch ,Redirect, Route} from "react-router-dom";

const App = () => {
  return (  
    <>
    <Navbar/>
      <Switch>      
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to = "/" />
        
      </Switch>
      <Footer />
    </>
  );
};

export default App;
