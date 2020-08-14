import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './sideBanner.css'
import '../ImageSlider/ImageSlider.css'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { render } from '@testing-library/react'
export default class extends Component{
    render(){
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
               <BannerItem/>
               <BannerItem/>
               <BannerItem/>
            </Carousel>
        )
    }
}

function BannerItem(props){
    return (
        <div className='featured'>
                    <div className='image-container'>
                        <img className='featured-image' src='https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=8b1938d0d4ef26e336db84568708980a' />
                    </div>
                    <div className='text-outer-container'>
                        <div className='text-container'>
                            <div className='featured-text'>
                                <FontAwesomeIcon style={{color: 'white', marginRight: '5px'}} icon={faStar} /> 
                                <FontAwesomeIcon icon={['fas', 'code']} />FEATURED
                            </div>
                            <p className='featured-title'>
                                I'm passionate about food, the tradition of it, cooking it, sharing it
                            </p>
                            <p className='slide-author'>
                                By <span className='normal-bold'>Norma Vizcaino</span> 
                                <span className='featured-date'> 3 years ago</span>
                            </p>
                        </div>
                    </div>
                    {/* <div className='next-container'>
                        <div className='next'>
                            <i className='arrow right'></i>
                        </div>
                    </div> */}
                </div>
    )
}