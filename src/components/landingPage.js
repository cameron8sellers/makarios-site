import React from "react";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import "./css/landingPage.css";
import NavBar from "./navBar";
import Footer from "./footer";
import Menu from "./slideMenu";

import { useMediaQuery } from "react-responsive";

function LandingPage() {
 const isMobile = useMediaQuery({ query: "(max-width:725px)" });
 return (
  <div>
   {isMobile ? <Menu /> : <NavBar />}
   <div className="hero-img-container">
    <img
     src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627845147/Makarios/pexels-matthias-zomer-339620_tn7uqw.jpg"
     id="heroImg"
     alt="none"
    />
    <Card className="hero-card">
     <CardTitle className="hero-card-title">Where Life is a Blessing</CardTitle>
     <CardBody className="hero-card-body">Family Owned Since 1992</CardBody>
    </Card>
   </div>
   <div>
    <Card id="goal-card-container">
     <CardImg
      src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843923/Makarios/pexels-andrea-piacquadio-3768131_wxal5i.jpg"
      className="goalImg"
     />
     <div className="title-body-container">
      <CardTitle className="cardTitle">Our Goal</CardTitle>
      <CardBody className="cardBody">
       Our goal here is to make their lives full of blessings. We want our
       residents to feel blessed and to make our environment feel just like
       home.
      </CardBody>
     </div>
    </Card>
   </div>
   <div className="info-divider">
    <h1>Call 720-404-1445</h1>
    <h1>Schedule a Tour</h1>
    <h1>Questions?</h1>
   </div>
   <div className="reviews-services-div">
    <Card className="serv-test-card">
     <CardImg
      src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843928/Makarios/pexels-kampus-production-7551608_x8bfg3.jpg"
      className="services-img"
     />
     <CardTitle className="serv-test-card-title">
      <a href="/services" className="nav-link">
       Our Services
      </a>
     </CardTitle>
    </Card>

    <Card className="serv-test-card">
     <CardImg
      src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843930/Makarios/pexels-kampus-production-7551646_kcwmdo.jpg"
      className="reviews-img"
     />
     <CardTitle className="serv-test-card-title">
      <a href="/testimonies" className="nav-link">
       Testimonies
      </a>
     </CardTitle>
    </Card>
   </div>
   <div className="facility-heading-container">
    <h1 className="facility-heading">Photos</h1>
   </div>
   <div className="facilities-div">
    <img
     src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843934/Makarios/pexels-tristan-le-1642883_adk68k.jpg"
     id="f-img-1"
     className="facility-img-main"
     alt=""
    />
    <img
     src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843942/Makarios/pexels-mike-126271_iqmnqc.jpg"
     id="f-img-2"
     className="facility-img"
     alt=""
    />
    <img
     src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843926/Makarios/markus-spiske-g5ZIXjzRGds-unsplash_q3uhd5.jpg"
     id="f-img-3"
     className="facility-img"
     alt=""
    />
    <img
     src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843914/Makarios/pexels-pixabay-257360_ntniyr.jpg"
     id="f-img-4"
     className="facility-img"
     alt=""
    />
    <img
     src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843911/Makarios/pexels-pixabay-271624_cftyb0.jpg"
     id="f-img-5"
     className="facility-img"
     alt=""
    />
    <h1 className="see-more-link">
     <a href="/photos" className="nav-link">
      See More...
     </a>
    </h1>
   </div>
   <div>
    <Footer />
   </div>
  </div>
 );
}

export default LandingPage;
