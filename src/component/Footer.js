import React from 'react';
import '../stylesheet/Footer.css';
import logo from '../images/logo2.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer_option1'>
            <div className='footer_logo'>
                <img 
                src={logo}
                className='logo'
                alt={'logo2'}
                />
            </div>
            <div className='footer_policy'>
                <h6 className='policy'>
                OUR Privacy Policy
                </h6>
                <p className='policy_text'>© lorem Ipsum 2023 <br/>
                All Rights Reserved.
                </p>
            </div>
        </div>

        <div className='footer_option2'>
            <div className='footer_address'>
                <h6 className='address'>
                Address
                </h6>
                <p className='address_text'>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.Lorem Ipsum has 
                </p>
            </div>
            <div className='footer_email'>
                <h6 className='email'>
                Email
                </h6>
                <p className='email_text'>
                example@codehelp.com
                </p>
            </div>
        </div>

        <div className='footer_option3'>
            <div className='footer_menu'>
                <h6 className='menu'>menu</h6>
                <p className='menu_team'>Team</p>
                <p className='menu_about'>About Us</p>
                <p className='menu_course'>Courses</p>
                <p className='menu_contact'>Contact</p>
            </div>
        </div>

        <div className='footer_option4'>
            <div className='facebook'>
                <img 
                src={facebook}
                className='fi' />
            </div>
            <div className='twitter'>
                <img 
                src={twitter}
                className='ti' />
            </div>
            <div className='instagram'>
                <img 
                src={instagram}
                className='ii' />
            </div>
        </div>
    </div>
  )
}

export default Footer;