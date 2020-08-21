import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'


export default function Footer(props){
    return (
        <footer className='main-color'>
            {/* <Link to='/login'>
                <img alt='isael-blog-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' className='footer-logo' />
            </Link> */}
            
            <div className='social-bar'>
                
                <a href='https://github.com/ArizonaMangoJuice'><i className="fab fa-github-square"></i></a>
                
                <a href='https://www.linkedin.com/in/isael-lizama-9a128b130/'><i className="fab fa-linkedin"></i></a>
                
                <a href='https://twitter.com/ArizonaMJuice'><i className="fab fa-twitter-square"></i></a>
            </div>
            <p className='footer-p'>© 2020. Isael Lizama. All rights reserved. Website Design by <a href='google.com'>AMJ</a></p>
        </footer>
    )
}