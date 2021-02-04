import React from 'react';
import './YoutubeVideo.css';

const YoutubeVideo = props => {
    return (
        <iframe 
            width="1182" 
            height="665" 
            title='cooking video related to the article'
            className='youtube-iframe'
            src={props.youtubeUrl ? `https://www.youtube.com/embed/${props.youtubeUrl}` : 'https://www.yotube.com/embed'} 
            frameBorder="0" 
            allow="accelerometer"
           
            allowFullScreen={true}>
        </iframe>
    )
}
//autoplay; 

export default YoutubeVideo;

//    width: 100%;