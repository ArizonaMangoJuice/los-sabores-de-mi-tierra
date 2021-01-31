import React from 'react';
import './edit-blog-card.css';

const EditBlogCard = props => {
    return (
        <button 
            className='edit-blog-card' 
            style={{
                backgroundImage: `url(${props.history[0].imageUrl})`
            }} 
        >
            <div className='card-inner-container'>
                <h1 className='edit-blog-card-title'>{props.title}</h1>
            </div>
            {/* <p>{props.history[0].imageUrl}</p> */}
            {/* <img className='edit-blog-card' /> */}
        </button>
    )
}

export default EditBlogCard;