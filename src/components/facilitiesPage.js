import { render } from "@testing-library/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "./slideMenu";
import NavBar from "./navBar";

function FacilitiesPage() {
 const isMobile = useMediaQuery({ query: "(max-width:725px)" });
 return (
  <div>
   {isMobile ? <Menu /> : <NavBar />}
   <div className="facilities-div">
    <h1>Lifestyle</h1>
   </div>
   <div>
    <h1>Exterior</h1>
   </div>
   <div>
    <h1>Interior</h1>
   </div>
   <div>
    <h1>Dining</h1>
   </div>
  </div>
 );
}

export default FacilitiesPage;
