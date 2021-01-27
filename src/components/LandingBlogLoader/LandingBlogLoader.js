import React from 'react';
import './LandingBlogLoader.css';

const LandingBlogLoader = ({loaderCss}) => {
    return (
    <div class='holder'>
        <div className={loaderCss ? loaderCss : 'loader-container'}>
            <div class="loader"></div>
            <div class="loader1"></div>
        </div>
    </div>
    )
}

export default LandingBlogLoader;