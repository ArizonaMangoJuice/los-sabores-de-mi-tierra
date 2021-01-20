import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SmallArticle(props){
    const [hovered, setHovered] = useState(false);
    return (
        <Link
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className={`sm-section ${hovered ? 'hover' : ''}`} to={`/blogpost/${props.title}`}>
                {/* this will be enabled for adding images if there is one for the post */}
                {/* <div className='background'></div> */}
                <div className='background' 
                    style={{
                        background: `url(${props.mainImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center'
                        
                    }}
                >  
                </div>
                <h4 className='sm-article-title'>{props.title}</h4>
                <h5 className='author'>by Norma {props.date}</h5>
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

export default SmallArticle