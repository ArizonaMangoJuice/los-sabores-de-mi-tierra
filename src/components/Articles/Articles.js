import React from 'react';
import LargeArticle from '../LargeArticle';
import SmallArticle from '../SmallArticle';
import {connect} from 'react-redux';

import './articles.css';
import LandingBlogLoader from '../LandingBlogLoader';

const mapStateToProps = state => ({
    pages: state.landingPage.pages, 
    loading: state.landingPage.loading,
})

function Articles(props){
    let articles;
    let stock = [0,0,0];
    if(props.pages.length > 0){
        articles = !props.loading 
        ? props.pages.map((e, i) => 
            i % 2 === 0 
                ? <SmallArticle 
                    mainImage={e.history[0].imageUrl} 
                    key={e.id}
                    title={e.title}
                    date={e.date}
                /> 
                : <LargeArticle
                    key={e.id}
                    mainImage={e.history[0].imageUrl} 
                    title={e.title}
                    date={e.date}
                />
        )
        : stock.map(e => (
            <LandingBlogLoader />
        ));
        
    }
    return (
        // <div>
            <div className='article-container'>
                {articles}
            </div>
        // </div>
    )
}

export default connect(mapStateToProps)(Articles)





