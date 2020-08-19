import React from 'react'
import './articles.css'

export default function Articles(props){
    return (
        <div>
            <div className='article-container'>
                <SmallArticle />
                <LargeArticle />
            </div>
        </div>
    )
}

// move to seperate components

function SmallArticle(props){
    return (
        <section className='sm-section'>
            <div className='background'></div>

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
    return (
        <div className='lg-section'>
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