import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import './ImageSlider.css'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class ImageSlider extends Component{
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

// change functionality of banner item
// make image position absolute so you only show half
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
                                <FontAwesomeIcon /> FEATURED
                            </div>
                            <p className='featured-title'>
                                I'm passionate about food, the tradition of it, cooking it, sharing it
                            </p>
                            <p className='slide-author'>
                                By <span className='normal-bold'>Norma Vizcaino</span> 
                                <span className='featured-date'> 4 years ago</span>
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





let staticData = [
    {
        isFeatured:true,
        imageUrl: 'https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=8b1938d0d4ef26e336db84568708980a',
        title: "I'm passionate about food, the tradition of it, cooking it, sharing it",
        date: '3 days ago',
        authors: ['norma Vizcaino'],
    },
    {
        isFeatured:true,
        imageUrl: 'https://images.unsplash.com/photo-1520032484190-e5ef81d87978?ixlib=rb-1.2.1&q=75&fm=jpg&crop=entropy&cs=tinysrgb&w=830&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ',
        title: "I think it's the responsibility of a designer to try to break rules and barriers",
        date: '3 days ago',
        authors: ['norma Vizcaino', 'Isael Lizama'],
    },
    {
        isFeatured:true,
        imageUrl: 'https://images.unsplash.com/photo-1512414584143-b9a3e3484950?ixlib=rb-0.3.5&q=75&fm=jpg&crop=entropy&cs=tinysrgb&w=830&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=f61f1a56fd7ab2e18df900258feb8b4c',
        title: "The creation of beauty is art",
        date: '3 days ago',
        authors: ['norma Vizcaino', 'Elizabeth Lizama'],
    }
]
