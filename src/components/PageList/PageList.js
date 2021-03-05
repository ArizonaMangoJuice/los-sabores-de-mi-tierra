import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addListToState} from '../../actions/index'
import './PageList.css'

const mapStateToProps = state => ({
    // stack: state.page.stack
})

 function PageList(props){
    const [listClicked, setListClicked] = useState(false)
    const [isOrdered, setOrdered] = useState(true)
    const [listArray, addToList] = useState([])
    const [list, addList] = useState('')

    let addToState = () => {
        // let stackId = props.stack.length
        props.dispatch(addListToState({
                                        listArray,
                                        // stackId,
                                        isOrdered
                                    }))
        addList('')
        addToList([])
        setOrdered(true)
        setListClicked(false)
    }

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

    let listLi = listArray.map((e, i) => (
    <li key={`list${i}`}className='page-list'>{e}</li>
    )) 
      
    isOrdered ? finalList = <ol>{listLi}</ol> : finalList = <ul>{listLi}</ul>

    return (
        <div className='list-container relative'>
            <button 
                className='body-tools-button custom-file-upload' 
                onClick={() => setListClicked(!listClicked)} 
            >
                Add List
            </button>

            <div className={listClicked ? 'list-clicked' : 'hidden'}>
                <nav className='list-buttons main-color'>
                    <label className='link-clicked-input' >
                        {ordered}
                    </label>
                    <button onClick={() => listArray.length === 0 ? null : addToState()} className=''>
                        finish
                    </button>
                </nav>
                
                <div className='list-add-container'>
                    <input value={list} onChange={e => addList(e.target.value)} type='text' placeholder='add the list name here'/>
                    
                    <button onClick={() => list.length === 0 ? null : addListButton()} className=''>
                        Add List
                    </button>
                </div>
                        
                <div className={listArray.length !== 0 ? 'list-output' : null}>
                    {finalList}
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(PageList)