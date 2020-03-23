import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
export default class Pages extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className='dashboard-container'>
                <Banner title='Create A New Blog!' />
                <PageTitleInput />
                <div className='main-page '>
                    <PageBody />
                </div>
            </div>
        )
    }
}

