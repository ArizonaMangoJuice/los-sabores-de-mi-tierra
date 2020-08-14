import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Pages from './components/Pages/Pages';
import Login from './components/Login/Login';
import BlogPage from './components/BlogPage/BlogPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ImageSlider from './components/ImageSlider/ImageSlider';
import SideBanner from './components/SideBanner';

function App() {
  return (
    <>
      <SideBanner />
      <Header />
      <ImageSlider />
    </>
  );
}

export default App;
