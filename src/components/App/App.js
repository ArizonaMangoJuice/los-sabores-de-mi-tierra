import React from 'react'
import './App.css'
import Landing from '../Landing/Landing'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import BlogPage from '../BlogPage/BlogPage'
import Login from '../Login/Login'
import Pages from '../Pages/Pages'
import Dashboard from '../Dashboard/Dashboard'
// will probably remove the switch doesnt seem like much help
function App() {
  return (
    <div className="App">
          <Route path='/' component={Header} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/pages' component={Pages}/>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Landing} />
          <Route path='/blogpost/:id' component={BlogPage} />
          
        </Switch>
    </div>
  )
}

export default App
