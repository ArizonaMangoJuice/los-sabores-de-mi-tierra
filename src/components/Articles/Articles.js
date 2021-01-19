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

    let articles = props.pages.map((e, i) => 
        i % 2 === 0 ? <SmallArticle /> : <LargeArticle />
    );

    return (
        // <div>
            <div className='article-container'>
                {articles}
            </div>
        // </div>
    )
}

export default connect(mapStateToProps)(Articles)





