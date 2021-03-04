import React, {useEffect} from 'react';
import Articles from '../Articles';
// import CircleClick from '../CirleClick';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import SideBanner from '../SideBanner';
import {connect} from 'react-redux';
import { fetchPages } from '../../actions';

function Landing(props){
    useEffect(() => {
        props.dispatch(fetchPages());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    return (
        <>
            <SideBanner />
            <ImageSlider />
            <Articles />
            {/* <CircleClick /> */}
            <Footer />
        </>
    )
}

export default connect()(Landing)