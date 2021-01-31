import React from 'react';
import './edit-blog-card.css';

const EditBlogCard = props => {
    return (
        <button 
            onClick={ () => {
                props.setClicked(true)
                props.setBlogInfo({
                    history: props.history,
                    title: props.title
                })
                }
            }
            className='edit-blog-card' 
            style={{
                backgroundImage: `url(${props.history[0].imageUrl})`
            }} 
        >
            <div className='card-inner-container'>
                <h1 className='edit-blog-card-title'>{props.title}</h1>
            </div>
        </button>
    )
}

export default EditBlogCard;