import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import './ImageSlider.css';
import BannerItem from '../BannerItem';
import {connect} from 'react-redux';
import LandingBlogLoader from '../LandingBlogLoader';


const mapStateToProps = state => ({
    pages: state.landingPage.pages,
    loading: state.landingPage.loading,
});

function ImageSlider(props) {
        let bannerItems;
        let stock = [0,0,0];
        // if(props.pages.length > 0){
            bannerItems = !props.loading 
            ? props.pages.map((e,i) => (
                <BannerItem
                    image={e.history[0].imageUrl}
                    time={e.date}
                    title={e.title}
                    key={`post${i}`} 
                />
            ))
            : stock.map((e, i) => (
                <LandingBlogLoader key={`loader${i}`} />
            ));
            bannerItems = bannerItems.slice(0,3);
            // console.log('these are the banner items', bannerItems);
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

