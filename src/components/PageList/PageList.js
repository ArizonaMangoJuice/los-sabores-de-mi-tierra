import React, { useState } from 'react'
import {connect} from 'react-redux'

import './PageList.css'

const mapStateToProps = state => ({
    
})

 function PageList(props){
    const [listClicked, setListClicked] = useState(true)
    const [isOrdered, setOrdered] = useState(true)
    const [listArray, addToList] = useState([])
    const [list, addList] = useState('')

    let addListButton = () => {
        addList('')
        addToList([...listArray,list])
    }

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
    
    let finalList

    let listLi = listArray.map(e => (
    <li className='page-list'>{e}</li>
    )) 
      
    isOrdered ? finalList = <ol>{listLi}</ol> : finalList = <ul>{listLi}</ul>

    return (
        <div className='list-container relative'>
            <button onClick={() => setListClicked(!listClicked)} className='body-tools-button main-color'>
                Add List
            </button>
            
            <div className={listClicked ? 'list-clicked' : 'hidden'}>
                <nav className='list-buttons main-color'>
                    <label className='link-clicked-input' >
                        {ordered}
                    </label>
                </nav>

                <div className='list-add-container'>
                    <input value={list} onChange={e => addList(e.target.value)} type='text' placeholder='add the list name here'/>
                    
                    <button onClick={() => list.length === 0 ? null : addListButton()} className='body-tools-button main-color'>
                        Add List
                    </button>
                </div>
                        
                <div className='list-output'>
                    {finalList}
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(PageList)