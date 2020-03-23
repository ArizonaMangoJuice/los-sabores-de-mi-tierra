import React from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
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
                    <div className='page-body card-hover'>
                        <nav className='body-tools'>
                            <button className='body-tools'>
                                button
                            </button>
                            <button className='body-tools'>
                                button
                            </button>
                            <button className='body-tools'>
                                button
                            </button>
                        </nav>
                        <textarea placeholder='enter your text here' className='pages-text-area'>

                        </textarea>
                    </div>
                </div>
            </div>
        )
    }
}