import React from 'react';
import {connect} from 'react-redux';
let stockPhotoUrl = 'https://firebasestorage.googleapis.com/v0/b/los-sabores.appspot.com/o/images%2FStockfood.jpg?alt=media';
// change functionality of banner item
// make image position absolute so you only show half

function BannerItem(props){
    let time = props.time.slice(0,10);
    return (
        <div className='featured'>
                    <div className='image-container'>
                        <img className='featured-image' alt={`Main Cooking Dish`} src={props.image ? props.image : stockPhotoUrl} />
                    </div>
                    <div className='text-outer-container'>
                        <div className='text-container'>
                            <div className='featured-text'>
                                {/* <FontAwesomeIcon style={{color: 'white', marginRight: '5px'}} icon={faStar} />  */}
                                {/* <FontAwesomeIcon /> FEATURED */}
                            </div>
                            <p className='featured-title'>
                                {props.title}
                            </p>
                            <p className='slide-author'>
                                By <span className='normal-bold'>Norma Vizcaino, Isael Lizama	&nbsp;	&nbsp;</span> 
                                <span className='featured-date'>{time}</span>
                            </p>
                        </div>
                    </div>
                    {/* <div className='next-container'>
                        <div className='next'>
                            <i className='arrow right'></i>
                        </div>
                    </div> */}
                </div>
    )
}

export default connect()(BannerItem)