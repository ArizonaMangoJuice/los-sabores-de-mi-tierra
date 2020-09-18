import React from 'react'
import './App.css'
import Landing from '../Landing/Landing'
import {Route} from 'react-router-dom'
import Header from '../Header/Header'
import BlogPage from '../BlogPage/BlogPage'

function App() {
  return (
    <div className="App">
        <Route path='/' component={Header} />
        <Route exact path='/' component={Landing} />
        <Route path='/' component={BlogPage} />
    </div>
  )
}

export default App
