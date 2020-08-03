import React from 'react'
import './PageTitleInput.css'
import {changeTitle} from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        title: state.page.title,
        linkName: state.page.linkName
    }
}

function PageTitleInput(props){
    return (
        <div className='pages-flex-container'>
            <section className='margin-center title-card card-hover main-color'>
                <p className='page-input-title'>Title:</p>
                <input 
                    className='page-title-input main-color' 
                    onChange={(e) => props.dispatch(changeTitle(e.target.value))}
                    type='text'
                    value={props.title}
                    />
            </section>
        </div>
    )
}

export default connect(mapStateToProps)(PageTitleInput)