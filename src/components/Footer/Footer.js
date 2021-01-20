import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


export default function Footer(props){
    return (
        <footer className='main-color'>
            {/* <Link to='/login'>
                <img alt='isael-blog-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' className='footer-logo' />
            </Link> */}
            <div className='footer-main-container'>
                <img alt={`animated logo that dazzles`} className='footer-logo'  src={require('../../images/LSDMTLogo.png')}/>
                <ul className='footer-links-container'>
                    <li className='footer-li-links'>
                        {/* <a className='footer-links'>Features</a> */}
                    </li>
                    <li className='footer-li-links'>
                        {/* <a className='footer-links'>Recipes</a> */}
                    </li>
                    <li className='footer-li-links'>
                        {/* <a className='footer-links'>Membership</a> */}
                    </li>
                    <li className='footer-li-links'>
                        {/* <a className='footer-links'>Contact</a> */}
                    </li>
                </ul>
                <div className='social-bar-container'>
                    <div className='social-bar'>
                        <a href='https://github.com/ArizonaMangoJuice'><FontAwesomeIcon icon={faGithub} /></a>
                        
                        <a href='https://www.linkedin.com/in/isael-lizama-9a128b130/'><FontAwesomeIcon icon={faLinkedin} /></a>
                        
                        <a href='https://twitter.com/ArizonaMJuice'><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </div>
                </div>
            </div>
            
            
            <p className='footer-p'>© 2020. Los Sabores De Mi Tierra. All rights reserved. Website Developed by <a href='google.com'>AMJ</a></p>
        </footer>
    )
}