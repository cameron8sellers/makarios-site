import React from 'react'
import emailjs from 'emailjs-com'
import './css/contact.css'

const ContactForm = () => {

            function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rlw04v5', 'template_ovrldoe', e.target, 'user_cEmXau168ofewFbfWCDTf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactForm