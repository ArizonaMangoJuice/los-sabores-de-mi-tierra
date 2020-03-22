import React from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import {Route} from 'react-router-dom';
import Landing from './component/Landing/Landing';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route exact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
