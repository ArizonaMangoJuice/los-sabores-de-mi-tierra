import React, { useState } from 'react'
import './articles.css'

export default function Articles(props){
    return (
        <div>
            <div className='article-container'>
                <SmallArticle />
                <LargeArticle />
                <MediumArticle />
                <MediumArticle />
            </div>
        </div>
    )
}


// move to seperate components

function SmallArticle(props){
    const [hovered, setHovered] = useState(false);
    return (
        <section 
            className={`sm-section ${hovered ? 'hover' : ''} `} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            {/* this will be enabled for adding images if there is one for the post */}
            {/* <div className='background'></div> */}

            <h4 className='sm-article-title'>The future of architecture is culture </h4>
            <h5 className='author'>by Patricia Jenkins 2 years ago</h5>
            <section className='tag-ad-container'>
                <button className='tag article-button'>
                    Recipe
                </button>
                <button className='non-removal-ads article-button'>
                    Non Removal Ads
                </button>
            </section>
        </section>
    )
}

function LargeArticle(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className={`lg-section ${hovered ? 'hover' : ''} `} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <div className='filter'></div>
            <div className='background'></div>
            <h4 className='lg-article-title'>The future of architecture is culture </h4>
            <h5 className='author'>by Patricia Jenkins 2 years ago</h5>
            <section className='tag-ad-container'>
                <button className='tag article-button'>
                    Recipe
                </button>
                <button className='non-removal-ads article-button'>
                    Non Removal Ads
                </button>
            </section>
        </div>
    )
}

function MediumArticle(props){
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className={`md-section ${hovered ? 'hover' : ''} `} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <div className='filter'></div>
            <div className='background'></div>
            <h4 className='md-article-title'>The future of architecture is culture </h4>
            <h5 className='author'>by Patricia Jenkins 2 years ago</h5>
            <section className='tag-ad-container'>
                <button className='tag article-button'>
                    Recipe
                </button>
                <button className='non-removal-ads article-button'>
                    Non Removal Ads
                </button>
            </section>
        </div>
    )
}