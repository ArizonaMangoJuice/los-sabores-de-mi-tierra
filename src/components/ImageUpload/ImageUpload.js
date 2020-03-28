import React from 'react'
import {storage} from '../../firebase'

export default class ImageUpload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        console.log(e.target)
        if(e.target.files[0]){
            const image = e.target.files[0]
            this.setState({
               image
            })
        }
    }

    handleUpload(){
        const {image} = this.state

        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', (snapshot) => {
            // progress function 
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            this.setState({
                progress
            })
        }, (error) => {
            // error function
           console.log(error) 
        }, (complete => {
            // complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url)
                this.setState({
                    url
                })
            })
        }))
    }

    render(){
        return(
            <div>
                <progress value={this.state.progress} max='100'></progress>
                <input type='file' onChange={(e) => this.handleChange(e)}/>
                <button className='dashboard-button nav-button' onClick={() => this.handleUpload()}>
                    Upload
                </button>
                {this.state.url ? <img src={this.state.url} alt='Uploaded images'></img> : null}
            </div>
        )
    }
}