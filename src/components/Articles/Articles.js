import React, { useState } from 'react';
import LargeArticle from '../LargeArticle';
import MediumArticle from '../MediumArticle';
import SmallArticle from '../SmallArticle';
import {connect} from 'react-redux';

import './articles.css';

const mapStateToProps = state => ({
    pages: state.landingPage.pages
})

function Articles(props){
    let articles;
    if(props.pages.length > 0){
        articles = props.pages.map((e, i) => 
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
        );
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





