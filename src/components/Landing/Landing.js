import React from 'react';
import Articles from '../Articles';
import CircleClick from '../CirleClick';
import Footer from '../Footer';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider';
import NewImageUpload from '../NewImageUpload';
import SideBanner from '../SideBanner';

export default function Landing(props){
    return (
        <>
            <SideBanner />
            <ImageSlider />
            <Articles />
            <CircleClick />
            <Footer />
            <NewImageUpload />
        </>
    )
}