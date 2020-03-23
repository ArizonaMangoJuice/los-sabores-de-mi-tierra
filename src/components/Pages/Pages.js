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
                <Banner title='Create A Page!' />
            </div>
        )
    }
}