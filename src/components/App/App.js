import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider';
import SideBanner from '../SideBanner';
import Articles from '../Articles';

function App() {
  return (
    <div className="App">
        <SideBanner />
        <Header />
        <ImageSlider />
        <Articles />        
    </div>
  );
}

export default App;
