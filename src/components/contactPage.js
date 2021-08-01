import React from "react";
import emailjs from "emailjs-com";
import NavBar from "./navBar";
import Footer from "./footer";
import Menu from "./slideMenu";

import "./css/contactPage.css";
import { useMediaQuery } from "react-responsive";
function ContactPage() {
 const isMobile = useMediaQuery({ query: "(max-width:725px)" });
 function sendEmail(e) {
  e.preventDefault();

  emailjs
   .sendForm(
    "service_rlw04v5",
    "template_ovrldoe",
    e.target,
    "user_cEmXau168ofewFbfWCDTf"
   )
   .then(
    (result) => {
     console.log(result.text);
    },
    (error) => {
     console.log(error.text);
    }
   );
  e.target.reset();
 }

 return (
  <div>
   {isMobile ? <Menu /> : <NavBar />}
   <div className="contactPage-container">
    <h1 className="contact-head">Contact Us</h1>
    <form className="contact-form-page" onSubmit={sendEmail}>
     <input type="hidden" name="contact_number" className="input-page" />
     <label className="label-page">Name</label>
     <input type="text" name="name" className="input-page" />

     <label className="label-page">Email</label>
     <input type="email" name="email" className="input-page" />

     <label className="label-page">Subject</label>
     <input type="text" name="subject" className="input-page" />
     <label className="label-page">Message</label>

     <textarea name="message" className="text-area-page" />
     <input type="submit" value="Send" className="submit-button-page" />
    </form>
   </div>
   <Footer />
  </div>
 );
}

export default ContactPage;
