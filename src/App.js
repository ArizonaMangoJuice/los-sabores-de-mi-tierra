import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Pages from './components/Pages/Pages';
import Login from './components/Login/Login';
import { storage } from 'firebase';
import BlogPage from './components/BlogPage/BlogPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/dashboard/pages' component={Pages} />
      <Route path='/login' component={Login}/>
      <Route path='/blogPages/:title' children={<BlogPage/>}/>
      <Footer />
    </div>
  );
}

export default App;
