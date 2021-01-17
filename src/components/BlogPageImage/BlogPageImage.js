import React from 'react'
import {connect} from 'react-redux'

let staticUrl = 'https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=8b1938d0d4ef26e336db84568708980a';

const mapStateToProps = state => ({
    history: state.page.history
})

function BlogPageBanner(props){
    let mainImage;

    if(props.isHistory && props.history){
        if(props.history[0] && props.history[0].imagePreview) {
            mainImage = props.history[0].imagePreview;
        } else {
            mainImage = staticUrl;
        }
    } 

    return (
        <div className='blog-banner-container '>
            <div className='blog-banner-image-container'>
                <img
                    className='blog-banner-image'
                    src={mainImage}/>
            </div>
            <div className='blog-banner-desc'>
                <div className='blog-banner-tags'>

                </div>
                <div className='blog-banner-title featured-title'>
                    I'm passionate about food, the tradition of it, cooking it, sharing it
                </div>
                <div className='blog-banner-author slide-author'>
                    by <span className='normal-bold'>Sean Hamilton, Patricia Jenkins, James Bryant</span> 3 years ago
                </div>
                <div className='slide-author'>
                    1 MIN READ
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BlogPageBanner);