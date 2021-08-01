import React from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "./slideMenu";
import NavBar from "./navBar";
import Footer from "./footer";
import "./css/services.css";
function ServicesPage() {
 const isMobile = useMediaQuery({ query: "(max-width:725px)" });
 return (
  <div>
   <div> {isMobile ? <Menu /> : <NavBar />}</div>
   <div className="services-list">
    <h1 className="cardTitle">Our Services</h1>
    <ul className="cardBody">
     <li>Nurse Assessment.</li>
     <li>In house doctor visit.</li>
     <li>24/7 Registered Nurse on call.</li>
     <li>24/7 hour staffing by a Certified Nursing Assistant.</li>
     <li>Daily medication, administration & monitoring.</li>
     <li>Delicious home cooked meals & snacks.</li>
     <li>House Keeping & Laundry</li>
     <li>
      Assisted daily living including but not limited to bathing, dressing,
      eating and continence.
     </li>
     <li>Weekly Activities, game & movie days.</li>
     <li>Professional hair & nails.</li>
     <li>Private & semi Private rooms.</li>
     <li>Medicaid accepted.</li>
    </ul>
   </div>
   <Footer />
  </div>
 );
}

export default ServicesPage;
