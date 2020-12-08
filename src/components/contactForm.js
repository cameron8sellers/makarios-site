import React, {useState} from 'react'
import {Form, Label, Input, FormGroup, Button} from 'reactstrap'
import axios from 'axios'

const ContactForm = () => {


            constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };   
            }
            
            handleChange(e) {
    const field = e.target.id;
    if (field === "name") {
      this.setState({ name: e.target.value });
    } else if (field === "email") {
      this.setState({ email: e.target.value });
    } else if (field === "message") {
      this.setState({ message: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();  
    this.setState({ status: "Sending" });  
    axios({
      method: "POST",
      url: "http://localhost:5000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        alert("Message Sent");
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

            
            return(
            <div>
                        <Form>
                                    <FormGroup>

                                    <Label>Name</Label>
                                    <Input type='text' id='name' />

                                    <Label for='email'>Email</Label>
                                    <Input type='email' name='email' id='contactEmail' />

                                    <Label>Subject</Label>
                                    <Input type='text' id='subject' />

                                    <Label>Message</Label>
                                    <Input type='textarea' id='messgae' />

                                    </FormGroup>
                                    <Button>Submit</Button>
                        </Form>
            </div>
            )
}

export default ContactForm