import React from 'react'
import ContactForm from './contactForm'
import './css/footer.css'

import {Button} from 'reactstrap'



const Footer = () => {

    return(
        <div className='footer-container'>
            <div className='contact-form-container'>
                <h1 className='contact-form-header'>Want More Information?</h1>
            <ContactForm />
            </div>
            <div>
                <h1>Locations</h1>
                <ul>
                    <li>11541 W. Temple Ave., Littleton, CO 80127</li>
                    <li>7488 S. Kit Carson St., Centennial, CO 80122</li>
                    <li>2936 S. Yampa Way, Aurora, CO 80014</li>
                    <li>17003 E. Pacific Pl., Aurora, CO 80013</li>
                    <li>14691 Ellen Lehigh Ave., Aurora, CO 80014</li>
                </ul>
            </div>
            <div className='team-container'>
                <h1>Join Our Team</h1>
                <p>We’re as dedicated to our team members 
as we are to our residents. 
Learn more about working at Sunrise.</p>
                <Button className='learn-button'>Learn More</Button>
            </div>
            
        </div>
    )
}

export default Footer