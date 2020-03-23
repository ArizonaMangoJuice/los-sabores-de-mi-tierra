import React from 'react'
import './NavButton.css'
import { Link} from 'react-router-dom';

let colors = ['#e6463c', '#ee7f1e', '#6450c8', '#6cb4dd', '#2fa53e'];
let color;
let borderStyle;


export default class NavButton extends React.Component{
    componentDidMount(){
       color =  Math.floor(Math.random() * Math.floor(5));
        console.log('this is the color',color)
       borderStyle = {
            borderLeft: `4px solid ${colors[color]}`
       }
    }

    render(){
        console.log('props for navbutton', this.route)
        return (
            <>

            <Link to='/dashboard/pages' className={this.props.bottom ? this.props.bottom: `` }>
                <button className={this.props.bottom ? `nav-button ${this.props.bottom}` : `nav-button` } style={this.props.border}>
                    <div className='icon'>
                        <i className={this.props.iconName}></i>
                    </div>
                    <p className='dashboard-nav-words'>
                        {this.props.name}
                    </p>
                </button>
            </Link>

           
            </>
        )
    }
}