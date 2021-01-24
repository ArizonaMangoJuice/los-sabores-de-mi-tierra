import React from 'react';

const YoutubeVideo = props => {
    return (
        <iframe 
            width="1182" 
            height="665" 
            title='cooking video related to the article'
            src={props.youtubeUrl ? `https://www.youtube.com/embed/${props.youtubeUrl}` : 'https://www.yotube.com/embed'} 
            frameBorder="0" 
            allow="accelerometer"
           
            allowFullScreen={true}>
        </iframe>
    )
}
//autoplay; 

export default YoutubeVideo