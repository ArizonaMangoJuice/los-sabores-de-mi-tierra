import React from 'react'
import './Banner.css'
export default function Banner(props){
    return (
        <div className='banner-top-padding'>
            <div className='banner card-hover main-color'>
                <h1 className='banner-title'>{props.title}</h1>   
            </div>  
        </div>
    )
}