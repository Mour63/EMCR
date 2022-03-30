import './App.css';
// import Signin from './Compenents/signin';
import React from 'react';
import Navbar from "./Compenents/navbar"
import Dashboards from './Compenents/Dashboards';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Dashboards from './Compenents/Dashboards';
// import Prefernces from './Compenents/Prefernces';
function App() {
  
  return (
    <div className="App">
       {/* <Signin></Signin> */}
       <Navbar/>
       <Dashboards/>
    </div>
  );
}

export default App;
