import React, { useState } from 'react'
import {connect} from 'react-redux'

import './PageList.css'

const mapStateToProps = state => ({
    
})

 function PageList(props){
    const [listClicked, setListClicked] = useState(true)
    const [isOrdered, setOrdered] = useState(true)

    let ordered = isOrdered 
                       ? <>
                            <button className='order-button ordered success-background' onClick={() => setOrdered(!isOrdered)}>
                                Ordered
                            </button>
                        </>
                       : <>
                            <button className=' order-button unordered error-background' onClick={() => setOrdered(!isOrdered)}>
                                Unordered
                            </button>
                        </>
                        


    return (
        <div className='list-container relative'>
            <button onClick={() => setListClicked(!listClicked)} className='body-tools-button main-color'>
                Add Link
            </button>
            <div className={listClicked ? 'list-clicked' : 'hidden'}>
                <nav className='list-buttons main-color'>
                    <button className='body-tools-button main-color'>
                        Add List
                    </button>
                    <label className='link-clicked-input' >
                        {ordered}
                    </label>
                </nav>
                <label className='link-clicked-input'>
                    <p className='link-clicked-p'>List Name</p>
                    {/* <input onChange={(e) => props.dispatch(addLinkName(e.target.value))} value={props.linkName} type='text' /> */}
                </label>
                        
                <label className='link-clicked-input'>
                    <p className='link-clicked-p'>href</p>
                    {/* <input onChange={(e) => props.dispatch(addLink(e.target.value))} value={props.hyperLink} type='text' /> */}
                </label>

                {/* <button onClick={() => props.linkName !== '' && props.hyperLink !== '' 
                                ? props.dispatch(addLinkStack(props.linkName, props.hyperLink, paragraphCount)) && 
                                    props.dispatch(clearLink()) && 
                                    props.dispatch(clearLinkName()) && 
                                    props.dispatch(addLinkNameToBody(props.linkName, paragraphCount)) &&                                     
                                    setLinkClicked(!linkClicked)
                                : null}  
                        className='body-tools-button main-color add-link-button'>
                    Add
                </button> */}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(PageList)