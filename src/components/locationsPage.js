import React from "react";
import Menu from "./slideMenu";
import NavBar from "./navBar";
import { useMediaQuery } from "react-responsive";
import Footer from "./footer";
import "./css/locations.css";
function LocationsPage() {
 const isMobile = useMediaQuery({ query: "(max-width:725px)" });

 return (
  <div>
   <div>{isMobile ? <Menu /> : <NavBar />}</div>

   <div className="location-page-container">
    <h1 className="location-page-header">Locations</h1>
    <ul className="location-page-list">
     <li className="location-page-item">
      11541 W. Temple Ave., Littleton, CO 80127
     </li>
     <li className="location-page-item">
      7488 S. Kit Carson St., Centennial, CO 80122
     </li>
     <li className="location-page-item">2936 S. Yampa Way, Aurora, CO 80014</li>
     <li className="location-page-item">
      17003 E. Pacific Pl., Aurora, CO 80013
     </li>
     <li className="location-page-item">
      14691 Ellen Lehigh Ave., Aurora, CO 80014
     </li>
    </ul>
   </div>
   <Footer />
  </div>
 );
}

export default LocationsPage;
