import React from 'react'
import './ImageSlider.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImageSlider(props){
    return (
        <div className='featured-container'>
            <div className='featured'>
                <div className='image-container'>
                    <img className='featured-image' src='https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=8b1938d0d4ef26e336db84568708980a' />
                </div>
                <div className='text-container'>
                    <div className='featured-text'>
                    <FontAwesomeIcon style={{color: 'white'}} icon={faStar} /> 
                    <FontAwesomeIcon icon={['fas', 'code']} />Featured
                    </div>
                    <p className='featured-title'>
                        I'm passionate about food, the tradition of it, cooking it, sharing it
                    </p>
                    <p>
                        By Norma Vizcaino 
                        <span className='featured-date'> 3 years ago</span>
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default ImageSlider

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
