import React from 'react'

let authorPic = 'https://firebasestorage.googleapis.com/v0/b/los-sabores.appspot.com/o/images%2FNorma%20Vizcaino.jpg?alt=media';

function BlogPageAuthor(props){
    return (
        <div className='blog-page-author-container-card'>
            <img 
                alt={`this is the author of the site`}
                className='blog-page-author-image'
                src={authorPic}    
            />
            <div className='author-content-container'>
                <h3 className='blog-page-author-card-title'>
                    Norma Vizcaino
                </h3>
                <p className='blog-page-author-card-content'>Respondeat totidem verbis. Utinam quidem dicerent alium alio beatiorem, Iam ruinas videres. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus.</p>
            </div>
        </div>
    )
}

export default BlogPageAuthor

