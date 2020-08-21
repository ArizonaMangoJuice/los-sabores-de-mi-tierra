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
                    className={`${hovered ? 'outer-circle outer-circle-disappear' : 'outer-circle'}`}
                >
                    <div 
                        className={`${hovered ? 'inner-circle shrink' : 'inner-cirlce hidden'}`}
                    >

                    </div>        
                </div>
            </div>
        )
});

export default CircleClick