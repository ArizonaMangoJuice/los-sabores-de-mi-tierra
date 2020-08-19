import React, { useState } from 'react'

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

export default MediumArticle