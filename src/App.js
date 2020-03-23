import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Pages from './components/Pages/Pages';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/dashboard/pages' component={Pages} />

    </div>
  );
}

export default App;
