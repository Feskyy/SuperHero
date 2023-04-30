import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container container'>
                <h1 className='footer__title'>Feskyy</h1>

                <ul className='footer_list'>
                    <li>
                        <a href="#about" className='footer_link'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#about" className='footer_link'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer_link'>
                           Portfolio 
                        </a>
                    </li>
                </ul>


                <div className="footer__social">
            <a href="https://discord.com/users/1074625652453539860" className="footer__social-icon">
            <i class="fa-brands fa-discord  fa-xs"></i>
            </a>

            <a href="e" className="footer__social-icon" target="_blank">
            <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="https://github.com/Feskyy" className="footer__social-icon">
            <i class="fa-brands fa-github fa-sm"></i>
            </a>

            
        </div>

                </div>

                
                <center>
                <span className='footer__copy'>
                &#169; Feskyy. All rights reserved 
                </span>
                </center>
                
        </footer>
    )
}

export default Footer