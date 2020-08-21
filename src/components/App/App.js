import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider';
import SideBanner from '../SideBanner';
import Articles from '../Articles';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
        <SideBanner />
        <Header />
        <ImageSlider />
        <Articles />    
        <Footer />    
    </div>
  );
}

export default App;
