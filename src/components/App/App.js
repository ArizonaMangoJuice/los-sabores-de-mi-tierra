import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider';
import SideBanner from '../SideBanner';

function App() {
  return (
    <div className="App">
        
        <Header />
        {/* <ImageSlider /> */}
        <SideBanner />
    </div>
  );
}

export default App;
