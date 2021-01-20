import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import './ImageSlider.css';
import BannerItem from '../BannerItem';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    pages: state.landingPage.pages
});

function ImageSlider(props) {
        let bannerItems;
        if(props.pages.length > 0){
            bannerItems = props.pages.map((e,i) => (
                <BannerItem
                    image={e.history[0].imageUrl}
                    time={e.date}
                    title={e.title}
                    key={`post${i}`} 
                />
            ));
            bannerItems = bannerItems.slice(0,3)
        } 
        return (
            <Carousel 
                infiniteLoop={true} 
                autoPlay={true} 
                className='test' 
                showThumbs={false} 
                showStatus={false}
                stopOnHover={true}
                emulateTouch={true}
                swipeable={true}
                showIndicators={false}
            >
               {bannerItems}
            </Carousel>
        )
}


export default connect(mapStateToProps)(ImageSlider);

