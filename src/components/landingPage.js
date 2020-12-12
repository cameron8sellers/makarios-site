import React from 'react'
import { Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap'
import contactForm from './contactForm'
import './css/landingPage.css'
import NavBar from './navBar'
import Footer from './footer'

import heroImg from '../photos/heroImg.png'
import goalImg from '../photos/goalImg.png'
import servicesImg from '../photos/services-new.jpg'
import testimoniesImg from '../photos/reviewsImg.jpg'
import facilityImg from '../photos/facilities.jpg'



const landingPage = () => {
            return(
                <div>
                       <NavBar />
                    <div hero-img-container>
                       <img src={heroImg} id='heroImg' alt={heroImg} />
                       <Card className="hero-card">
                           <CardTitle className='hero-card-title'>Where Life is a Blessing</CardTitle>
                           <CardBody className='hero-card-body'>Family Owned Since 1992</CardBody>
                           <div className='hero-card-button-container'>
                               <Button className='hero-card-button'>Why Us?</Button>
                               <Button className='hero-card-button'>Contact</Button>
                           </div>
                       </Card>
                    </div>
                    <div  >
                        <Card id='goal-card-container'>
                            <CardImg src={goalImg} className="goalImg"/>
                            <div className="title-body-container">
                            <CardTitle className='cardTitle'>Our Goal</CardTitle>
                            <CardBody className="cardBody">
                            Our goal here is to make their lives full of blessings. 
                            We want our residents to feel blessed and to make our 
                            environment feel just like home.
                            </CardBody>
                            </div>
                        </Card>
                    </div>
                    <div className='info-divider'>
                        <h1>Call 707-707-344</h1>
                        <h1>Schedule a Tour</h1>
                        <h1>Questions?</h1>
                    </div>
                    <div className='reviews-services-div'>
                        <Card className='serv-test-card'>
                            <CardImg src={servicesImg} className='services-img' />
                            <CardTitle className='serv-test-card-title'>Our Services</CardTitle>
                        </Card>

                        <Card className='serv-test-card'>
                            <CardImg src={testimoniesImg} className='reviews-img' />
                            <CardTitle className='serv-test-card-title'>Testimonies</CardTitle>
                        </Card>

                    </div>
                    <div className='facility-heading-container'>
                        <h1 className='facility-heading'>Our Facility</h1>
                    </div>
                    <div className='facilities-div'>
                        
                        <img src={facilityImg} id='f-img-1' className='facility-img-main'/>
                        <img src={facilityImg} id='f-img-2' className='facility-img'/>
                        <img src={facilityImg} id='f-img-3' className='facility-img'/>
                        <img src={facilityImg} id='f-img-4' className='facility-img'/>
                        <img src={facilityImg} id='f-img-5' className='facility-img'/>
                        <h1 className='see-more-link'><a>See More...</a></h1>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            )
}

export default landingPage