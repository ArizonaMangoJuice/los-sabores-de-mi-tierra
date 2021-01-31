import React from 'react';
import './LandingBlogLoader.css';

const LandingBlogLoader = ({loaderCss}) => {
    return (
    <div className='holder'>
        <div className={loaderCss ? loaderCss : 'loader-container'}>
            <div className="loader"></div>
            <div className="loader1"></div>
        </div>
    </div>
    )
}

export default LandingBlogLoader;