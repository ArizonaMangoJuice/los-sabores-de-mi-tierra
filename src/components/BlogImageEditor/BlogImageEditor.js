import React from 'react';
import {connect} from 'react-redux';
import {deleteImage} from '../../actions';

//this might be used here
// const mapStateToProps = state ({
//     state
// })
// key={`i${i}`}
const BlogImageEditor = ({id,image, dispatch}) => {
    return (
        <div className='image-history' > 
            <nav className='image-history-buttons'>
                <button onClick={() => dispatch(deleteImage(id))}> 
                    X
                </button>
            </nav>
            <img className='history-image' src={image}  id={id} />
        </div> 
    )
}

export default connect()(BlogImageEditor);