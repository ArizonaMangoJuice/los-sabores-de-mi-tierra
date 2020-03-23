import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
export default class Pages extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className='dashboard-container'>
                <Banner title='Create A New Blog!' />
                <div className='pages-flex-container '>
                    <section className='margin-center title-card card-hover'>
                        <p className='page-input-title'>Title:</p>
                        <input className='page-title-input' type='text' />
                    </section>
                </div>
            </div>
        )
    }
}