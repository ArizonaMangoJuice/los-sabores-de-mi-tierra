import React, { useState, memo } from 'react'
import './CircleClick.css'
import  './CircleClick.css';

const CircleClick = React.memo( props => {
    const [hovered, setHovered] = useState(false)
    console.log(hovered)
    return (
            <div className='circle-container'>
                <div 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    // className={`${hovered ? 'outer-circle' : 'circle-regrow'}`}
                    className='outer-circle'
                >
                    <div 
                        className={`${hovered ? 'inner-circle shrink' : 'inner-cirlce hidden'}`}
                        // className='inner-circle'
                    >

                    </div>        
                </div>
            </div>
        )
});

export default CircleClick