import React, { useState } from 'react'

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

export default SmallArticle