import React, {useEffect} from 'react'
import './ImageUpload.css'
import {connect} from 'react-redux'
import { addMainImagePreview, addMainImage, addImage } from '../../actions'

const mapStateToProps = state => ({
    // page: state.page
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

const ImageUpload = props => {
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(props.imagePreview)
    })

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        if(props && props.mainImage){
            console.log('this is the file',e.target.files[0])
            props.dispatch(addMainImage(e.target.files[0]))
            props.dispatch(addMainImagePreview(URL.createObjectURL(e.target.files[0])))
        } else {
            let file = e.target.files[0];
            let link = URL.createObjectURL(file)

            props.dispatch(addImage(file, link))
        }
    }

    return (
        <>
            <label onChange={onSelectFile}  className=" body-tools-button custom-file-upload">
                    <input type='file' />
                    <i className="fas fa-upload icon-margin"></i> {props.name ? props.name : 'Add Main Image'}
            </label>
            {/* <label>
             <input type='file' onChange={onSelectFile} />
                <spa>hello</spa>
            </label> */}
            {/* {props.imagePreview ? <img className='main-image-preview' src={props.imagePreview} /> : null} */}
        </>
    )
}

export default connect()(ImageUpload)