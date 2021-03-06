import React from 'react'
import './App.css'
import Landing from '../Landing/Landing'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import BlogPage from '../BlogPage/BlogPage'
import Login from '../Login/Login'
import Pages from '../Pages/Pages'
import Dashboard from '../Dashboard/Dashboard'
import EditBlogs from '../EditBlogs/EditBlogs'
import Footer from '../Footer'
// will probably remove the switch doesnt seem like much help
function App() {
  return (
    <div className="App">
          <Route path='/' component={Header} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/pages' component={Pages}/>
          <Route exact path='/dashboard/editblogs' component={EditBlogs} />
          <Route path='/dashboard' component={Footer} />
          <Route path='/blogpost/:title' component={BlogPage} />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Landing} />
        </Switch>
    </div>
  )
}

export default App
