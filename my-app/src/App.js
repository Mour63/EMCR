import './App.css';
//import Signin from './Compenents/signin';
import React from 'react';
import Navbar from "./Compenents/navbar"
//import Dashboards from "./Compenents/Dashboards"
import Userform from "./Compenents/PremierModule/UserForm"
// import Addoffre from "./Compenents/operation/addoffre"
// import Dashboards from "./Compenents/Dashboards"
// import Dashboards from './Compenents/Dashboards';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Dashboards from './Compenents/Dashboards';
// import Prefernces from './Compenents/Prefernces';
function App() {
  
  return (
    <div className="App">
       {/* <Signin></Signin> */}
       <Navbar/>
       <Userform/>
       {/* <Dashboards/> */}
       {/* <Addoffre/> */}
    </div>
  );
}

export default App;
