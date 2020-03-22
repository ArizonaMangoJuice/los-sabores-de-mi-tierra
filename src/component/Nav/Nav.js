import React from 'react'
import NavButton from '../NavButton/NavButton'
import './Nav.css'
// this will be moved when i use redux
let colors = ['#e6463c', '#ee7f1e', '#6450c8', '#6cb4dd', '#2fa53e'];
let text = ['Dashboard', 'Source', 'Forms', 'Pages', 'Logout'];
let icons = ['fa-home','fa-laptop-code','fa-wpforms','fa-file','fa-power-off'];
let color = Math.floor(Math.random() * Math.floor(5));

const borderStyle = {
    borderLeft: `4px solid ${colors[color]}`
}


export default class Nav extends React.Component{
    render(){
        let NavButtons = colors.map((e, i) => (
            <NavButton iconName={`fas ${icons[i]}`} 
                name={text[i]} 
                border={{borderLeft: `4px solid ${e}`}} 
                bottom={text.length-1 === i  ? 'bottom' : ''} />
        ));

        return (
            <nav className='dashboard-nav'>
                {NavButtons}
                {/* <NavButton iconName="fas fa-home" name="Dashboard" border={borderStyle} />
                <NavButton iconName="fas fa-laptop-code" name="Source" border={borderStyle}/>
                <NavButton iconName="fab fa-wpforms" name="forms" border={borderStyle}/>
                <NavButton iconName="far fa-file" name="pages" border={borderStyle}/>
                <NavButton iconName="fas fa-power-off" name="logout" bottom='bottom' border={borderStyle}/> */}
            </nav>
        )
    }
}