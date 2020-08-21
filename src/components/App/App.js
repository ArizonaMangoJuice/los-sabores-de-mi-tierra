import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider';
import SideBanner from '../SideBanner';
import Articles from '../Articles';
import Footer from '../Footer/Footer';
import CircleClick from '../CirleClick';

function App() {
  return (
    <div className="App">
        <SideBanner />
        <Header />
        <ImageSlider />
        <Articles />    
        <CircleClick />
        <Footer />    
    </div>
  );
}

export default App;
