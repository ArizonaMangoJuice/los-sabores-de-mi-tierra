import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function LargeArticle(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link 
            to={`/blogpost/${props.title}`}
            className={`lg-section ${hovered ? 'hover' : ''} `} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <div className='filter'></div>
            <div className='background' 
                style={{
                    background: `url(${props.mainImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                    
                }}
            >  
            </div>
            <h4 className='lg-article-title'>{props.title}</h4>
            <h5 className='author'>by Norma Vizcaino {props.date}</h5>
            <section className='tag-ad-container'>
                <button className='tag article-button'>
                    Recipe
                </button>
                {/* <button className='non-removal-ads article-button'>
                    Non Removal Ads
                </button> */}
            </section>
        </Link>
    )
}

export default LargeArticle