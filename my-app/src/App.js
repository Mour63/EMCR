import './App.css';
import Signin from './Compenents/signin';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboards from './Compenents/Dashboards';
import Prefernces from './Compenents/Prefernces';
function App() {
  
  return (
    <div className="App">
       <Signin></Signin>
    </div>
  );
}

export default App;
