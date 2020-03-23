import React from 'react'
import './PageTitleInput.css'
export default function PageTitleInput(props){
    return (
        <div className='pages-flex-container'>
            <section className='margin-center title-card card-hover main-color'>
                <p className='page-input-title'>Title:</p>
                <input className='page-title-input main-color' type='text' />
            </section>
        </div>
    )
}