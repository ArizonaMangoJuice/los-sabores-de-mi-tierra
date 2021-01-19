import React, {useEffect} from 'react';
import Articles from '../Articles';
import CircleClick from '../CirleClick';
import Footer from '../Footer';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider';
import SideBanner from '../SideBanner';
import {connect} from 'react-redux';
import { fetchPages } from '../../actions';

function Landing(props){
    useEffect(() => {
        props.dispatch(fetchPages());
    }, [])

    return (
        <>
            <SideBanner />
            <ImageSlider />
            <Articles />
            <CircleClick />
            <Footer />
        </>
    )
}

export default connect()(Landing)