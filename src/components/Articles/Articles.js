import React, { useState } from 'react'
import LargeArticle from '../LargeArticle'
import MediumArticle from '../MediumArticle'
import SmallArticle from '../SmallArticle'

import './articles.css'

export default function Articles(props){
    return (
        // <div>
            <div className='article-container'>
                <SmallArticle />
                <LargeArticle />
                <MediumArticle />
                <MediumArticle />
            </div>
        // </div>
    )
}







